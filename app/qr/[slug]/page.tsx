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
      content: marked("Mayflower was an English ship that transported a group of English families, known today as the Pilgrims, from England to the New World in 1620. After a grueling 10 weeks at sea, Mayflower, with 102 passengers and a crew of about 30, reached what is today the United States, dropping anchor near the tip of Cape Cod, Massachusetts, on November 21 [O.S. November 11], 1620.")
    },
    {
      slug: "dreadnaught",
      title: "Dreadnaught",
      image: "/images/dreadnaught.jpg",
      content: marked("The dreadnought was the predominant type of battleship in the early 20th century. The first of the kind, the Royal Navy's HMS Dreadnought, had such an effect when launched in 1906 that similar battleships built after her were referred to as \"dreadnoughts\", and earlier battleships became known as pre-dreadnoughts. Her design had two revolutionary features: an \"all-big-gun\" armament scheme, with an unprecedented number of heavy-calibre guns, and steam turbine propulsion.")
    },
    {
      slug: "clermont",
      title: "Clermont",
      image: "/images/clermont.jpg",
      content: marked("The North River Steamboat or North River, colloquially known as the Clermont, is widely regarded as the world's first vessel to demonstrate the viability of using steam propulsion for commercial water transportation. Built in 1807, the North River Steamboat operated on the Hudson River – at that time often known as the North River – between New York City and Albany, New York. It was built by the wealthy investor and politician Robert Livingston and inventor and entrepreneur Robert Fulton (1765–1815).")
    },
    {
      slug: "annmckim",
      title: "Ann McKim",
      image: "/images/annmckim.jpg",
      content: marked("Ann McKim was one of the early true clipper ships, designed to meet the increasing demand for faster cargo transportation between the United States and China in the early 1840s. The opening of new Treaty ports in the East allowed American merchants greater access to trade with China, leading to the need for ships that could move cargo more quickly than traditional merchant ships. Ann McKim was one of the ships that had answered the demand in the early years and sailed between New York and China in 1840–1842, until newer and faster cargo-carriers, such as the nearly 600-ton clipper Houqua, the 598-ton China packet Helena, Witch of the Wave, and Rainbow (with the last two built expressly to outperform Ann McKim) started dominating the shipping world.")
    },
    {
      slug: "savannah",
      title: "SS Savannah",
      image: "/images/savannah.jpg",
      content: marked("SS Savannah was an American hybrid sailing ship/sidewheel steamer built in 1818. She was the first steamship to cross the Atlantic Ocean, transiting mainly under sail power from May to June 1819. In spite of this historic voyage, the great space taken up by her large engine and its fuel at the expense of cargo, and the public's anxiety over embracing her revolutionary steam power, kept Savannah from being a commercial success as a steamship. Originally laid down as a sailing packet, she was, following a severe and unrelated reversal of the financial fortunes of her owners, converted back into a sailing ship shortly after returning from Europe.")
    },
    {
      slug: "puritan",
      title: "Puritan (yacht)",
      image: "/images/puritan.jpg",
      content: marked("The Puritan was a 19th-century racing yacht and the 1885 America's Cup defender of the international sailing trophy. Designed by Edward Burgess, she was built at the George Lawley & Son yard in South Boston, Massachusetts and launched May 26, 1885. For sails, Burgess chose the Irish-born sailmaker John H. McManus of McManus & Son, of Boston. The sails were of Plymouth duck. She defeated the New York Yacht Club's Priscilla then went on to defend the America's Cup against the British yacht Genesta, a traditional cutter. Immediately following the contest, they began work on an improved version which would be called the Mayflower.")
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
