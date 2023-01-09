import { IFrontMatter } from '../types/blog-post';
import { ContentLink } from './ContentLink';

export const BlogPostPreview = (post: IFrontMatter) => {
  return (
    <div>
      <ContentLink key={post.slug} href={`/posts/${post.slug}`}>
        <ContentLink.Title>{post.title}</ContentLink.Title>

        <ContentLink.Meta>
          <span>{post.date}</span>
          <span>{post.readTime.text}</span>
        </ContentLink.Meta>

        <ContentLink.Text>{post.summary}</ContentLink.Text>
      </ContentLink>
    </div>
  );
};
