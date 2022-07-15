const books = [  // Check test with loop if it's work
{
    idBook: "victor_hugo_notre_dame_de_paris",
    author_name: "Victor Hugo",
    author_date_born_death: "1802 - 1885",
    title_of_the_book: "Notre-Dame de Paris",
    book_year_publication: "1832",
    book_summary: {
        P: "The plot takes place in Paris in 1482.",
        P: "The novel is divided into 11 books.", 
        P: "Grégoire is a penniless poet. Quasimodo is tried for an attempted kidnapping. Esmeralda is arrested for a murder. And she's under the influence of witchcraft. The cathedral is obviously a special place in the unfolding of history.",
        P: "The novel is too large to be summarized is a few lines. So much that I can only recommend that you read it."
    },
    "status": "RIP"
},
{
    idBook: "stephen_king_the_outsider",
    author_name: "Stephen King",
    author_date_born_death: "1947 -",
    title_of_the_book: "The outsider",
    book_year_publication: "2018",
    book_summary: {
        P: "Coming soon . . ."
    },
    "status": "RIP"
},
{
    idBook: "stephen_king_storm_of_the_century",
    author_name: "Stephen King",
    author_date_born_death: "1947 -",
    title_of_the_book: "Storm of the century",
    book_year_publication: "1999",
    book_summary: {
        P: "A powerful storm hits the fictional small island town of Little Tall Island. So powerful that all access to the island is cut off and no one can get out.",
        P: "Martha Clarendon, an elderly resident is brutally killed. Robbie Beals, city manager, investigates.",
        P: "Linoge, who claims to know the repetitive inner workings of Hell, is arrested.",
        P: "Later that evening, Linoge escapes and causes the same dream to all the sleeping townspeople.",
        P: "The next day, Linoge makes three inhabitants disappear.",
        P: "Who are its three inhabitants ?"
    }, 
    "status": "RF"
},
{
    idBook: "harry_harrison_make_room_make_room",
    author_name: "Harry Harrison",
    author_date_born_death: "1925 - 2012",
    title_of_the_book: "Make Room ! Make Room !",
    book_year_publication: "1966",
    book_summary: { 
        P: "New York 1999, overcrowded city, Andy Rush, then a police inspector, lives in a half-room with Sol, a retired engineer.Following a riot, Billy, who stole some meat, sells some of it to get a job as a messenger.",
        P: "Following his first delivery, he kills a wealthy racketeer, Mike.",
        P: "Andy takes charge of the investigation. During the latter, he falls in love with Shirl and enjoys Mike's luxurious apartment. But the lease coming to an end, they move in together.",
        P: "Sol cannot remain passive in the face of overpopulation and decides to join the march against the cancellation of a bill that aims to control the population. Following an injury, Sol dies. A family will take its place.",
        P: "Billy will eventually die, killed by Andy.",
        P: "The story ends with the screen in Times Square announcing that the United States census is 344 million citizens."
    },
    "status": "RF"
},
{
    idBook: "walter_tevis_the_queen_s_gambit",
    author_name: "Walter Tevis",
    author_date_born_death: "1928 - 1984",
    title_of_the_book: "The Queen's Gambit",
    book_year_publication: "1983",
    book_summary: {
        P: "During her childhood, Beth learns the failures of Mister Shaibel. A few months later, she is introduced to a high school teacher who runs a chess club.",
        P: "At the age of 13, Beth was adopted by a couple who separated shortly afterwards. At a local high school chess tournament, she wins.",
        P: "From tournament to tournament, she is noticed as a prodigy.",
        P: "Finally, following an international career, she meets a group of men in a park who play for love of the game."
    },
    "status": "PTR"
},
{
    idBook: "stephen_king_night_shift",
    author_name: "Stephen King",
    author_date_born_death: "1947 - ",
    title_of_the_book: "Night Shift",
    book_year_publication: "1978",
    book_summary: {
        P: "A museum guide discovers a strange curse weighing on his family.",
        P: "A police inspector investigates a series of deaths in a laundry.",
        P: "A contract killer receives a package with toy soldiers who start attacking him.",
        P: "A man approaches a company to mow his lawn.",
        P: "A young man euthanizes his mother who has cancer.",
        P: "Such are, among other things, the adventures of collecting short stories."
    },
    "status": "PTR"
},
{
    idBook: "dan_brown_angels_and_demons",
    author_name: "Dan Brown",
    author_date_born_death: "1964 -",
    title_of_the_book: "Angels and démons",
    book_year_publication: "2000",
    book_summary: {
        P: "A prominent person in the CERN lab is murdered and one of the capsules containing antimatter is stolen. The pope dies.",
        P: "A video, showing the four favorites to his estate, is sent to the attention of the Vatican by a killer.",
        P: "The director of CERN calls on Robert Langdon, a professor at Harvard University.",
        P: "Favorites are run one after another through Rome.",
        P: "Discover Robert Langton in this first adventure. The famous specialist of the religious symbology."
    },
    "status": "PTR"
},
{
    idBook: "dan_brown_the_da_vinci_code",
    author_name: "Dan Brown",
    author_date_born_death: "1964 -",
    title_of_the_book: "Tha Da Vinci Code",
    book_year_publication: "2003",
    book_summary: {
        P: "Robert Langdon is implicated despite himself, during a trip to Paris, in the case of the murder of Jacques Saunière, curator at the Louvre Museum.",
        P: "Suspected of the murder, Langton escapes the police.",
        P: "Sophie Neveu, cryptologist, asks Langdon to help her understand the message left by the curator of the Louvre.",
        P: "Langdon and Neveu later discover that Saunière was in charge of the Priory of Sion.",
        P: "But what is the Da Vinci Code ? And what is the secret linked to the latter ?"
    },"status": "PTR"
},
{
    idBook: "dan_brown_the_lost_symbol",
    author_name: "Dan Brown",
    author_date_born_death: "1964 -",
    title_of_the_book: "Tha lost symbol",
    book_year_publication: "2009",
    book_summary: {
        P: "One Sunday morning, after his sports ritual in the Olympic swimming pool on the Harvard campus, Robert Langdon learns of an invitation. A seminar on symbolism in architecture the same evening at the United States Capitol.",
        P: "The invitation came from Peter Solomon, his mentor, who is head of the Smithsonian Institution.",
        P: "But, on arriving, Robert Langton discovers an empty room.",
        P: "Why ? Was the invitation really sent by his mentor ?",
        P: "Find out by reading the third adventure of the famous specialist in religious symbology."
    },"status": "PTR"
},
{
    idBook: "dan_brown_inferno",
    author_name: "Dan Brown",
    author_date_born_death: "1964 -",
    title_of_the_book: "Inferno",
    book_year_publication: "2013",
    book_summary: {
        P: "The suicide of a client of the president. This client wants to be remembered as righteous.",
        P: "Robert Langton wakes up in the hospital in Florence with a thirty-six hour hole. He finds himself with a mysterious object in his belongings. And a dream that torments his mind.",
        P: "The English doctor Sienna Brooks explains to him that someone tried to kill him by shooting him in the head.",
        P: "Moments later, a young woman named Vayentha wanting to go to Robert Langton's room to kill him misses her shot and kills another doctor.",
        P: "Siena and Robert flee down the fire escape.",
        P: "Where are they going to go? Where will Sienna take Robert ?",
        P: "Discover without delay the fourth adventure of the famous expert in religious symbolism."
    },"status": "PTR"
}
]