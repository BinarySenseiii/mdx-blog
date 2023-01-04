import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/assets/favicon.png"
          width={40}
          height={40}
          className="mx-auto"
          alt={'logo'}
        />
        <Link href="/">
          <h1 className="text-2xl text-white font-bold mt-4">Faisal Blog</h1>
        </Link>
        <p className="text-slate-300">
          Welcome to my digital garden where I share what I&apos;m learning
          about shipping great products, becoming a better developer and growing
          a career in tech.
        </p>
      </div>
    </header>
  );
};

export default Header;
