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
      content: marked("The **North River Steamboat** or **North River**, colloquially known as the **Clermont**, is widely regarded as the world's first vessel to demonstrate the viability of using steam propulsion for commercial water transportation.[2] Built in 1807, the North River Steamboat operated on the Hudson River – at that time often known as the North River – between New York City and Albany, New York. It was built by the wealthy investor and politician Robert Livingston and inventor and entrepreneur Robert Fulton (1765–1815). \n\n Livingston had obtained. Livingston had obtained from the New York legislature the exclusive right to steam navigation on the Hudson River. In 1803, while Livingston was Minister to France, Fulton's company built a small steamboat and tested it on the Seine. With this success, Livingston then contracted with Fulton to take advantage of his Hudson River monopoly and build a larger version for commercial service. \n\n Their larger steamer was built at the Charles Browne shipyard in New York and was fitted with Fulton's innovative steam engine design, manufactured for Livingston and Fulton by Boulton and Watt in Birmingham, England. Before she was later widened, the vessel's original dimensions were 150 feet (46 m) long × 12 feet (3.7 m) wide × 7 feet (2.1 m) deep; she drew a little more than 2 feet (60 cm) of water when launched. The steamer was equipped with two paddle wheels, one each to a side; each paddle wheel assembly was equipped with two sets of eight spokes. She also carried two masts with spars, rigging, and sails, likely a foremast with square sail and a mizzen mast with fore-and-aft sail (spanker), with the steam engine placed amidships, directly behind the paddle wheel's drive gear machinery. \n\n The bottom of The bottom of the boat was formed of yellow pine plank 1.5 in. thick, tongued and grooved, and set together with white lead. This bottom or platform was laid in a transverse platform and molded out with batten and nails. The shape of the bottom being thus formed, the floors of oak and spruce were placed across the bottom; the spruce floors being 4×8 inches and 2 feet apart. The oak floors were reserved for the ends, and were both sided and molded 8 inches. Her top timbers (which were of spruce and extended from a log that formed the bridge to the deck) were sided 6 inches and molded at heel, and both sided and molded 4 inches at the head. She had no guards when first built and was steered by a tiller. Her draft of water was 28 inches. \n\n The steamer's inaugural The steamer's inaugural run was helmed by Captain Andrew Brink,[3]: 224  and left New York on August 17, 1807, with a complement of invited guests aboard. They arrived in Albany two days later, after 32 hours of travel time and a 20-hour stop at Livingston's estate, Clermont Manor. The return trip was completed in 30 hours with only a one-hour stop at Clermont; the average speed of the steamer was 5 mph (8 km/h).[4]: 45  Fulton wrote to a friend, Joel Barlow:[3]: 234  I had a light breeze against me the whole way, both going and coming, and the voyage has been performed wholly by the power of the steam engine. I overtook many sloops and schooners, beating to the windward, and parted with them as if they had been at anchor. The power of propelling boats by steam is now fully proved. The morning I left New York, there were not perhaps thirty persons in the city who believed that the boat would ever move one mile an hour, or be of the least utility, and while we were putting off from the wharf, which was crowded with spectators, I heard a number of sarcastic remarks. This is the way in which ignorant men compliment what they call philosophers and projectors. Having employed much time, money and zeal in accomplishing this work, it gives me, as it will you, great pleasure to see it fully answer my expectations. The 1870 book Great Fortunes quotes a former resident of Poughkeepsie who described the scene:[5] It was in the early autumn of the year 1807 that a knot of villagers was gathered on a high bluff just opposite Poughkeepsie, on the west bank of the Hudson, attracted by the appearance of a strange, dark-looking craft, which was slowly making its way up the river. \n\n Some imagined it to be a sea-monster, while others did not hesitate to express their belief that it was a sign of the approaching judgment. What seemed strange in the vessel was the substitution of lofty and straight black smoke-pipes, rising from the deck, instead of the gracefully tapered masts that commonly stood on the vessels navigating the stream, and, in place of the spars and rigging, the curious play of the working-beam and pistons, and the slow turning and splashing of the huge and naked paddle-wheels, met the astonished gaze. The dense clouds of smoke, as they rose wave upon wave, added still more to the wonderment of the rustics. \n\n The steamer's original The steamer's original 1807 federal government enrollment (registration) was lost, but because the vessel was rebuilt during the winter of 1807-1808, she had to be enrolled again. The second document lists the owners as Livingston and Fulton, and the ship's name as North River Steamboat of Clermont.[6]The rebuilding of the ship was substantial: she was widened by six feet to increase navigation stability, and her simple stern tiller steering was moved forward and changed to a ship's wheel, steering ropes, and rudder system. A poop deck and other topside additions were made or rebuilt entirely. Her exposed mid-ships engine compartment had an overhead weather deck/roof added to increase the topside deck area. Anticipating future passenger requirements, her twin paddle wheels were enclosed above the waterline to quiet their loud splashing noise, reducing heavy river mist, while also preventing floating debris from being kicked up into the vessel's mid-hull area. Later, the ship's long name was shortened to North River.[4]")
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
      <div className="bg-slate-50 w-3/6 h-screen">
        <ArticleInfo slug={params.slug} title={article.title} image={article.image} body={article.content} />
      </div>
      <div className="bg-slate-300 w-3/6 max-h-full">
        <ChatBot slug={params.slug} body={article.content} />
      </div>
    </div>
  )
}
