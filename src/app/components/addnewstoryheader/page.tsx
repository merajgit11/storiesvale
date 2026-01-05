'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  title?: string;
  status?: string;
  storyId?: string | null;
}

const Headeraddnewstory: React.FC<HeaderProps> = ({ title, status,storyId }) => {
  // Determine dot color based on status
  const getStatusColor = () => {
    switch (status) {
      case 'Saving...': return 'bg-yellow-400';
      case 'Saved':
      case 'Published!': return 'bg-green-500';
      case 'Error': return 'bg-red-500';
      default: return 'bg-gray-300';
    }
  };

  const router = useRouter();

  const handleContinue = () => {
    if (storyId && storyId !== 'new') {
      router.push(`/addnewstory/${storyId}/details`);
    } else {
      alert("Please write something first to save your story!");
    }
  };

  return (
    <header className="shadow-sm bg-white sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between">
        <div className="leftlogolink flex items-center gap-4 sm:gap-6">
          <div className="logo">
            <Link href="/" aria-label="Stories Stack Home" className='text-black text-2xl font-bold'>
              StoriesVale
            </Link>
          </div>
          
          <div className="titleofstr border-l pl-4 sm:pl-6 hidden sm:block">
            <h4 className="text-md font-semibold text-gray-800 line-clamp-1 max-w-[200px] md:max-w-[400px]">
              {title || 'Untitled Story'}
            </h4>
            <p className="flex items-center gap-2 text-gray-500 text-xs mt-1">
              <span className={`w-2 h-2 rounded-full inline-block ${getStatusColor()}`}></span>
              {status === 'Idle' ? 'Draft' : status}
            </p>
          </div>
        </div>

        <nav className="space-x-4 sm:space-x-10 items-center flex">
          <button onClick={handleContinue} className="bg-[#2ee081] text-white px-6 py-2 rounded hover:bg-[#20bc68] transition font-semibold text-sm">
            Continue
          </button>
          <Link href="/login" className="text-[#20344d] font-semibold hover:text-[#16273b] transition text-sm hidden md:inline">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Headeraddnewstory;