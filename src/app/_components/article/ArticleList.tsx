import ArticlePreview from '@/components/article/ArticlePreview';
import { getArticlePreviews } from '@/sanity/utils';

export default async function ArticleList() {
  const articles = await getArticlePreviews();

  return (
    <>
      {/* TODO: add article type */}
      {articles.map((article) => (
        <ArticlePreview key={article._id} {...article} />
      ))}
    </>
  );
}