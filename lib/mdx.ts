import {join} from 'path';
import fs from 'fs';

export const POST_DIR = '/content/posts/';

export const getSlugs = (path: string): string[] => {
  const slugs = fs.readdirSync(join(process.cwd(), path), 'utf8');

  const mdxSlugs = slugs.filter((slug: string) => slug.endsWith('.mdx'));

  return mdxSlugs.map((slug) => slug.replace('.mdx', ''));
};
