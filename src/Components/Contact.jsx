import React from 'react';
import { FiGithub, FiCoffee, FiLinkedin } from 'react-icons/fi';

function Contact() {
  return (
    <div className="flex w-full flex-row space-x-10 align-center justify-between px-20">
      <div className="flex space-x-8">
        <a
          href="https://github.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FiGithub className="animate-bounce text-orange-400 text-3xl" />
        </a>

        <a
          href="https://www.buymeacoffee.com/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FiCoffee className="animate-coffee-blow text-orange-400 text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/your-username"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
        >
          <FiLinkedin className="animate-pulse text-orange-400 text-3xl" />
        </a>
      </div>
      <div className="mt-4">
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
