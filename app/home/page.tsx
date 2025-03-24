import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='bg-black'>
        {/* Intro Section */}
        <div className="p-8 sm:p-16 md:p-32 flex flex-col md:flex-row items-center md:items-start justify-between">
          
          {/* Text Content */}
          <div className="text-white text-base sm:text-xl md:text-2xl w-full md:w-1/2">
            <p>
              Hii, I&apos;m <b>Ramisa Fatima,</b>
              <br /><br />
              an aspiring AI engineer with a
              <br /> passion for building clean, responsive
              <br /> web applications. Dive into my work
              <br /> and see how I blend creativity with
              <br /> technology.
            </p>
          </div>

          {/* Image Section */}
          <div className="mt-8 md:mt-0">
            <Image
              src="/Profile.webp"
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-full border-white border-4 shadow-lg"
            />
          </div>
          
        </div>
      </div>
    </>
  );
}
