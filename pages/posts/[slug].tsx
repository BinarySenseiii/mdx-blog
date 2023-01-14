/* eslint-disable react/no-children-prop */
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { BLOG_DIR, getData } from '../../lib/md';
import readingTime from 'reading-time';

import 'highlight.js/styles/night-owl.css';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import Image from 'next/image';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import YouTube from '../../components/youTube';
import BackButton from '../../components/BackButton';

const PostDetailPage: React.FC = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>{/* <title>{post.meta.title}</title> */}</Head>
      <div className="w-[200px] -mb-4">
        <BackButton path="/" text="Back" />
      </div>
      <Image src={post.coverImage} alt={post.title} width={1703} height={980} />
      <main className="space-y-2">
        <h1
          className="text-2xl md:text-3xl font-bold"
          role="heading"
          aria-level={1}
        >
          {post.title}
        </h1>
        <div className="flex items-center space-x-4">
          <span>{post.date}</span>
          <span>{post.readTime.text}</span>
        </div>
      </main>
      <MDXRemote {...post.source} components={{ YouTube, Image }} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const metaData = getData(BLOG_DIR);

  return {
    paths: metaData.map((data) => ({ params: { slug: data.slug } })),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as ParsedUrlQuery;
  const posts = getData(BLOG_DIR);

  const { content, ...meta } = posts.find((post) => post.slug === slug) as any;

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeHighlight,
      ],
    },
  });

  return { props: { post: { source: mdxSource, ...meta } } };
};

export default PostDetailPage;
