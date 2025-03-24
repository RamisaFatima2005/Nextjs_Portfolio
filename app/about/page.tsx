import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <div className='bg-black text-white'>
        {/* About Section */}
        <div className="p-8 sm:p-16 md:p-28 flex flex-col md:flex-row items-center md:items-start justify-between">
          
          {/* Text Content */}
          <div className="text-lg sm:text-xl md:text-2xl w-full md:w-1/2">
            <h1 className='text-3xl sm:text-4xl md:text-5xl text-white mb-6'>
              <b><i>About Me</i></b>
            </h1>
            <p>
              I have experience working with modern technologies like HTML, 
              CSS, TypeScript, and JavaScript, and I&apos;m currently expanding my 
              skills in Next.js. I enjoy creating clean, responsive, and user-
              friendly websites, and I&apos;m always eager to learn new tools and 
              technologies.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-8 md:mt-0">
            <Image
              src="/About.PNG"
              alt="About Me Picture"
              width={250}
              height={250}
              className="rounded-lg shadow-lg"
            />
          </div>

        </div>
      </div>
    </>
  );
}
