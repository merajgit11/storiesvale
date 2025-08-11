import Image from 'next/image';
import Link from 'next/link';

const Headeraddnewstory = () => {
  return (
    <header className="shadow-sm bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between">
        <div className="leftlogolink flex items-center gap-4 sm:gap-6"> {/* Adjusted gap for better responsiveness */}
          <div className="logo">
            <Link href="/" aria-label="Stories Stack Home" className='text-black text-2xl font-bold'>
              StoriesVale
            </Link>
          </div>
          <div className="titleofstr">
            <h4 className="text-lg font-semibold text-gray-800">Game on, we are coming for you!</h4> {/* Added basic styling */}
            <p className="flex items-center gap-2 text-gray-600 text-sm"> {/* Added basic styling */}
              <span className="w-2 h-2 rounded-full bg-green-500 inline-block"></span>
              Saving... {/* Changed 'Saving' to 'Saving...' to imply action */}
            </p>
          </div>
        </div>

        <nav className="space-x-4 sm:space-x-10 items-center hidden md:flex"> {/* Adjusted space-x for responsiveness */}
          <Link href="/continue" className="bg-[#2ee081] text-white px-6 py-3 rounded hover:bg-[#20bc68] transition font-semibold nextbutton">
            Continue
          </Link>
          <Link href="/login" className="text-[#20344d] font-semibold hover:text-[#16273b] transition"> {/* Added hover effect */}
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Headeraddnewstory;