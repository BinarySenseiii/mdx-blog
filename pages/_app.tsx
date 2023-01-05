import localFont from '@next/font/local';
import cx from 'clsx';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

import NextNProgress from 'nextjs-progressbar';
import { Layout } from '../components/Layout';
import { DefaultSeo } from 'next-seo';
import { seo } from '../lib/seo';

const hubot = localFont({
  src: '../public/assets/HubotSans.woff2',
  variable: '--font-hubot',
  weight: '400 900',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...seo} />
      <NextNProgress color="#c06695" />
      <main className={cx('font-sans', hubot.variable)}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </>
  );
}
