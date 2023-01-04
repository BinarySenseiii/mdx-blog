import Link from 'next/link';
import React from 'react';
import { IFrontMatter } from '../types/blog-post';

const PostItem: React.FC<IFrontMatter> = ({ title, date, slug, summary }) => {
  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm bg-white">
      <p className="text-sm text-slate-400">{date}</p>
      <Link href={`/posts/${slug}`}>
        <h2 className=" text-violet-600 hover:underline">{title}</h2>
      </Link>
    </div>
  );
};
export default PostItem;
