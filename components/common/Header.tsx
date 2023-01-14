import React from 'react';
import { Navigation } from '../Navigation';
import { ProfileImage } from '../ProfileImage';
import cx from 'clsx';
import { seo } from '../../lib/seo';

const Header = () => {
  return (
    <div className={cx('transition duration-300 opacity-100')}>
      <div className="flex items-center  flex-col md:flex-row space-y-6 md:space-y-0  md:space-x-6">
        <ProfileImage size="large" />

        <main>
          <h1 className="text-3xl font-medium text-rose-100/80 sm:text-4xl">
            Faisal Tariq
          </h1>
          <h2 className="align-middle mt-2 hidden md:block text-lg leading-6 text-rose-100/50">
            Continuously learning and improving as a self-taught frontend
            developer
          </h2>
        </main>
      </div>

      <p className="mt-4 md:mt-7 text-center md:text-left text-base md:text-xl text-rose-100/90 sm:mt-9">
        {seo.description}
      </p>

      <div className="mt-6 flex justify-center md:justify-start">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
