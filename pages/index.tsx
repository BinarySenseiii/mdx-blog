import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { BlogPostPreview } from '../components/BlogPostPreview';
import { BLOG_DIR, getMetaData } from '../lib/md';
import { IFrontMatter } from '../types/blog-post';

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
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {posts.map((post: IFrontMatter) => (
          <BlogPostPreview key={post.slug} {...post} />
        ))}
      </div>
    </>
  );
}
