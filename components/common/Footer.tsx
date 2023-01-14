import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t-2 border-white/5  p-4 rounded-md mb-2">
      <h3 className="text-sm md:text-base text-center" aria-level={3}>
        Designed & Developed by{' '}
        <a
          href="https://github.com/FrontendFrenzy"
          role="link"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Faisal Tariq
        </a>
      </h3>
    </footer>
  );
};

export default Footer;
