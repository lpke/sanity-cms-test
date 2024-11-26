// TODO: add article type
export default async function Article({ ...article }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{article.heading}</h1>
      <h2 className="text-xl italic">{article.subheading}</h2>
    </div>
  );
}
