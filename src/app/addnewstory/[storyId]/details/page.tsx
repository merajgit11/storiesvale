'use client';
import { useParams } from 'next/navigation';
import Headeraddnewstory from "../../../components/addnewstoryheader/page";
import CoverImageUpload from "../../../components/coverimageupload/CoverImageUpload";
import StoryInfoForm from "../../../components/coverimageupload/StoryInfoForm";


export default function StoryDetailsPage() {
    const params = useParams();
  const storyId = params.storyId as string;
  return (
      <>
      <Headeraddnewstory storyId={storyId} status="Editing Details" />
      <div className="flex flex-col lg:flex-row gap-16 px-4 md:px-8 py-10 m-auto" style={{maxWidth:"1100px",}}>
      <CoverImageUpload storyId={storyId} />
        <StoryInfoForm storyId={storyId} />
     
    </div>
     </>
  );
}
