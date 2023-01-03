export interface IFrontMatter {
  title: string;
  tags: string[];
  summary: string;
  slug?: string;
  date: string;
}

export interface IBlogPost extends IFrontMatter {
  content: string;
}
