import React from 'react';
import { Navigation } from '../Navigation';
import { ProfileImage } from '../ProfileImage';
import cx from 'clsx';
import { seo } from '../../lib/seo';

const Header = () => {
  return (
    <div className={cx('transition duration-300 opacity-100')}>
      <div className="flex items-center space-x-6">
        <ProfileImage size="large" />

        <div>
          <h1 className="text-3xl font-medium text-rose-100/80 sm:text-4xl">
            Faisal Tariq
          </h1>
          <h2 className="align-middle text-lg leading-6 text-rose-100/50">
            <span className="hidden sm:inline">Developer Experience</span>
            <span className="inline sm:hidden" title="Developer Experience">
              DX
            </span>{' '}
            at{' '}
            <span className="font-medium text-rose-100/70">
              <span className="mr-px align-middle">
                <span className="-my-2 inline-block text-[24px]">▲</span>
              </span>
              ColossalBit.io
            </span>
          </h2>
        </div>
      </div>

      <p className="mt-7 text-xl text-rose-100/90 sm:mt-9">{seo.description}</p>

      <div className="mt-6">
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
