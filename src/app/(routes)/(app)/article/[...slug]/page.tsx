import Article from '@/components/article/Article';
import NotFound from '@/routes/(app)/not-found';
import { getArticle } from '@/sanity/utils';

type ArticlePageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const articleSlug = slug?.[0];

  if (!articleSlug) return <NotFound />;

  const article = await getArticle(articleSlug);

  if (!article) return <NotFound />;

  return <Article {...article} />;
}
