// TODO: add article type
export default function ArticlePreview({ ...article }: any) {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{article.heading}</h1>
        <h2 className="text-xl italic">{article.subheading}</h2>
      </div>
      <div className="mb-6 border" />
    </div>
  );
}
