import ArticlePreview from '@/components/article/ArticlePreview';
import { getArticles } from '@/sanity/utils';

export default async function ArticleList() {
  const articles = await getArticles();

  return (
    <>
      {/* TODO: add article type */}
      {articles.map((article) => (
        <ArticlePreview key={article._id} {...article} />
      ))}
    </>
  );
}
