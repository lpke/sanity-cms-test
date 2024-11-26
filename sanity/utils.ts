import { createClient, groq } from 'next-sanity';

const client = createClient({
  projectId: 'd2cqckcf',
  dataset: 'production',
  apiVersion: '2024-11-20',
});

export async function getArticlePreviews() {
  return client.fetch(
    groq`*[_type == "article"]{
      _id,
      _createdAt,
      heading,
      subheading,
      "slug": slug.current,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      }
    }`,
  );
}

export async function getArticle(slug: string) {
  return client.fetch(
    groq`*[_type == "article" && slug.current == "${slug}"]{
      _id,
      _createdAt,
      _updatedAt,
      heading,
      subheading,
      "image": {
        "url": image.asset->url,
        "alt": image.alt
      },
      content 
    }[0]`,
  );
}
