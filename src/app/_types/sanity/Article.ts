import type { PortableTextBlock } from 'sanity';

export type ArticlePreviewData = {
  _id: string;
  heading: string;
  subheading: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
};

export type ArticleData = ArticlePreviewData & {
  _createdAt: Date;
  _updatedAt: Date;
  content: PortableTextBlock[];
};
