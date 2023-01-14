import { createOgImage } from './createOgImage';
import type { DefaultSeoProps } from 'next-seo';

const title = `Faisal`;
const description = `Welcome to my digital garden where I share what I'm learning about shipping great products, becoming a better developer and growing a career in tech.`;
const domain = `mdx-blog`;
const meta = `Developer Experience at ColossalBit.io`;

export const seo: DefaultSeoProps = {
  title: title + ' | ' + meta,
  description,
  openGraph: {
    title,
    type: 'website',
    url: `https://${domain}`,
    site_name: title,
    images: [
      {
        url: createOgImage({ title, meta }),
        width: 1600,
        height: 836,
        alt: title,
      },
    ],
  },
};
