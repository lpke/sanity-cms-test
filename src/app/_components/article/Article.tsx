import ImgHolder from '@/components/ImgHolder';
import { formatDate } from '@/utils/date';
import Link from 'next/link';

// TODO: add article type
export default async function Article({ ...article }) {
  console.log({ content: article.content });

  return (
    <div>
      <Link
        href="/"
        className="mb-3 mt-[-0.5rem] block text-blue-500 underline"
      >
        {'< Back'}
      </Link>
      <ImgHolder
        src={article.image.url}
        alt={article.image.alt}
        width="100%"
        height={300}
        className="mb-6"
      />

      <div className="flex flex-row items-start justify-between">
        <div>
          <h1 className="mb-3 text-3xl font-bold">{article.heading}</h1>
          <h2 className="text-xl italic">{article.subheading}</h2>
        </div>
        <div className="ml-6 flex-shrink-0 text-right">
          <p>
            <span className="font-medium">created:</span>{' '}
            <span className="text-gray-500">
              {formatDate(article._createdAt)}
            </span>
          </p>
          <p>
            <span className="font-medium">updated:</span>{' '}
            <span className="text-gray-500">
              {formatDate(article._updatedAt)}
            </span>
          </p>
        </div>
      </div>

      <div></div>
    </div>
  );
}
