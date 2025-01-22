import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <div className='bg-black text-white'>
        {/* About */}
        <div className="p-8 sm:p-16 md:p-28">
          <h1 className='text-3xl sm:text-4xl md:text-5xl flex justify-start text-white'>
            <b><i>About Me</i></b>
          </h1>
          <br />
          <br />
          <div className="text-white text-lg sm:text-xl md:text-2xl flex justify-start w-full md:w-96 h-auto">
            <p>
              I have experience working with 
              <br />modern technologies like HTML, 
              <br />CSS, TypeScript, and JavaScript, 
              <br />and I&apos;m currently expanding my 
              <br />skills in Next.js. I enjoy creating 
              <br />clean, responsive, and user-
              <br />friendly websites, and I&apos;m always 
              <br />eager to learn new tools and 
              <br />technologies.
            </p>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative -mt-12 sm:-mt-16 md:-mt-24">
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
      </div>
    </>
  )
}
