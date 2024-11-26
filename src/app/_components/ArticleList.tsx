import { getArticles } from '@/sanity/utils';

export default async function ArticleList() {
  const articles = await getArticles();

  return (
    <div>
      {articles.map((article) => (
        <div key={article._id}>
          <div className="mb-6">
            <h1 className="text-2xl font-bold">{article.heading}</h1>
            <h2 className="text-xl italic">{article.subheading}</h2>
          </div>
          <div className="border mb-6" />
        </div>
      ))}
    </div>
  );
}
