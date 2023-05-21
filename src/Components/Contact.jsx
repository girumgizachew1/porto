import React from 'react';
import { FiGithub, FiCoffee, FiLinkedin } from 'react-icons/fi';
import { Cgmail } from "react-icons/cg";
function Contact() {
  return (
    <div className="flex w-full flex-col md:flex-row  align-center justify-between md:px-20 h-20">
      <div className="flex space-x-8 py-5 mx-auto">
        <a
          href="https://github.com/girumgizachew1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FiGithub className="animate-bounce text-orange-400 w-6 h-6" />
        </a>

        <a
          href="https://www.buymeacoffee.com/girumegizaM?new=1"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FiCoffee className="animate-coffee-blow text-orange-400 w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/girum-gizachew-9324b820b/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FiLinkedin className="animate-pulse text-orange-400 w-6 h-6" />
        </a>
        <a href="mailto:your-email@example.com">
          <CgMail className='w-6 h-6' >
        </a>
      </div>
      <div className="mt-4 mx-auto">
        <a
          href='./girumresume.pdf'
          download="girumresume.pdf"
          className="text-orange-400 font-bold text-lg"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Contact;
