'use client';

import { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import imageCompression from 'browser-image-compression';
import getCroppedImg from '../utlis/cropImage';
import type { Area } from 'react-easy-crop';

export default function CoverImageUpload() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null); // 👈 used by Cropper
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [finalImage, setFinalImage] = useState<string | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file)); // ✅ correct image rendering
    }
  };

  const onCropComplete = useCallback((_croppedArea: Area, pixels: Area) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleCropSave = async () => {
    if (!imageUrl || !croppedAreaPixels) return;

    try {
      const croppedBlob = await getCroppedImg(imageUrl, croppedAreaPixels);
      const croppedFile = new File([croppedBlob], 'cover.jpg', { type: 'image/jpeg' });

      const compressedFile = await imageCompression(croppedFile, {
        maxSizeMB: 0.2,
        maxWidthOrHeight: 512,
        useWebWorker: true,
      });

      const finalBase64 = await imageCompression.getDataUrlFromFile(compressedFile);
      setFinalImage(finalBase64);
      setImageUrl(null); // hide cropper
      setImageFile(null);
    } catch (err) {
      console.error('Crop/Compression failed:', err);
    }
  };

  const handleRemoveImage = () => {
    setFinalImage(null);
    setImageUrl(null);
    setImageFile(null);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setCroppedAreaPixels(null);
  };

  return (
    <div className="lg:w-4/12 w-full">
      <h2 className="text-xl font-semibold mb-4 text-black">Add a Story Cover</h2>

      <div className="w-full h-[512px] bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg mb-4 overflow-hidden relative flex items-center justify-center group">
        {!imageUrl && !finalImage && (
          <label
            htmlFor="cover-image"
            className="w-full h-full flex items-center justify-center text-gray-500 cursor-pointer z-10"
          >
            Click to upload or drag & drop
            <input
              type="file"
              id="cover-image"
              accept="image/*"
              className="hidden"
              onChange={onFileChange}
            />
          </label>
        )}

        {finalImage && (
          <>
            <img
              src={finalImage}
              alt="Cover Preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <button
              onClick={handleRemoveImage}
              className="absolute top-3 right-3 bg-white text-red-600 border border-red-500 px-2 py-1 rounded text-xs shadow z-20 hover:bg-red-100"
            >
              Remove
            </button>
          </>
        )}

        {imageUrl && !finalImage && (
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
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-2 rounded shadow z-20"
            >
              Save Crop
            </button>
          </>
        )}
      </div>

      <div className="text-sm text-gray-600 space-y-1 mt-4">
        <p>
          <strong>Stories with a cover image</strong> get{' '}
          <span className="text-green-600 font-semibold">23x more reads</span> than ones without.
        </p>
        <p>
          Must be in <span className="font-medium">PNG or JPG</span> format, smaller than{' '}
          <span className="font-medium">1MB</span>.
        </p>
        <p>
          Recommended dimensions: <span className="font-medium">512x800 pixels</span>.
        </p>
      </div>
    </div>
  );
}
