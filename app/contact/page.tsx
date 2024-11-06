import Image from 'next/image';
import React from 'react';

const ContactMe = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4 pt-10">CONTACT ME</h1>
        <p className="text-lg mb-8 max-w-md mx-auto pt-10">
          I&apos;d love to connect with you! Whether you have questions, want to collaborate on a project, or just want to say hi, feel free to reach out.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto pt-12">
        {/* GitHub */}
        <div className="flex items-center">
          <Image src="/github.webp" alt="GitHub" width={64} height={64} className="mr-4" />
          <a
            href="https://github.com/dashboard"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/dashboard
          </a>
        </div>
        {/* LinkedIn */}
        <div className="flex items-center">
          <Image src="/linkedin.jpeg" alt="LinkedIn" width={64} height={64} className="mr-4" />
          <a
            href="https://www.linkedin.com/in/ramisa-fatima-8639822b8/"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.linkedin.com/in/ramisa-fatima-8639822b8/
          </a>
        </div>
        {/* Instagram */}
        <div className="flex items-center">
          <Image src="/instagram.jpeg" alt="Instagram" width={64} height={64} className="mr-4" />
          <a
            href="https://www.instagram.com/ai_coding.19/?igsh=MWNkDY1enVxZjZ6ZA%3D%3D"
            className="text-blue-400 hover:text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.instagram.com/ai_coding.19/?igsh=MWNkDY1enVxZjZ6ZA%3D%3D
          </a>
        </div>
        {/* Email */}
        <div className="flex items-center">
          <Image src="/email.jpeg" alt="Gmail" width={64} height={64} className="mr-4" />
          <p className="text-blue-400">
            fatimaramisa12@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
