import React from 'react';
import GradientBackground from './GradientBackground';
import TurbelanceEffect from './TurbelanceEffect';
import { Header } from './common';
import { useRouter } from 'next/router';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <>
      <TurbelanceEffect />
      <div className="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] gap-y-8 px-4 pt-20 font-sans text-base text-rose-100/90 xl:grid-cols-[1fr,minmax(auto,240px),min(640px,100%),minmax(auto,240px),1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
        {router.pathname === '/' && <Header />}
        {children}
      </div>

      <GradientBackground />
    </>
  );
};
