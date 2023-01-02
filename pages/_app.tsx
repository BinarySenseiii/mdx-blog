import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Inter} from '@next/font/google';

import NextNProgress from 'nextjs-progressbar';

const inter = Inter({
  variable: '--font-inter',
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <NextNProgress color="#7c09ff" />
      <div className={inter.variable}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
