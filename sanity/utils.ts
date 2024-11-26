import { createClient, groq } from 'next-sanity';

export async function getArticles() {
  const client = createClient({
    projectId: 'd2cqckcf',
    dataset: 'production',
    apiVersion: '2024-11-20',
  });

  return client.fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      heading,
      subheading,
      "slug": slug.current,
      "image": image.asset->url,
      content 
    }`,
  );
}
