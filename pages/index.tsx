import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { BLOG_DIR, getMetaData } from '../lib/md';
import Link from 'next/link';
import { IFrontMatter } from '../types/blog-post';
import PostItem from '../components/PostItem';
import { Navigation } from '../components/Navigation';
import { ProfileImage } from '../components/ProfileImage';
import cx from 'clsx';
import { seo } from '../lib/seo';

export const getStaticProps: GetStaticProps = async () => {
  const posts = getMetaData(BLOG_DIR);

  return {
    props: {
      posts,
    },
  };
};

export default function Home({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className={cx('transition duration-300 opacity-100')}>
        <div className="flex items-center space-x-6">
          <ProfileImage size="large" />

          <div>
            <h1 className="text-3xl font-medium text-rose-100/80 sm:text-4xl">
              Faisal Tariq
            </h1>
            <h2 className="align-middle text-lg leading-6 text-rose-100/50">
              <span className="hidden sm:inline">Developer Experience</span>
              <span className="inline sm:hidden" title="Developer Experience">
                DX
              </span>{' '}
              at{' '}
              <span className="font-medium text-rose-100/70">
                <span className="mr-px align-middle">
                  <span className="-my-2 inline-block text-[24px]">▲</span>
                </span>
                ColossalBit.io
              </span>
            </h2>
          </div>
        </div>

        <p className="mt-7 text-xl text-rose-100/90 sm:mt-9">
          {seo.description}
        </p>

        <div className="mt-8 sm:mt-12">
          <Navigation />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {posts.map((post: IFrontMatter) => (
          <PostItem key={post.slug} {...post} />
        ))}
      </div>
    </>
  );
}
