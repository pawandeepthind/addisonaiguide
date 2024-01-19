import AudioPlayer from '@/components/AudioPlayer'
import { notFound } from 'next/navigation'
import { marked } from 'marked';

function containsSlug(slug: string) {
  return ["mayflower", "dreadnaught", "clermont"];
}

export type ArticleAudio = {
  slug: string,
  title: string,
  image: string,
  content: string
}

function getArticle(slug: string): ArticleAudio | undefined {
  const data: Array<ArticleAudio> = [
    {
      slug: "mayflower",
      title: "Mayflower",
      image: "/images/mayflower.jpg",
      content: "Mayflower was an English ship that transported a group of English families, known today as the Pilgrims, from England to the New World in 1620. After a grueling 10 weeks at sea, Mayflower, with 102 passengers and a crew of about 30, reached what is today the United States, dropping anchor near the tip of Cape Cod, Massachusetts, on November 21, 1620"
    },
    {
      slug: "dreadnaught",
      title: "Dreadnaught",
      image: "/images/dreadnaught.jpg",
      content: "The dreadnought was the predominant type of battleship in the early 20th century. The first of the kind, the Royal Navy's HMS Dreadnought, had such an effect when launched in 1906 that similar battleships built after her were referred to as dreadnoughts, and earlier battleships became known as pre-dreadnoughts"
    },
    {
      slug: "clermont",
      title: "Clermont",
      image: "/images/clermont.jpg",
      content: "The North River Steamboat or North River, colloquially known as the Clermont, is widely regarded as the world's first vessel to demonstrate the viability of using steam propulsion for commercial water transportation. Built in 1807, the North River Steamboat operated on the Hudson River – at that time often known as the North River – between New York City and Albany, New York."
    }
  ];
  return data.filter((ele) => ele.slug === slug)[0];
}

export default async function Home({ params }: { params: { slug: string } }) {
  if (!containsSlug(params.slug))
    notFound();

  const article: ArticleAudio | undefined = getArticle(params.slug);
  if (article === undefined)
    notFound();

  return (
    <div className="flex flex-col items-center">
      <div className="max-w-md bg-black">
        <AudioPlayer slug={params.slug} title={article.title} image={article.image} body={article.content} />
      </div>
    </div>
  )
}
