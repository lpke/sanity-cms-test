import Button from '@/components/Button';
import ImgHolder from '@/components/ImgHolder';
import Image from 'next/image';

// TODO: add article type
export default function ArticlePreview({ ...article }: any) {
  return (
    <div>
      <div className="mb-4 flex flex-row items-center justify-between px-4">
        <div className="flex flex-row items-center">
          <ImgHolder
            src={article.image.url}
            alt={article.image.alt}
            width={150}
            height={100}
            className="mr-6"
          />
          <div>
            <h1 className="mb-1 text-2xl font-bold">{article.heading}</h1>
            <h2 className="text-xl italic">{article.subheading}</h2>
          </div>
        </div>
        <Button href={`article/${article.slug}`}>Read Article</Button>
      </div>
      <div className="mb-4 border" />
    </div>
  );
}
