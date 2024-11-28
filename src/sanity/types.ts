import type { Article as GeneratedArticleType } from '@/sanity/types.generated';

export type ArticleData = GeneratedArticleType & {
  image: GeneratedArticleType['image'] & {
    url: string;
  };
};
