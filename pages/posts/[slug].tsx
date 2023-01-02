import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from 'next';
import React from 'react';
import {BLOG_DIR, getSlugs} from '../../lib/md';
import {ParsedUrlQuery} from 'querystring';

const PostDetailPage: React.FC = ({
  slug,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <h1 role="heading">{slug}</h1>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getSlugs(BLOG_DIR);

  return {
    paths: slugs.map((slug) => ({params: {slug}})),
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const {slug} = context.params as ParsedUrlQuery;

  return {
    props: {
      slug,
    },
  };
};

export default PostDetailPage;
