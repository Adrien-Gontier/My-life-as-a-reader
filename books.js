const books = [  // Check test with loop if it's work
{
    idBook: "victor_hugo_notre_dame_de_paris",
    author_name: "Victor Hugo",
    author_date_born_death: "1802 - 1885",
    title_of_the_book: "Notre-Dame de Paris",
    book_year_publication: "1832",
    inProgress: 3,
    book_summary: ["The plot takes place in Paris in 1482.", "The novel is divided into 11 books.", "Grégoire is a penniless poet. Quasimodo is tried for an attempted kidnapping. Esmeralda is arrested for a murder. And she's under the influence of witchcraft. The cathedral is obviously a special place in the unfolding of history.", "The novel is too large to be summarized is a few lines. So much that I can only recommend that you read it."],
},
{
    idBook: "stephen_king_the_outsider",
    author_name: "Stephen King",
    author_date_born_death: "1947 -",
    title_of_the_book: "The outsider",
    book_year_publication: "2018",
    inProgress: 3,
    book_summary: ["Coming soon . . ."],
},
{
    idBook: "stephen_king_storm_of_the_century",
    author_name: "Stephen King",
    author_date_born_death: "1947 -",
    title_of_the_book: "Storm of the century",
    book_year_publication: "1999",
    inProgress: 4,
    book_summary: ["A powerful storm hits the fictional small island town of Little Tall Island. So powerful that all access to the island is cut off and no one can get out.", "Martha Clarendon, an elderly resident is brutally killed. Robbie Beals, city manager, investigates.", "Linoge, who claims to know the repetitive inner workings of Hell, is arrested.", "Later that evening, Linoge escapes and causes the same dream to all the sleeping townspeople.", "The next day, Linoge makes three inhabitants disappear.", "Who are its three inhabitants ?"],
},
{
    idBook: "harry_harrison_make_room_make_room",
    author_name: "Harry Harrison",
    author_date_born_death: "1925 - 2012",
    title_of_the_book: "Make Room ! Make Room !",
    book_year_publication: "1966",
    inProgress: 4,
    book_summary: ["New York 1999, overcrowded city, Andy Rush, then a police inspector, lives in a half-room with Sol, a retired engineer.Following a riot, Billy, who stole some meat, sells some of it to get a job as a messenger.", "Following his first delivery, he kills a wealthy racketeer, Mike.", "Andy takes charge of the investigation. During the latter, he falls in love with Shirl and enjoys Mike's luxurious apartment. But the lease coming to an end, they move in together.", "Sol cannot remain passive in the face of overpopulation and decides to join the march against the cancellation of a bill that aims to control the population. Following an injury, Sol dies. A family will take its place.", "Billy will eventually die, killed by Andy.", "The story ends with the screen in Times Square announcing that the United States census is 344 million citizens."],
},
{
    idBook: "walter_tevis_the_queen_s_gambit",
    author_name: "Walter Tevis",
    author_date_born_death: "1928 - 1984",
    title_of_the_book: "The Queen's Gambit",
    book_year_publication: "1983",
    inProgress: 2,
    book_summary: ["During her childhood, Beth learns the failures of Mister Shaibel. A few months later, she is introduced to a high school teacher who runs a chess club.", "At the age of 13, Beth was adopted by a couple who separated shortly afterwards. At a local high school chess tournament, she wins.", "From tournament to tournament, she is noticed as a prodigy.", "Finally, following an international career, she meets a group of men in a park who play for love of the game."],
},
{
    idBook: "stephen_king_night_shift",
    author_name: "Stephen King",
    author_date_born_death: "1947 - ",
    title_of_the_book: "Night Shift",
    book_year_publication: "1978",
    inProgress: 2,
    book_summary: ["A museum guide discovers a strange curse weighing on his family.", "A police inspector investigates a series of deaths in a laundry.", "A contract killer receives a package with toy soldiers who start attacking him.", "A man approaches a company to mow his lawn.", "A young man euthanizes his mother who has cancer.", "Such are, among other things, the adventures of collecting short stories."],
},
{
    idBook: "dan_brown_angels_and_demons",
    author_name: "Dan Brown",
    author_date_born_death: "1964 -",
    title_of_the_book: "Angels and démons",
    book_year_publication: "2000",
    inProgress: 2,
    book_summary: ["A prominent person in the CERN lab is murdered and one of the capsules containing antimatter is stolen. The pope dies.", "A video, showing the four favorites to his estate, is sent to the attention of the Vatican by a killer.", "The director of CERN calls on Robert Langdon, a professor at Harvard University.", "Favorites are run one after another through Rome.", "Discover Robert Langton in this first adventure. The famous specialist of the religious symbology."],
},
{
    idBook: "dan_brown_the_da_vinci_code",
    author_name: "Dan Brown",
    author_date_born_death: "1964 -",
    title_of_the_book: "Tha Da Vinci Code",
    book_year_publication: "2003",
    inProgress: 2,
    book_summary: ["Robert Langdon is implicated despite himself, during a trip to Paris, in the case of the murder of Jacques Saunière, curator at the Louvre Museum.", "Suspected of the murder, Langton escapes the police.", "Sophie Neveu, cryptologist, asks Langdon to help her understand the message left by the curator of the Louvre.", "Langdon and Neveu later discover that Saunière was in charge of the Priory of Sion.", "But what is the Da Vinci Code ? And what is the secret linked to the latter ?"],
},
{
    idBook: "dan_brown_the_lost_symbol",
    author_name: "Dan Brown",
    author_date_born_death: "1964 -",
    title_of_the_book: "Tha lost symbol",
    book_year_publication: "2009",
    inProgress: 2,
    book_summary: ["One Sunday morning, after his sports ritual in the Olympic swimming pool on the Harvard campus, Robert Langdon learns of an invitation. A seminar on symbolism in architecture the same evening at the United States Capitol.", "The invitation came from Peter Solomon, his mentor, who is head of the Smithsonian Institution.", "But, on arriving, Robert Langton discovers an empty room.", "Why ? Was the invitation really sent by his mentor ?", "Find out by reading the third adventure of the famous specialist in religious symbology."],
},
{
    idBook: "dan_brown_inferno",
    author_name: "Dan Brown",
    author_date_born_death: "1964 -",
    title_of_the_book: "Inferno",
    book_year_publication: "2013",
    inProgress: 2,
    book_summary: ["The suicide of a client of the president. This client wants to be remembered as righteous.", "Robert Langton wakes up in the hospital in Florence with a thirty-six hour hole. He finds himself with a mysterious object in his belongings. And a dream that torments his mind.", "The English doctor Sienna Brooks explains to him that someone tried to kill him by shooting him in the head.", "Moments later, a young woman named Vayentha wanting to go to Robert Langton's room to kill him misses her shot and kills another doctor.", "Siena and Robert flee down the fire escape.", "Where are they going to go? Where will Sienna take Robert ?", "Discover without delay the fourth adventure of the famous expert in religious symbolism."]
},
{
    idBook: "dan_brown_origin",
    author_name: "Dan Brown",
    author_date_born_death: "1964 -",
    title_of_the_book: "Origin",
    book_year_publication: "2017",
    inProgress: 2,
    book_summary: ["Robert Langdon, famous professor of religious symbology, arrives at the Guggenheim Museum in Bilbao to attend a historic ceremony. The host of the evening, Edmond Kirsch, a forty-year-old billionaire whose high-tech inventions and audacious predictions have given him worldwide fame.", "Kirsch, a former student of Langdon at Harvard, is about to lay out the results of his research that promises to finally provide an answer to the two fundamental questions of humanity : where did man come from? where is he going ? But he is murdered.", "Find out what happens next as you follow Robert Langton's fifth adventure."],
},
{   
    idBook: "stephen_king_mr_mercedes",
    author_name: "Stephen King",
    author_date_born_death: "1947 -",
    title_of_the_book: "Mr Mercedes",
    book_year_publication: "2014",
    inProgress: 1,
    book_summary: ["A Mercedes drives into the crowd, killing sixteen people and seriously injuring several.", "Bill Hodges, a recently retired detective, receives a letter from an individual claiming to be responsible for the job fair incident, calling himself \"Mr. Mercedes\".", "The incident had taken place late in Hodges' career and was still unresolved when he retired.", "Hodges is intrigued and begins to investigate the case instead of delivering the letter to his former police colleague, Pete Huntley.", "But there is the existence of Brady Hartsfield. who is he ? How is he related to this case ?"],
},
{
    idBook: "stephen_king_finders_keepers",
    author_name: "Stephen King",
    author_date_born_death: "1947 -",
    title_of_the_book: "Finders Keepers",
    book_year_publication: "2015",
    inProgress: 1,
    book_summary: ["Coming soon ..."],
},
{
    idBook: "stephen_king_end_of_watch",
    author_name: "Stephen King",
    author_date_born_death: "1947 -",
    title_of_the_book: "End of watch",
    book_year_publication: "2016",
    inProgress: 1,
    book_summary: ["Coming soon ..."],
}
];

// what to do next :
//  1. create files
//  2. create loops and code line to import the data from other file
//  3. test the code



// wishlist = 1 = WL
// Pile to read = 2 = PTR
// reading in progress = 3 = RIP
// reading finished = 4 = RF