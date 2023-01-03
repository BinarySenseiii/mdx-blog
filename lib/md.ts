import {join} from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import {IBlogPost, IFrontMatter} from '../types/blog-post';

export const BLOG_DIR = '/content/posts';

export const getPath = (path: string): string => join(process.cwd(), path);

export const readFileContent = (filePath: string): any =>
  fs.readFileSync(getPath(filePath), 'utf8');

export const getMetaData = (path: string): IFrontMatter[] => {
  const fileNames = fs.readdirSync(getPath(path));

  const markdownFiles = fileNames.filter((fn) => fn.endsWith('.mdx'));

  return markdownFiles.map((file: string) => {
    const raw = readFileContent(`${path}/${file}`) as string;

    const {data} = matter(raw);

    return {
      title: data.title,
      tags: data.tags,
      date: data.date,
      summary: data.summary,
      slug: file.replace('.mdx', ''),
    } as IFrontMatter;
  });
};

// All Blog Post
export const getBlogPosts = (filePath: string): IBlogPost => {
  const blogPost = readFileContent(filePath);

  const {data, content} = matter(blogPost);

  return {...data, content} as IBlogPost;
};
