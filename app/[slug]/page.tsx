import ArticleInfo from '@/components/ArtifactInfo'
import ChatBot from '@/components/ChatBot'
import { notFound } from 'next/navigation'
import { marked } from 'marked';

function containsSlug(slug: string) {
  return ["mayflower", "dreadnaught"];
}

export type Article = {
  slug: string,
  title: string,
  image: string,
  content: string
}

function getArticle(slug: string): Article | undefined {
  const data: Array<Article> = [
    {
      slug: "mayflower",
      title: "Mayflower",
      image: "/images/mayflower.jpg",
      content: marked("**Mayflower** was an English ship that transported a group of English families, known today as the Pilgrims, from England to the New World in 1620. After a grueling 10 weeks at sea, Mayflower, with 102 passengers and a crew of about 30, reached what is today the United States, dropping anchor near the tip of Cape Cod, Massachusetts, on November 21 [O.S. November 11], 1620.\n\n Differing from their contemporaries, the Puritans (who sought to reform and purify the Church of England), the Pilgrims chose to separate themselves from the Church of England, which forced them to pray in private. They believed it was beyond redemption due to its resistance to reform and Roman Catholic past. Starting in 1608, a group of English families left England for the Netherlands, where they could worship freely. By 1620, the community determined to cross the Atlantic for America, which they considered a \"new Promised Land\", where they would establish Plymouth Colony.\n\nThe Pilgrims had originally hoped to reach America by early October using two ships, but delays and complications meant they could use only one, Mayflower. Arriving in November, they had to survive unprepared through a harsh winter. As a result, only half of the original Pilgrims survived the first winter at Plymouth. If not for the help of local indigenous peoples to teach them food gathering and other survival skills, all of the colonists might have perished. The following year, those 53 who survived, celebrated the colony's first fall harvest along with 90 Wampanoag Native American people, an occasion declared in centuries later the first American Thanksgiving. Before disembarking the Mayflower, the Pilgrims wrote and signed the Mayflower Compact, an agreement that established a rudimentary government, in which each member would contribute to the safety and welfare of the planned settlement. As one of the earliest colonial vessels, the ship has become a cultural icon in the history of the United States.")
    },
    {
      slug: "dreadnaught",
      title: "DreadNaught",
      image: "/images/dreadnaught.jpg",
      content: marked("The **dreadnought** was the predominant type of battleship in the early 20th century. The first of the kind, the Royal Navy's HMS Dreadnought, had such an effect when launched in 1906 that similar battleships built after her were referred to as \"dreadnoughts\", and earlier battleships became known as pre-dreadnoughts. Her design had two revolutionary features: an \"all-big-gun\" armament scheme, with an unprecedented number of heavy-calibre guns, and steam turbine propulsion.[a] As dreadnoughts became a crucial symbol of national power, the arrival of these new warships renewed the naval arms race between the United Kingdom and Germany. Dreadnought races sprang up around the world, including in South America, lasting up to the beginning of World War I. Successive designs increased rapidly in size and made use of improvements in armament, armour, and propulsion throughout the dreadnought era. Within five years, new battleships outclassed Dreadnought herself. These more powerful vessels were known as \"super-dreadnoughts\". Most of the original dreadnoughts were scrapped after the end of World War I under the terms of the Washington Naval Treaty, but many of the newer super-dreadnoughts continued serving throughout World War II.\n\nDreadnought-building consumed vast resources in the early 20th century, but there was only one battle between large dreadnought fleets. At the Battle of Jutland in 1916, the British and German navies clashed with no decisive result. The term \"dreadnought\" gradually dropped from use after World War I, especially after the Washington Naval Treaty, as virtually all remaining battleships shared dreadnought characteristics; it can also be used to describe battlecruisers, the other type of ship resulting from the dreadnought revolution.")
    },
    {
      slug: "clermont",
      title: "Clermont",
      image: "/images/clermont.jpg",
      content: marked("The **North River Steamboat** or **North River**, colloquially known as the **Clermont**, is widely regarded as the world's first vessel to demonstrate the viability of using steam propulsion for commercial water transportation.[2] Built in 1807, the North River Steamboat operated on the Hudson River – at that time often known as the North River – between New York City and Albany, New York. It was built by the wealthy investor and politician Robert Livingston and inventor and entrepreneur Robert Fulton (1765–1815). \n\n Livingston had obtained. Livingston had obtained from the New York legislature the exclusive right to steam navigation on the Hudson River. In 1803, while Livingston was Minister to France, Fulton's company built a small steamboat and tested it on the Seine. With this success, Livingston then contracted with Fulton to take advantage of his Hudson River monopoly and build a larger version for commercial service. \n\n Their larger steamer was built at the Charles Browne shipyard in New York and was fitted with Fulton's innovative steam engine design, manufactured for Livingston and Fulton by Boulton and Watt in Birmingham, England. Before she was later widened, the vessel's original dimensions were 150 feet (46 m) long × 12 feet (3.7 m) wide × 7 feet (2.1 m) deep; she drew a little more than 2 feet (60 cm) of water when launched. The steamer was equipped with two paddle wheels, one each to a side; each paddle wheel assembly was equipped with two sets of eight spokes. She also carried two masts with spars, rigging, and sails, likely a foremast with square sail and a mizzen mast with fore-and-aft sail (spanker), with the steam engine placed amidships, directly behind the paddle wheel's drive gear machinery")
    },
  ];
  return data.filter((ele) => ele.slug === slug)[0];
}

export default async function Home({ params }: { params: { slug: string } }) {
  if (!containsSlug(params.slug))
    notFound();

  const article: Article | undefined = getArticle(params.slug);
  if (article === undefined)
    notFound();

  return (
    <div className="flex flex-wrap">
      <div className="bg-slate-50 w-3/5 h-screen">
        <ArticleInfo slug={params.slug} title={article.title} image={article.image} body={article.content} />
      </div>
      <div className="bg-slate-300 w-2/5 max-h-full">
        <ChatBot slug={params.slug} body={article.content} />
      </div>
    </div>
  )
}
