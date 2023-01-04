import '../styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import cx from 'clsx';

import NextNProgress from 'nextjs-progressbar';
import { Header, Footer } from '../components/common';

const hubot = localFont({
  src: '../public/assets/HubotSans.woff2',
  variable: '--font-hubot',
  weight: '400 900',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#7c09ff" />
      <div className={cx('font-sans', hubot.variable)}>
        <main className="font-inter mx-auto  max-w-2xl px-6">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </main>
      </div>
    </>
  );
}
