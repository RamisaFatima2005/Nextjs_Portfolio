import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <>

    <div className='bg-black text-white'>
    {/*About*/}
    <div className="p-28">
    <h1 className='text-5xl flex justify-start text-white'><b><i>About Me</i></b></h1>
    <br/>
    <br/>
    <div className="text-white text-2xl flex justify-start w-96 h-28">
    <p> I have experience working with 
      <br/>modern technologies like HTML, 
      <br/>CSS, TypeScript, and JavaScript, 
      <br/>and I&apos;m currently expanding my 
      <br/>skills in Next.js. I enjoy creating 
      <br/>clean, responsive, and user-
      <br/>friendly websites, and I&apos;m always 
      <br/>eager to learn new tools and 
      <br/>technologies.</p>
    </div>

{/*Image*/}
<div className="flex justify-end">
        <div className="relative -mt-24">
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
