import ImgHolder from '@/components/ImgHolder';
import LinkText from '@/components/LinkText';
import type { ArticleData } from '@/types/sanity/Article';
import { formatDate } from '@/utils/date';
import { PortableText, type PortableTextReactComponents } from 'next-sanity';

const contentComponents: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ children, value }) => {
      return <LinkText href={value.href}>{children}</LinkText>;
    },
  },
  block: {
    normal: ({ children }) => <p className="mb-3">{children}</p>,
  },
};

export default async function Article({ ...article }: ArticleData) {
  return (
    <div>
      <LinkText href="/" className="mb-3 mt-[-0.5rem] block">
        {'< Back'}
      </LinkText>

      <ImgHolder
        src={article.image.url}
        alt={article.image.alt}
        width="100%"
        height={300}
        className="mb-6"
      />

      <div className="mb-6 flex flex-col items-start justify-between sm:flex-row md:mb-8">
        <div>
          <h1 className="mb-2 text-2xl font-bold md:mb-3 md:text-3xl">
            {article.heading}
          </h1>
          <h2 className="text-lg italic md:text-xl">{article.subheading}</h2>
        </div>

        <div className="mt-6 flex-shrink-0 text-[0.9rem] sm:ml-6 sm:mt-0 sm:text-right">
          <p>
            <span className="font-medium text-gray-800">created:</span>{' '}
            <span className="text-gray-500">
              {formatDate(article._createdAt)}
            </span>
          </p>
          <p>
            <span className="font-medium text-gray-800">updated:</span>{' '}
            <span className="text-gray-500">
              {formatDate(article._updatedAt)}
            </span>
          </p>
        </div>
      </div>

      <PortableText value={article.content} components={contentComponents} />
    </div>
  );
}
