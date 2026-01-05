'use client';

import { useState, useCallback, useEffect } from 'react';
import Cropper from 'react-easy-crop';
import imageCompression from 'browser-image-compression';
import getCroppedImg from '../utlis/cropImage';
import type { Area } from 'react-easy-crop';

interface Props {
  storyId: string;
}

export default function CoverImageUpload({ storyId }: Props) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [finalImage, setFinalImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 1. Fetch existing image if editing
  useEffect(() => {
    const fetchExistingCover = async () => {
      try {
        const res = await fetch(`https://api11.storiesvale.com/api/stories/${storyId}`);
        const data = await res.json();
        if (data?.cover_image) {
          // Adjust base URL to your Laravel storage path
          setFinalImage(`https://api11.storiesvale.com/public/${data.cover_image}`);
        }
      } catch (err) { console.error(err); }
    };
    if (storyId) fetchExistingCover();
  }, [storyId]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImageUrl(URL.createObjectURL(file));
  };

  const onCropComplete = useCallback((_croppedArea: Area, pixels: Area) => {
    setCroppedAreaPixels(pixels);
  }, []);

  // 2. The Upload Logic
  
  const handleCropSave = async () => {
    if (!imageUrl || !croppedAreaPixels) return;
    setIsUploading(true);

    try {
      // 1. Get the Blob from your utility
      const croppedBlob: Blob = await getCroppedImg(imageUrl, croppedAreaPixels);
      
      // 2. EXPLICITLY turn the Blob into a File object with a name and type
      const fileToCompress = new File([croppedBlob], "cover.jpg", { 
        type: "image/jpeg" 
      });

      // 3. Compress the File
      const compressedFile = await imageCompression(fileToCompress, {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 800,
        useWebWorker: true,
        fileType: "image/jpeg" // Explicitly tell the library the type
      });

      // 4. Prepare FormData
      const formData = new FormData();
      formData.append('cover_image', compressedFile);
      formData.append('_method', 'PUT'); // Method spoofing for Laravel

      const response = await fetch(`https://api11.storiesvale.com/api/stories/${storyId}`, {
        method: 'POST',
        headers: { 
            'Authorization': `Bearer mock_admin_token_12345`,
            // IMPORTANT: Do NOT set 'Content-Type' header manually when sending FormData
        },
        body: formData,
      });

      // Inside handleCropSave...
if (response.ok) {
  const result = await response.json();
  
  // Construct the absolute URL manually to be safe
  // result.story.cover_image is "covers/12345_random.jpg"
  const newImageUrl = `https://api11.storiesvale.com/public/${result.story.cover_image}`;
  
  setFinalImage(newImageUrl); 
  setImageUrl(null); // Close the cropper
}else {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
      }
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="lg:w-4/12 w-full">
      <h2 className="text-xl font-semibold mb-4 text-black">Add a Story Cover</h2>
      <div className="w-full h-[512px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg mb-4 overflow-hidden relative flex items-center justify-center group">
        
        {isUploading && (
          <div className="absolute inset-0 bg-white/80 z-50 flex items-center justify-center font-bold">
            Uploading...
          </div>
        )}

        {!imageUrl && !finalImage && (
          <label className="w-full h-full flex items-center justify-center text-gray-500 cursor-pointer">
            Click to upload cover
            <input type="file" accept="image/*" className="hidden" onChange={onFileChange} />
          </label>
        )}

        {finalImage && !imageUrl && (
          <>
            <img src={finalImage} alt="Cover" className="absolute inset-0 w-full h-full object-cover" />
            <button 
              onClick={() => setFinalImage(null)}
              className="absolute top-3 right-3 bg-white text-red-600 px-2 py-1 rounded shadow z-20"
            >
              Change
            </button>
          </>
        )}

        {imageUrl && (
          <>
            <Cropper
              image={imageUrl}
              crop={crop}
              zoom={zoom}
              aspect={512 / 800}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
            <button
              onClick={handleCropSave}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-6 py-2 rounded-full shadow-xl z-20"
            >
              Apply & Upload
            </button>
          </>
        )}
      </div>
    </div>
  );
}