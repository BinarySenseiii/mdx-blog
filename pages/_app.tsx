import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {Inter} from '@next/font/google';

const inter = Inter({
  variable: '--font-inter',
});

export default function App({Component, pageProps}: AppProps) {
  return (
    <div className={inter.variable}>
      <Component {...pageProps} />
    </div>
  );
}
