export interface IFrontMatter {
  title: string;
  tags: string[];
  summary: string;
  slug?: string;
  date: string;
  readTime: {
    minutes: number;
    text: string;
    time: number;
    words: number;
  };
}

export interface IBlogPost extends IFrontMatter {
  content: string;
}
