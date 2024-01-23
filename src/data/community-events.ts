export interface CommunityEvent {
  title: string
  to: string
  location: string
  description: string
  startDate: string
  endDate: string
}

const CommunityEvents: CommunityEvent[] = [
  {
    title: "ETH Cinco de Mayo",
    startDate: "2024-02-02",
    endDate: "2024-02-04",
    to: "https://ethcincodemayo.com/",
    location: "Cholula, Puebla",
    description:
      "A perfect combination of competition, workshops, networking, entrepreneurship and culture!",
  },
  {
    title: "ETH Lima Day",
    startDate: "2024-02-03",
    endDate: "2024-02-03",
    to: "https://ethlima.org",
    location: "Lima, PE",
    description: "In Ethereum Lima, we are united by the will to create a community that can take advantage of the opportunities of the technological revolution that comes with blockchain, and particularly with Ethereum.",
  },
  {
    title: "NFT Paris",
    startDate: "2024-02-23",
    endDate: "2024-02-24",
    to: "https://nftparis.xyz",
    location: "Paris, FR",
    description: "Where Finance, Gaming, Art, Fashion, Sport , Media converge to celebrate the era of digital assets.",
  },
  {
    title: "ETHDenver",
    startDate: "2024-02-23",
    endDate: "2024-03-03",
    to: "https://ethdenver.com",
    location: "Denver, CO, USA",
    description: "ETHDenver celebrates the convergence of blockchain, culture, and education. Located in the heart of Denver, Colorado, ETHDenver is the premiere destination for #BUIDLing the decentralized future..",
  },
  {
    title: "Pragma Denver",
    startDate: "2024-02-28",
    endDate: "2024-02-28",
    to: "https://ethglobal.com/events/pragma-denver",
    location: "Denver, CO, USA",
    description: "ETHGlobal Pragma is an in-person summit for builders and leaders in the web3 ecosystem",
  },
  {
    title: "ETH Latam",
    startDate: "2024-03-13",
    endDate: "2024-03-14",
    to: "https://ethlatam.org/#/honduras",
    location: "San Pedro Sula, HN",
    description: "ETH Latam brings together the global community of creators and educators with the most vibrant crypto communities in the world, who use Ethereum protocols and technology in their daily lives, providing real solutions to real problems.",
  },
  {
    title: "Pragma London",
    startDate: "2024-03-14",
    endDate: "2024-03-14",
    to: "https://ethglobal.com/events/pragma-london",
    location: "London, UK",
    description: "ETHGlobal Pragma is an in-person summit for builders and leaders in the web3 ecosystem",
  },
  {
    title: "ETH Canal",
    startDate: "2024-03-19",
    endDate: "2024-03-21",
    to: "https://ethcanal.xyz",
    location: "Panama City, PA",
    description: "Experience three transformative where the Ethereum community gathers in Panama, to discuss blockchain innovation.",
  },
  {
    title: "ETHVietnam",
    startDate: "2024-03-16",
    endDate: "2024-03-17",
    to: "https://www.eth-vietnam.com/",
    location: "Hanoi, Vietnam",
    description: "ETH Community in SEA to #Build, #Learn and #Share together.",
  },
  {
    title: "Ethereum Rio",
    startDate: "2024-03-19",
    endDate: "2024-03-24",
    to: "https://www.ethereumbrasil.com/",
    location: "Rio de Janeiro, Brazil",
    description:
      "3rd Edition of LATAM's most loved ETH event. Bootcamp, Buildathon & Conference",
  },
  {
    title: "ETHTaipei",
    startDate: "2024-03-21",
    endDate: "2024-03-24",
    to: "https://ethtaipei.org",
    location: "Taipei, TW",
    description: "ETHTaipei presents an opportunity to learn about cutting-edge technology and applications about Ethereum, as well as to get involved with the local community in Taiwan.",
  },
  {
    title: "ETHBucharest",
    startDate: "2024-03-27",
    endDate: "2024-03-30",
    to: "https://ethbucharest.xyz",
    location: "Bucharest, ROU",
    description: "Eth Bucharest is not just an event; it’s a movement empowering creativity, bold ideas, and meaningful connections in the heart of Eastern Europe.",
  },
  {
    title: "ETH Seoul",
    startDate: "2024-03-29",
    endDate: "2024-03-31",
    to: "https://ethseoul.org",
    location: "Seoul, KR",
    description: "ETH Seoul is a 3 day hackathon that takes place from March 29-31 in Neowiz building in Pangyo, South Korea",
  },
  {
    title: "DEFICON",
    startDate: "2024-03-30",
    endDate: "2024-03-30",
    to: "https://deficon.nyc",
    location: "New York, NYC, USA",
    description: "DeFiCon is a nonprofit conference with a mission to elevate the ethos of peer-to-peer crypto.",
  },
  {
    title: "NFT NYC",
    startDate: "2024-04-03",
    endDate: "2024-04-05",
    to: "https://nft.nyc",
    location: "NYC, USA",
    description: "7th edition of the NFT.NYC",
  },
  {
    title: "EthereumZurich",
    startDate: "2024-04-05",
    endDate: "2024-04-07",
    to: "https://ethereumzuri.ch/",
    location: "Zurich, CHE",
    description: "Inviting all blockchain professionals, researchers, and enthusiasts to learn, connect, experiment and grow by interacting with a big and passionate blockchain community",
  },
  {
    title: "ETHDam",
    startDate: "2024-04-12",
    endDate: "2024-04-14",
    to: "https://ethdam.com",
    location: "Amsterdam, NL",
    description: "Conference and hackathon gathering the best Privacy and Security builders",
  },
  {
    title: "TOKEN2049",
    startDate: "2024-04-18",
    endDate: "2024-04-19",
    to: "https://token2049.com",
    location: "Dubai, UAE",
    description: "TOKEN2049 is organized annually in Dubai and Singapore, where founders and executives in the web3 industry share their view on the industry",
  },
  {
    title: "ETHTallinn",
    startDate: "2024-04-19",
    endDate: "2024-04-21",
    to: "https://ethtallinn.org/",
    location: "Tallinn, EST",
    description: "ETHTallinn is an Ethereum community focused on pushing technologies to new limits within the DeFi, NFT, and web3 industry",
  },
  {
    title: "ETHDubai",
    startDate: "2024-04-19",
    endDate: "2024-04-21",
    to: "https://www.ethdubaiconf.org/",
    location: "Dubai, UAE",
    description:
      "The Ethereum dev conference and hackathon in Dubai on everything DeFi, privacy, EVM scaling, layers 2, Account Abstraction and more with a focus on decentralization and community projects. We also organize a Demo Pitch Day with VCs.",
  },
  {
    title: "Pragma Sydney",
    startDate: "2024-05-02",
    endDate: "2024-05-02",
    to: "https://ethglobal.com/events/pragma-sydney",
    location: "Sydney, AUS",
    description: "ETHGlobal Pragma is an in-person summit for builders and leaders in the web3 ecosystem",
  },
  {
    title: "ETHGlobal Sydney",
    startDate: "2024-05-03",
    endDate: "2024-05-05",
    to: "https://ethglobal.com/events/sydney",
    location: "Sydney, AUS",
    description: "ETHGlobal Sydney is an event bringing together some of the top minds and experts in Ethereum Ecosystem to Sydney",
  },
  {
    title: "DappConn",
    startDate: "2024-05-21",
    endDate: "2024-05-23",
    to: "https://www.dappcon.io/",
    location: "Berlin, Germany",
    description:
      "A 3-day Developer Conference for Ethereum Infrastructure and dApps that would bring together over 900 builders together, hosted by Gnosis since 2018.",
  },
  {
    title: "ETHBerlin",
    startDate: "2024-05-24",
    endDate: "2024-05-26",
    to: "https://ethberlin.org",
    location: "Berlin, DE",
    description: "ETHBerlin is a hackathon, a cultural festival, an educational event, a platform for hacktivism, and a community initiative to push the decentralized ecosystem forward",
  },
  {
    title: "BlockSplit",
    startDate: "2024-05-27",
    endDate: "2024-05-30",
    to: "https://blocksplit.net",
    location: "Split, Croatia",
    description: "Web3 Conference in the heart of the Mediterranean.",
  },
  {
    title: "Non Fungible Conference",
    startDate: "2024-05-28",
    endDate: "2024-05-30",
    to: "https://nonfungibleconference.com/",
    location: "Lisbon, PRT",
    description: "NFC is an experimental Web3 event that brings the global NFT community together",
  },
  {
    title: "Consensus2024",
    startDate: "2024-05-29",
    endDate: "2024-05-31",
    to: "https://coindesk.com/consensus/",
    location: "Austin, TX, USA",
    description: "Consensus 2024 is your chance to be a part of important conversation in crypto and Web3.",
  },
  {
    title: "ETHPrague",
    startDate: "2024-05-31",
    endDate: "2024-06-02",
    to: "https://ethprague.com",
    location: "Prague, CZ",
    description: "An event focused on the future of Ethereum and potential concepts or applications that don't yet exist",
  },
  {
    title: "ETHDublin",
    startDate: "2024-05-31",
    endDate: "2024-06-02",
    to: "https://ethdublin.io",
    location: "Dublin, IRL",
    description: "ETHDublin brings together like-minded investors, builders and designers from all over the world to solve industry problems, harnessing the power of Web3",
  },
  {
    title: "ETH Belgrade",
    startDate: "2024-06-03",
    endDate: "2024-06-05",
    to: "https://ethbelgrade.rs/",
    location: "Belgrade, SRB",
    description: "ETH Belgrade is a playground for exploring Ethereum possibilities",
  },
  {
    title: "Belgrade Blockchain Week",
    startDate: "2024-06-01",
    endDate: "2024-06-09",
    to: "https://belgradeblockchainweek.com/",
    location: "Belgrade, SRB",
    description: "Belgrade Blockchain Week is a week-long in-person gathering of the greatest Web3 minds and professionals. It features independent events organized by top-tier companies and communities throughout the week.",
  },
  {
    title: "ETHKyiv",
    startDate: "2024-06-01",
    endDate: "2024-06-01",
    to: "https://ethkyiv.org",
    location: "Kyiv, UKR",
    description: "Through Hackathon, Conference, side events, discussions, collaborations, and vast networking, we aim to further establish Kyiv as an innovation and infrastructure development leader",
  },
  {
    title: "Pragma Brussels",
    startDate: "2024-07-11",
    endDate: "2024-07-11",
    to: "https://ethglobal.com/events/pragma-brussels",
    location: "Brussels, BEL",
    description: "ETHGlobal Pragma is an in-person summit for builders and leaders in the web3 ecosystem",
  },
  {
    title: "ETHGlobal Brussels",
    startDate: "2024-07-12",
    endDate: "2024-07-14",
    to: "https://ethglobal.com/events/brussels",
    location: "Brussels, BEL",
    description: "ETHGlobal Brussels is an event bringing together some of the top minds and experts in Ethereum Ecosystem to Brussels",
  },
  {
    title: "EDCON",
    startDate: "2024-07-26",
    endDate: "2024-07-30",
    to: "https://edcon.io/",
    location: "Tokyo, JPN",
    description: "EDCON is committed to serving the Ethereum ecosystem by boosting communication and engagement between Ethereum communities worldwide",
  },
  {
    title: "Web3 Lagos Conference",
    startDate: "2024-09-05",
    endDate: "2024-09-07",
    to: "https://event.web3bridge.com/",
    location: "Lagos, NGA",
    description: "This conference will bring together Web3 enthusiasts from all over Nigeria and beyond. Here, community meets technology for three days of intensive Networking and Learning experiences.",
  },
  {
    title: "TOKEN2049",
    startDate: "2024-09-18",
    endDate: "2024-09-19",
    to: "https://token2049.com",
    location: "Singapore, SG",
    description: "TOKEN2049 is organized annually in Dubai and Singapore, where founders and executives in the web3 industry share their view on the industry",
  },
  {
    title: "ETHGlobal San Francisco",
    startDate: "2024-10-18",
    endDate: "2024-10-20",
    to: "https://ethglobal.com/events/sanfrancisco2024",
    location: "San Francisco, CAL, US",
    description: "ETHGlobal San Francisco is an event bringing together some of the top minds and experts in Ethereum Ecosystem to San Francisco",
  },
  {
    title: "Devcon 7 - Southeast Asia",
    to: "https://devcon.org/",
    location: "Bangkok, Thailand",
    description:
      "Discover Ethereum and its community at Devcon, the conference for developers, thinkers, and makers and a place for learning, knowledge sharing, and fun.",
    startDate: "2024-11-12",
    endDate: "2024-11-15",
  },
]

export default CommunityEvents
