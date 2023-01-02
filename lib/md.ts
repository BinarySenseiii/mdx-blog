import {join} from 'path';
import fs from 'fs';

export const BLOG_DIR = '/content/posts/';

export const getSlugs = (path: string): string[] => {
  const fileNames = fs.readdirSync(join(process.cwd(), path), 'utf8');

  const markdownFiles = fileNames.filter((fn) => fn.endsWith('.mdx'));

  return markdownFiles.map((file) => file.replace('.mdx', ''));
};
