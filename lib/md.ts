import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import readingTime from 'reading-time';
import { IFrontMatter } from '../types/blog-post';

export const BLOG_DIR = '/content/posts';

export const getPath = (path: string): string => join(process.cwd(), path);

export const readFileContent = (filePath: string): any =>
  fs.readFileSync(getPath(filePath), 'utf8');

export const getData = (path: string): IFrontMatter[] => {
  const fileNames = fs.readdirSync(getPath(path));

  const markdownFiles = fileNames.filter((fn) => fn.endsWith('.mdx'));

  return markdownFiles.map((file: string) => {
    const raw = readFileContent(`${path}/${file}`) as string;

    const { data, content } = matter(raw);

    return {
      title: data.title,
      tags: data.tags,
      date: data.date,
      summary: data.summary,
      readTime: readingTime(content),
      slug: file.replace('.mdx', ''),
      content,
    } as IFrontMatter;
  });
};
