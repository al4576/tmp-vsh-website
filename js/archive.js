(function () {
  "use strict";

  /** Set true when individual show detail pages are ready to link again. */
  const ARCHIVE_DETAIL_PAGES_ENABLED = false;

  let posterClampToken = 0;

    const archiveData = [
    {
      "year": 2003,
      "showNumber": 109,
      "poster": "assets/program_cover_jpgs/v109-cover.jpg",
      "synopsis": "The 109th Annual Varsity Show was performed April 11-13, 2003 in Roone Arledge Auditorium at Columbia University, and featured notable alumni, including I.A.L. Diamond Award recipients Kate McKinnon, Jenny Slate, and Peter Lerman.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/pxj3AOIGYPw"
        }
      ],
      "quotes": [],
      "cast": null,
      "creativeTeam": "Directed by Sheila Dvorak\nProduced by Julie Binder and Peter Koechley\nWritten by Ben Watson-Lamprey and Ashish Shetty\nMusic and Lyrics by Peter Lerman\nChoreography by Raamla Mohamed",
      "detailHref": "v109/index.html"
    },
    {
      "year": 2004,
      "showNumber": 110,
      "poster": "assets/program_cover_jpgs/v110-cover.jpg",
      "synopsis": "Columbia University has a small endowment, but 250th Anniversary chairman Henry L. Hale is compensating with big plans. For CU 251, he wants to move the campus out of New York City, but donor and alumnus Sidney Havemeyer will have none of it. That is, until his freshman son Eli discovers dancing and Barnard girls.\nCan Professor Kenneth Jackson (with the help of his wingman) save the day? Will the move tear a family apart? Separate a pair of young lovers? Pose lots of rhetorical questions? Find out the answers and more in Off Broadway, Columbia's 110th Annual Varsity Show - a hilarious musical spectacular that would make alumni Rodgers and Hammerstein proud . . . if they weren't already dead.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/Dpe4utTl6nc"
        }
      ],
      "quotes": [],
      "cast": "Principals:\nJordan Barbour\nKate Berthold\nBlair Bodine\nLuciana Colapinto\nNic Cory\nBen Smith\nKrista Worby\nAlana Weiss\nPaul Wright\nPatrick Young\nEnsemble:\nGabe Bedoya\nDan Billings\nCarol Chan\nGreta Gerwig\nDaniel Robles\nDarcy Shiber-Knowles\nMary Steffel\nHadley Suter\nAshley Walker\nCharity Wright",
      "creativeTeam": "Directed by David Paul\nProduced by Paul Gelinas and Chris Keitel\nWritten by C. Mason Wells and Spencer Kapla\nMusic by Jaime Madell\nLyrics by Ellen Reid\nChoreography by Sarabeth Berman",
      "detailHref": "v110/index.html"
    },
    {
      "year": 2005,
      "showNumber": 111,
      "poster": "assets/program_cover_jpgs/v111-cover.jpg",
      "synopsis": "Homer has returned from a 2500-year absence to tell the epic story of Columbia University\u2019s first 250 years. But when he finds a campus lacking any canon fodder, Homer brings Zeus from the heights of Olympus to the heights of Morningside to stir things up. As the King of the Gods wins the approval and affection of Dean Yatrakis, though, he becomes another Columbia administrator hungry for power and women.\nIt is up to the legendary blind poetry to do the impossible: turn a lowly SEAS kid into a hero and a lover; help a film student enjoy life; and find a father for an illegitimate girl and a boyfriend for her unwed mother. With special guest appearances by Coach Joe Jones and a slice of Koronets pizza, The Sound of Muses is a Varsity Show that \u2013 unfortunately for its narrator \u2013 you have to see to believe.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/T9AZ3bhKwFA"
        }
      ],
      "quotes": [],
      "cast": "Principals:\nJordan Barbour\nKate Berthold\nBlair Bodine\nNic Cory\nGreta Gerwig\nTed Malawer\nCaitlin Shure\nPaul Wright\nEnsemble:\nChuck Burton\nKieron Cindric\nErin Debold\nAnna Lindow\nLydia Ross\nAshley Walker",
      "creativeTeam": "Directed by Patrick Young\nProduced by Sarabeth Berman and Geoffrey Karapetyan\nWritten by Philippa Ainsley, Addison Anderson, and C. Mason Wells\nMusic & Lyrics by Ben Smith\nChoreography by Sarabeth Berman",
      "detailHref": "v111/index.html"
    },
    {
      "year": 2006,
      "showNumber": 112,
      "poster": "assets/program_cover_jpgs/v112-cover.jpg",
      "synopsis": "Columbia\u2019s brightest welcome you to the 112th Varsity Show: \u201cHi, we\u2019re miserable! How the hell are you?\u201d Why all the dysfunction? Everyone\u2019s on a mission, and everyone else is in the way. There\u2019s the rockstar professor, the Jersey girl with a \u201cnew\u201d look, the feminist fencer, the GS aristocrat, the B-list celebrity, the alcoholic engineer, the melancholic mascot, and the gossip queen with a pwobwem. Got it? No? Let the Barnard broad explain\u2026",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/L0CYJo7SQII"
        }
      ],
      "quotes": [],
      "cast": "Principals:\nBecky Abrams\nZachary Bendiner\nKieron Cindric\nCarly Hoogendyk\nSara Fay Goldman\nMark Junek\nPeter Mende-Siedlecki\nNessa Norich\nCally Robertson\nEnsemble:\nThomas Anawalt\nCaley Bulinski\nAlyssa DeSocio\nNoam Harary\nMissy Hernandez\nTom Keenan\nMichael Leibring\nBess Miller\nKendra Moore\nMarissa Palley\nKate Smith\nWill Snider",
      "creativeTeam": "Directed by Deanna Weiner\nProduced by Olivia Gorvy and Grace Parra\nWritten by Addison Anderson and Chris Beam\nMusic & Lyrics by Cody Owen Stine\nChoreography by Erin Debold\nArt Direction by Liz Vastola",
      "detailHref": "v112/index.html"
    },
    {
      "year": 2007,
      "showNumber": 113,
      "poster": "assets/program_cover_jpgs/v113-cover.jpg",
      "synopsis": "A meager budget for your crappy student group isn't anything out of the ordinary. So when the Activities Board at Columbia cuts the money allocated to Postcrypt, CTV's The Gates , and the French Cultural Society, it's no reason to suspect some vast conspiracy. But when ABC captures David Helfand and tries to harness the power of science to find Alexander Hamilton's hidden treasure, it becomes evident something sinister is going on.\nWhen someone inside ABC, a mysterious informant known only as \"Strep Throat,\" brings word to the slighted students that a treasure hunt is on, the students hungrily join the search. What transpires will thrill, astound, and pose the question, \"How far will Columbia students go for money?\" The answer? Far. As long as it's not off campus.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/MpGg6ZscBWE"
        }
      ],
      "quotes": [],
      "cast": "Principals:\nBecky Abrams\nThomas Anawalt\nJosh Breslow\nCaitlin Harrity\nJordy Lievers\nMichael Molina\nMark Rosenthal\nCaitlin Shure\nEnsemble:\nEmily Bickford\nGilli Messer\nEva Peskin\nRoss Ramone\nMichael Snyder\nBenjamin Velez",
      "creativeTeam": "Directed by Mark Junek\nProduced by Olivia Gorvy and Geoffrey Karapetyan\nWritten by Tom Keenan, Peter Mende-Siedlecki, and Rob Trump\nMusic & Lyrics by Henry Pedersen\nChoreography by Erin Debold\nArt Direction by Brigid Abraham",
      "detailHref": "v113/index.html"
    },
    {
      "year": 2008,
      "showNumber": 114,
      "poster": "assets/program_cover_jpgs/v114-cover.jpg",
      "synopsis": "Whether it\u2019s school, their peers, or of course, Barnard, there\u2019s nothing Columbia students love more than finding something to hate. So when optimistic Cornell transfer David meets idealistic Barnard eco-rep Lizzy, the penchant for positive thinking that sets them apart from the rest of campus draws them closer to each other.\nAfter a \u201cbias incident\u201d at Columbia\u2019s all-female counterpart, however, head of Public Safety James McShane attempts to consolidate control over Barnard\u2019s campus. When President Judith Shapiro realizes that this is more about hate and less about crime, she bites back, setting off a bitter conflict that pits the two schools against each other.\nAs Barnard stands her ground and Columbia refuses to give in, David and Lizzy struggle to stay together, finding it harder than they expected to keep cool in the hate-wave.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/FSBKHrYak7I"
        }
      ],
      "quotes": [
        "\u201cFriend-less and a liar? How Columbia.\u201d",
        "\u201cBut the Nexus is the future of Barnard!\u201d"
      ],
      "cast": "Principals:\nKieron Cindric\nSarah Dooley\nLauren Glover\nLaura Klienbaum\nTobin Mitnick\nWill Snider\nMichael Snyder\nEnsemble:\nZach Dyer\nEmily Alpern Fisch\nAllie Paddock\nSophie Ragir\nMichael Seaman\nJenny Vallencourt",
      "creativeTeam": "Directed by Hannah Kass\nProduced by Erin Byrne and Jeff Schwartz\nWritten by Rob Trump and James Williams\nMusic and Lyrics by Benjamin Velez and Katie Hathaway\nChoreography by Emily Bickford\nArt Direction by Ben Weinryb Grohsgal",
      "detailHref": "v114/index.html"
    },
    {
      "year": 2009,
      "showNumber": 115,
      "poster": "assets/program_cover_jpgs/v115-cover.jpg",
      "synopsis": "The economy is in tatters, the endowment is down, and JJ's closes at 2 am nowadays. As freshmen struggle to break out of the Columbia bubble, unemployed alums are desperate to break back in. And after fourteen years as dean of Columbia College, Austin Quigley has been unceremoniously sacked for his irresponsible spending and power-hungry ways. No, it's not an ideal time for anyone at Columbia this year.\nBut Quigley\u2019s not leaving the ivory tower without a fight. Once university president Lee Bollinger is out on a \u201cfun run,\u201d the deranged dean locks the Columbia gates and establishes himself as ruler. When the campus becomes his self-contained kingdom, the CU Assassins game turns deadly, exorcisms start happening in the common rooms, and the Hallelujah Man preaches his message of love from 113th St.\nIn short, things in Morningside are as strange as ever, but now it\u2019s a lot harder to get off-campus.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/WzCBHzpIAOE"
        }
      ],
      "quotes": [],
      "cast": "Principals:\nPatrick Blute\nGiselle Gastell\nEmma Goidel\nAdam May\nNina Pedrad\nKendale Winbush\nEnsemble:\nMorgan Fletcher\nYonatan Gebeyehu\nJohn Goodwin\nNicole Lopez\nJill Schackner\nConnor Spahn\nEmily Wallen",
      "creativeTeam": "Directed by Thomas Anawalt and Sam Reisman\nProduced by Rebecca Lewis and Darcy Zacharias\nWritten by Erica Drennan, Rachel Leopold, and Sam Reisman\nMusic and Lyrics by Becky Greenstein and Matt Stauffer\nChoreography by Claire Halberstadt\nArt Direction by Cayle Pietras",
      "detailHref": "v115/index.html"
    },
    {
      "year": 2010,
      "showNumber": 116,
      "poster": "assets/program_cover_jpgs/v116-cover.jpg",
      "synopsis": "Life at Columbia can be stressful when dealing with the Lerner Piano, CO\u00d6P rituals, and Public Safety, which is why students always make Thursday a night they'll never forget (at least until the morning). With only two months till graduation, Travis has checked everything off from his college bucket list except one thing...his virginity. But when he meets charismatic Barnard junior Emma, sex might come second to a chance at a real relationship.\nAcross Broadway, Barnard Dean Dorothy Denburg conspires to make sure her students act like the Disney princesses of her dreams with a new community plan.\nThrow into the mix a Medieval Studies major trying to fit in, a Barnard freshman in need of friends, and a CC teacher who's too cool to leave school, and Columbians will always risk a bad decision, even if they regret it in their morning walk of shame.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/Aj43JzSImfo"
        }
      ],
      "quotes": [
        "\u201cSun\u2019s out, it\u2019s the first day of Spring.\u201d"
      ],
      "cast": "Patrick Blute\nEmily Feinstein\nYonatan Gebeyehu\nJohn Goodwin\nAlex Hare\nHannah Kloepfer\nHillary Kritt\nSpencer Oberman\nDavid Offit\nBenjamin Russell\nTessa Slovis\nJenny Vallancourt",
      "creativeTeam": "Directed by Ameneh Bordi\nProduced by Cody Haefner and Ajit Pillai\nWritten by Peter Labuza and Patrick McGuire\nMusic and Lyrics by Evan Johnston and Matt Star\nChoreography by Meredith Kirk\nArt Direction by Cayle Pietras",
      "detailHref": "v116/index.html"
    },
    {
      "year": 2011,
      "showNumber": 117,
      "poster": "assets/program_cover_jpgs/v117-cover.jpg",
      "synopsis": "It\u2019s another banner year for Columbia! Scandal ensues after Chaz, an undercover cop, discovers a guerrilla army of hipsters selling an illegal, yet irresistible substance out of the ADP house. The only one who can stop them is University Senator Preston, who finds the army\u2019s leader, Julia, even more irresistible. Soon, Preston finds himself in a pickle, torn between his love of Julia and his own self-righteousness.\nA pickle that is made all the more sour by Preston's sister, Nora, whose struggle for campus fame leads her down a dangerous road.\nAcross that road is Jesse, a man at--whoops!--Barnard, where he must conceal his identity to remain at his dream school. But he finds a friend in Dean Kevin $hollenberger, who knows a thing or two about going undercover -- and has the sparkle pants to prove it.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/mzmufMkwt3Q"
        }
      ],
      "quotes": [],
      "cast": "Issac Assor\nRachel Chavez\nRebekah Lowin\nSam Mickel\nAlia Munsch\nVictoria Pollack\nElizabeth Power\nNaomi Roochnik\nChris Silverberg\nBob Vulfov\nSean Walsh\nAndrew Wright",
      "creativeTeam": "Directed by Emily Nagel\nProduced by Fiona Georgakis and Martin Willner\nWritten by Nuriel Moghavem and Betsy Morais\nMusic and Lyrics by Eli Grober and Shira Laucharoen\nChoreography by Sara Miller\nArt Direction by Antoinette Allen",
      "detailHref": "v117/index.html"
    },
    {
      "year": 2012,
      "showNumber": 118,
      "poster": "assets/program_cover_jpgs/v118-cover.jpg",
      "synopsis": "For Phineas\u2014student tour guide, Classics major, and self-described \"Renaissance Man\"\u2014there's no place like Columbia, and no curriculum like the Core. All of that is about to change, however, when Niamh O'Brien, the business-minded director of the Center for Career Education, gets an unexpected promotion, placing her in charge of bringing Columbia's outdated curriculum into the corporate age.\nSoon Phin and his best friend, Lexi (whose obsession with tabloids - and a certain suave Economics professor - knows no bounds), find themselves immersed in a new Core...one that favors sharks like Derek, whose father may or may not have donated a well-known building on campus.And as much as a certain girl from across the street, Claire, might advise that Phineas \"adapt to survive,\" he starts to seem more and more like a Famiglia pizza, and less like Koronet. (Hint: that's not good.)\nCan Phineas save the liberal arts as he once knew them? Or is Columbia destined to forever become a factory for i-bankers and consultants? Join him on a journey through College Walk, Dodge Gym, Bwog's comment section, and the Butler Stacks!\nAnd who knows - you may just get to meet everyone's favorite teeny Deany.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/X9IWRm469jM"
        }
      ],
      "quotes": [
        "\u201cMy Econ professor - Sunil Gulati - oh my god he\u2019s such a nugget. I call him the Gu-latt\u00e9 because he\u2019s smooth, dark, and keeps me up all night...\u201d",
        "\u201cThe one percent is the fun percent.\u201d"
      ],
      "cast": "Principals:\nEleanor Bray\nRebekah Lowin\nAlessio Mineo\nJenny Singer\nSean Walsh\nEnsemble:\nPatrick Aloia\nAllie Carieri\nGeoff Hahn\nGray Henry\nDevin Lloyd\nKaylin Mahoney",
      "creativeTeam": "Directed by Alex Hare\nProduced by Ben Harris and Hillary Kritt\nWritten by John Goodwin and Jeff Stern\nMusic and Lyrics by Tareq Abuissa and Solomon Hoffman\nChoreographed by Adrianna Aguilar\nArt Direction by Stephen Davan",
      "detailHref": "v118/index.html"
    },
    {
      "year": 2013,
      "showNumber": 119,
      "poster": "assets/program_cover_jpgs/v119-cover.jpg",
      "synopsis": "These days, Columbia students seem to spend all their time behind a digital screen of some kind--and computer engineer Kat wouldn\u2019t have it any other way. So when a freak super-storm brings down internet and phone service indefinitely across the Upper West Side, Kat doesn\u2019t know how to communicate and is left feeling like a little fish in a big SEAS.\nMeanwhile, Kat's nefarious RA, Vivica vies to be granted Broadway's sky-lounge (it's a walk-through single). Along with her rider, Dylan, V wants to stop the internet from returning forever so that her residents can never go on Facebook again and have to start coming to her (totally exciting) floor events. But with the encouragement of her strong, beautiful Barnard friend Millie, and her crush, cross-country boy-band-singer, Julian, Kat pursues PrezBo\u2019s Days on Campus weather machine so she can bring back the internet with another storm, going on a journey that takes her to every corner of Columbia\u2019s bureaucracy, even the elusive Health Services Office in Wien.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/C8IgZSIaQYc"
        }
      ],
      "quotes": [
        "\u201cHey idiot! I want to kiss your face!\u201d",
        "\u201cI\u2019ve been working at Barnard since 1992 and I still can\u2019t find the men\u2019s bathroom.\u201d",
        "\u201cLove is an email, love is a text / Love is free Wi-Fi that no one protects\u201d"
      ],
      "cast": "Principals:\nRebecca Farley\nEthan Fudge\nOlivia Harris\nMolly Heller\nJonah Weinstein\nEnsemble:\nScott Bacon\nAnkeet Ball\nJessica Chi\nFernanda Douglas\nJohn Fisher\nSkylar Gottlieb\nCole Hickman\nJohn Kenney\nPaulina Pinsky",
      "creativeTeam": "Directed by Chris Silverberg\nProduced by Ally Engelberg and Laura Quintela\nWritten by Eric Donahue and Isabel Lopez\nMusic by Max Druz\nLyrics by Nick Parker\nChoreographed by Gina Marie Borden\nArt Direction by Jiin Choi",
      "detailHref": "v119/index.html"
    },
    {
      "year": 2014,
      "showNumber": 120,
      "poster": "assets/program_cover_jpgs/v120-cover.jpg",
      "synopsis": "With only forty more days left before graduation, social butterfly Lucy Shaw is ready to leave Barnard and Columbia, confident her four years were memorable \u2014 until she is passed over for a Senior Wisdom. Determined to leave a lasting mark at Columbia, Lucy sets out to give Columbians an experience they'll always remember. Along the way, she enlists the help of her best friend Evan, whose dreams of law school have kept him tucked away in Butler for four years.\nMeanwhile, President Bollinger's nephew Alistair cares less about student happiness and more about impressing his Uncle PrezBo by forcing proper Ivy League dignity upon Columbia's unruly ranks. With the help of Chip, his doting protege, Alistair concocts a diabolical plan to pose as PrezBo and institute a curfew at Columbia, keeping all students \u2014 and their rowdy shenanigans \u2014 locked inside after dark.\nNow time is running out as Lucy rushes to make her mark, get a Senior Wisdom, and foil Alistair's plans. But will she succeed? Will Lucy and Evan's friendship develop into something more? Will Alistair finally make his UncBo proud? All these and more are answered in a Morningside Night that no one can forget.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/s7by8SQegrg"
        }
      ],
      "quotes": [
        "\u201c$3,000? That\u2019s triple the Barnard endowment!\u201d",
        "\u201cI can\u2019t even. Do you hear me? I have lost the ability to even!\u201d",
        "\u201cThat\u2019s all for tonight\u2019s broadcast of Appalachian Snake Jazz. Join us next week for our special amphibious guest, Frog Coltrane. For WKCR, I\u2019m your host, Lizard Gillespie.\u201d",
        "\u201cYears to come do what they may / You\u2019re always gonna hear me say / O light blue\u201d"
      ],
      "cast": "Sam Balzac\nEllie Beckman\nBrittany Beljak\nLacey Bookspan\nMichael Carter\nAlex Donnelly\nLindsay Garber\nEmma Grueskin\nKyle Marshall\nBrittany Searles\nMatt Soto\nSean Walsh",
      "creativeTeam": "Directed by Emily Feinstein\nProduced by Allie Carieri, Ally Engelberg and Ren\u00e9e Kraiem\nWritten by Rae Binstock and Eric Donahue\nMusic by Solomon Hoffman\nLyrics by Nick Parker\nChoreographed by Lauren Wingenroth\nArt Direction by Jiin Choi",
      "detailHref": "v120/index.html"
    },
    {
      "year": 2015,
      "showNumber": 121,
      "poster": "assets/program_cover_jpgs/v121-cover.jpg",
      "synopsis": "When resident-adviser Gwen Ross returns from studying abroad, she is startled to find her alma mater in the midst of a literal hell-scape. To make matters worse, the newly promoted Executive Vice President for University Life, Suzanne Goldberg, is launching a re-branding campaign, which instantly transfers out dissatisfied students and replaces them with happy ones.\nDetermined to stop Goldberg and fix her beloved community, Gwen convinces her classmates to form an activist group. She enlists the help of her trusted boss, Director of Residential Life, Scott Helfrich; however, a fling with a student-anarchist named Arrow threatens the unity of Gwen's coalition. With secrets all around her, Gwen will need more than optimism and bake sales to bring peace to Columbia.\nCan the students really take on the administration? Will the merciless bureaucracy wear Gwen down, too? Only one thing is for sure: nothing is better than it seems\u2026",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/Bx7mdgwPQqA"
        }
      ],
      "quotes": [
        "\u201cYou\u2019re listening to WBAR\u2014the only radio station with more DJs than listeners!\u201d",
        "\u201cBernheim and Schwartz! Or, as I like to call it, the German-Jewish version of Chili\u2019s.\u201d",
        "\u201cI have no idea what you just said, but here! Take some free condoms.\u201d",
        "\u201cThere\u2019s more than what you see / Columbia is more than a degree / It\u2019s you and me.\u201d"
      ],
      "cast": "Gabrielle Bullard\nIsaac Calvin\nApril Cho\nJahbril Cook\nSkylar Gottlieb\nCole Hickman\nVarun Kumar\nSophie Laruelle\nMegan Litt\nMichael MacKay\nAlina Sodano\nAsher Varon",
      "creativeTeam": "Directed by Molly Heller\nProduced by Nikita Ash and Emily Snedeker\nWritten by Ally Horn and Bijan Samareh\nMusic and Lyrics by Sam Balzac and Fernanda Douglas\nChoreographed by Chlo\u00e9 Durkin\nArt Direction by Isabella Rosner",
      "detailHref": "v121/index.html"
    },
    {
      "year": 2016,
      "showNumber": 122,
      "poster": "assets/program_cover_jpgs/v122-cover.jpg",
      "synopsis": "First generation student Jenny Park never truly felt like she belonged at Columbia. With all the historically \u201cgreat\u201d people who went here, who wouldn\u2019t feel insecure? So when the administration discovers that some students were admitted by mistake, she\u2019s not the only one to get a bad case of impostor syndrome. Soon the whole school is turned upside down as a frazzled administration and an increasingly insecure student body turn to the past for the solution to their problems, putting their trust in Columbia\u2019s legendary founder, King George II, who returns to expel the falsely admitted students and \u201cMake Columbia Great Again.\u201d With a witch hunt brewing, no one is safe-- especially if you\u2019re in Notes and Keys.\nDesperate to keep her spot at CU (and fulfill her work study requirement), Jenny joins the King\u2019s ranks and helps the administration arrest suspicious students. That is, until she meets (and falls for) Barnard troublemaker/ukulele player Rose Greenberg, the leader of the resistance against the King\u2019s oppressive regime.\nIn a school literally haunted by the legacies of dead white men, will Jenny learn to stand up for her right to exist at Columbia? Or will she succumb to the cut-throat campus culture? And is that cute green-haired girl gay or just messing with us? Watch if you dare, but just beware: the past is never done with you",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/zfFPzy6eiWM"
        }
      ],
      "quotes": [
        "\u201cRuthlessly backstabbing your one true friend for a shot at success... You really are a true Columbia student.\u201d",
        "\u201cIn my day, we didn\u2019t have trigger warnings. You just got shot!\u201d",
        "\u201cThere\u2019s a dead white man inside us all.\u201d",
        "\u201cThe purpose of The Core is to prepare you for life as a 1940s socialite! Nothing more!\u201d"
      ],
      "cast": "Xander Browne\nApril Cho\nJohn Fisher\nRachel Greenfeld\nJet Harper\nJacob Iglitzin\nChelsea Jean-Michel\nShreyas Manohar\nCharles Sanky\nEmma Smith\nHenrietta Steventon\nTalmage Wise\nLearn More\nGet Involved\nView Past Shows\nI.A.L. Diamond Award",
      "creativeTeam": "Directed by Jonah Weinstein\nProduced by Michaela Schwartz\nWritten by Anika Benkov and Michael Rodriguez\nMusic and Lyrics by Jake Chapman and Sofia Geck\nChoreographed by Romi Messer\nArt Direction by Isabel Nelson",
      "detailHref": "v122/index.html"
    },
    {
      "year": 2017,
      "showNumber": 123,
      "poster": "assets/program_cover_jpgs/v123-cover.jpg",
      "synopsis": "With graduation looming, Columbia College senior Liv has one huge regret: that she didn\u2019t attend Barnard. Her best friend, Zoe, president of SGA, entertains Liv\u2019s dream of being a \u201cBarnard bear,\u201d but no matter how many Midnight Breakfasts she attended, no matter how few people listen to her WBAR show, she never felt she truly belonged.\nMeanwhile, as Debora Spar prepares to leave for Lincoln Center, she realizes building the new library has dried Barnard completely of its funds. A horrifying ultimatum arises: President Spar must either close the school or sell it to Columbia.\nSpar decides to sell the school in the hope that Barnard can recover one day. She stays on to help Interim President Robert Goldberg with the transition, but it proves to be more of a curse than a blessing. Barnard students, including Zoe, now stripped of her position, are furious. However, Liv is ecstatic\u2014finally, she can be a Barnard student. This causes a rift between Zoe and Liv, and their friendship is on the line.\nLiv, Zoe, and internship-crazed CC class rep Gavin butt heads, all the while trying to save Barnard and reverse the merger. But can they do it?",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/on0zH3t_Nag"
        }
      ],
      "quotes": [
        "\u201cPlease, don\u2019t interrupt me. I\u2019m trying to speak on your behalf.\u201d",
        "\u201cThey\u2019re combining Bacchanal and WBAR-B-Q and calling it WBAR-cchanal. Who came up with that?\u201d",
        "\u201cDon\u2019t worry, Deb. I know they say I don\u2019t have enough \u2018academic experience,\u2019 but I went to Catholic school, so I think I know how nunneries work.\u201d",
        "\u201cI can\u2019t believe I\u2019m agreeing with the CU wrestling team on anything, but... fuck! I should went state school!\u201d"
      ],
      "cast": "Francisco Alvidrez\nIndia Beer\nBernadette Bridges\nJulia Dooley\nHarrison Gale\nRachel Greenfeld\nJacob Kaplan\nJoel-Isaac Musoki\nGus O'Connor\nJamie Gore Pawlik\nTom Phelan\nLauren Wilmore",
      "creativeTeam": "Directed by Kyle Marshall\nProduced by Alana Koenig and Rachel Andres\nWritten by Amelia Arnold and Mark Lerner\nMusic and Lyrics by Max Gumbel and Simon Broucke\nChoreographed by Annie Block\nDesign Leadership by Oliver Konkel\nStage Management by Jacqueline Napolitano",
      "detailHref": "v123/index.html"
    },
    {
      "year": 2018,
      "showNumber": 124,
      "poster": "assets/program_cover_jpgs/v124-cover.jpg",
      "synopsis": "Election season! Chelsea Shaw is confident that nothing could possibly prevent her from taking a seat on CCSC. But when a shocking loss to the legacy-crazed William Schermerhorn VIII (Yes, Schermerhorn like the building) catches her off guard, she starts to wonder what her time at Columbia was even worth.\nMeanwhile, under the reign of William, any sense of fiscal responsibility has flown out the window. After making outrageous promises to the student body, William backs himself into a corner and has to turn to the family vault to move things around.\nWilliam\u2019s dangerous case of promises ultimately leads to a disastrous loss of power (literally, the power goes out), and it\u2019s up to Chelsea to save the day. But can she put her disappointment behind her, reunite with friends who she rashly rejected, and recall the skills she\u2019s learned in her time at Columbia to make things right again for the student body?",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/XZOOv3MWIVA"
        }
      ],
      "quotes": [
        "\u201cI\u2019ve gotta know if they want the Kingsmen to go back to red blazers, or if they want them to keep the blue. I need to take a stance.\u201d",
        "\u201cThat is definitely your jacket... I saw you take it off when 24K Magic came on and you screamed that it was \u201cyour song\u201d and then double-fisted jello shots.\u201d",
        "\u201cA homeless woman asked him for change outside Hungarian on his way back home to Enclave, and he told her that if she wanted coins so badly, she should just buy a pastry so they\u2019d break her bill at the register! He literally told her to eat cake!\u201d",
        "\u201cNow you can Facebook-stalk your best friend Deantini in the privacy of a single.\u201d"
      ],
      "cast": "Jack Becker\nDylan Dameron\nRachel Greenfeld\nSophia Houdaigui\nGenevieve Joers\nMatt Malone\nJoel Meyers\nDuda Penteado\nKayla Streiber\nMaura Ward\nTalmage Wise\nIlana Woldenberg\nEthan Woo",
      "creativeTeam": "Directed by Hazel Rosenblum-Sellers\nProduced by Emeline Bookspan & Alana Herrnson\nWritten by Hayley Tillett\nMusic & Lyrics by Simon Broucke\nChoreographed by Christine Sedlack\nDesign Leadership by Yilun Ying\nStage Management by Julia Zeh",
      "detailHref": "v124/index.html"
    },
    {
      "year": 2019,
      "showNumber": 125,
      "poster": "assets/program_cover_jpgs/v125-cover.jpg",
      "synopsis": "The Columbia Administration has recently mandated that all students wear off-brand Heelys to cut time between classes, and now campus is abuzz with Heely-based protests. Opinions differ, but everyone is making their stance known. Well, everyone except Hannah Levine, who lives in the shadow of her best friend, campus celebrity Isabella \u201cIzzy\u201d Morales.\nWhen \u201cHeelygate\u201d devolves, well-intentioned Dean of Admissions Jessica Marinaccio and her power-hungry Regional Admissions Director Jason Mogen make an executive decision: it\u2019s time to shut the Heely simulation down.\nTurns out, \u201cColumbia\u201d has actually been a series of simulations designed to create the ideal college experience. In each simulation there\u2019s been one \u201ctweak\u201d made to improve Columbia. However, after 124 failed simulations, Marinaccio and Mogen have discovered one universal truth: no matter the improvements, Columbia students will always find a way to make themselves miserable. For simulation 125, they resolve to make the tweak as inconsequential as possible: banning milk from Columbia.\nAnd just as a milk demonstration threatens to burn Columbia to the ground, Dean Marinaccio and Jason Mogen decide it\u2019s time to permanently end the simulation and tell the students the truth.\nNow, the entire Columbia student body must struggle to make sense of the fact that their college careers have been a lie. Every Columbia student\u2014from campus icon to forgotten sidekick\u2014must ask themselves the same question: when all else has been stripped away, what really matters and what isn\u2019t worth the sweat?",
      "mediaOptions": [
        {
          "type": "spotify",
          "url": "https://open.spotify.com/embed/album/2qQ0Ru3fPT5DRyq9vA6zCt?utm_source=generator&theme=0"
        },
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/hKDte1_O4B8"
        }
      ],
      "quotes": [],
      "cast": "Adam Kluge\nErik Larsson\nEthan Woo\nGiuliana Russo\nJackie Chu\nJerry Zheng\nJordynn Lurie\nJoseph Meyer\nNaomi Rubin\nNathalia Tavares\nRussell Graviet\nSamantha Seiff\nWesley Schmidt",
      "creativeTeam": "Directed by Sophia Houdaigui\nProduced by Nakiri Gallagher-Cave\nProduced by Antara Agarwal\nStory & Book by Corinne Rabbin-Birnbaum\nStory  by Louisa Melcher\nMusic by Ian Yan\nLyrics by Callum Kiser\nChoreography by Sophie Visscher-Lubinizki\nLead Designer Joseph Kurtz\nStage Manager Caroline Cassese",
      "detailHref": "v126/index.html"
    },
    {
      "year": 2020,
      "showNumber": 126,
      "poster": "assets/program_cover_jpgs/v126-cover.jpg",
      "synopsis": null,
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/2ODwqI1UYfg"
        }
      ],
      "quotes": [],
      "cast": "Thomas Baker\nEstee Dechtman\nNicolas Duran\nAdam Glusker\nRachel Greenfeld\nTalia Hankin\nDale Jackson\nCallum Kiser\nVenice Ohleyer\nChristian Palomares\nHarris Solomon\nLorenzo Talbot-Foote\nIlana Woldenberg\nLearn More\nGet Involved\nView Past Shows\nI.A.L. Diamond Award",
      "creativeTeam": "Directed by Bernadette Bridges\nProduced by Samantha Grubner and Sila Puhl\nWritten by Jake Arlow and Jacob Kaplan\nMusic by Brent Morden and Yael Cohen\nLyrics by Brent Morden, Yael Cohen and Jacob Kaplan\nChoreographed by Andrea Patella\nDesign Leadership by Lena Kogan\nStage Management by Sarah Leidich",
      "detailHref": "v125/index.html"
    },
    {
      "year": 2021,
      "showNumber": 127,
      "poster": "assets/program_cover_jpgs/v127-cover.jpg",
      "synopsis": "After a year of online learning and social isolation, Columbia students are ready for a return to normalcy. Eve, a Senior in CC, is disappointed that her time at Columbia has to end like this. She has sealed herself off from her friends hoping to manage the loss she already feels. A freshman who has never set foot on campus, Dani\u2019s time here has barely started. Just as Eve starts reconnecting with her best friends Rory and Rebecca, the Registrars recruit Dani in a scheme that threatens not only Eve\u2019s ability to move on\u2026 but all of Columbia.",
      "mediaOptions": [
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/ZnVN8H5aa3c"
        }
      ],
      "quotes": [],
      "cast": "Lindsey Belisle Anna Kasun Joseph Kurtz Daisy Byers Callum Kiser Jackie Balestrieri Sydney Grayson Jackson Davis Ketsia Zinga Emily McKiernan Kevin Chaikelson Paul Hanna",
      "creativeTeam": "Directed by Christian Palomares Produced by Mario Garcia Produced by Julia Hyman Composed by Evan Smolin Lyrics by Abby Rooney Written by Gigi Russo and Wesley Schmidt Lead Design by Octavio Galaviz Choreography by Angela Zhang Stage Management by Grace Brown and Grace Biondi",
      "detailHref": "v127/index.html"
    },
    {
      "year": 2022,
      "showNumber": 128,
      "poster": "assets/program_cover_jpgs/v128-cover.jpg",
      "synopsis": "University President Lee Bollinger longs for Columbia to achieve the top spot in the U.S. News and World Report\u2019s college rankings. After an art history seminar accidentally summons the Devil out of a painting in Avery, she tells a possessed-Bollinger the secret to the #1 spot: not by increasing Columbia\u2019s endowment, but by decreasing the size of the student body. Along with Provost Mary Boyce, the Devil and Bollinger turn campus into a hell-scape as students struggle to avoid their ultimate damnation if they are deemed failures: the call center in Wien Hall.",
      "mediaOptions": [
        {
          "type": "soundcloud",
          "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A1512275518&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        }
      ],
      "quotes": [],
      "cast": "Casey Rogerson Estee Dechtman Jackson Schwartz Jane Watson Morgan Johns Adam Kluge Tatiana Mroczek Olivia Cull Shania Pahuja Jackie Chu Surya Buddharaju Erin Hilgartner (Understudy)                                                                                     Lindsey Belisle (Understudy)\nLearn More\nGet Involved\nView Past Shows\nI.A.L. Diamond Award",
      "creativeTeam": "Directed by Giuliana Russo Produced by Grace Brown and Caroline Cassese Written by Harris Solomon and Nurasyl Shokeyev Composed by Jerry Zheng Lyrics by Jaeda Mendoza Choreography by Sam Landa Stage Management by Grace Biondi",
      "detailHref": "v128/index.html"
    },
    {
      "year": 2023,
      "showNumber": 129,
      "poster": "assets/program_cover_jpgs/v129-cover.jpg",
      "synopsis": "Columbia may be ranked 18th because of Professor Michael Thaddeus, but the students have more pressing problems.\nWilder, a freshman, meant to apply to Columbia College, Missouri. Damien Dartmouth\u2019s family wanted him to go to, well, Dartmouth. Now they\u2019re roommates, and while Wilder wants to transfer, Damien might get forced to. However, when Wilder meets their RA, Nola (short for Granola), he immediately falls in love. Maybe this school won\u2019t be so bad after all.\nRachel and Joan are finally living together in the dorm of choice for any young couple: an EC double. Joan, a transfer student from Cornell LOVES Columbia, almost as much as Rachel LOVES Professor Thaddeus. And Rachel will do whatever it takes to impress him: apply to Columbia\u2019s math PhD program, TA his class, or even expose her fellow students for cheating just like Thaddeus exposed the Admin.\nOnce the cheating scandal breaks, no \u201creal\u201d company is interested in hiring Columbia students. Worried about how this could impact Alumni Donations, Columbia Administrators, including the hungry for the spotlight Registrar Barry Kane, decide to prevent students from cheating the only logical way: Ban all Electricity from Campus. And to give the students a chance to prove to the world that they can learn without cheating, the Admin create the S.W.I.M. Test, or Students Without Internet Mechanisms\u2026 Test.\nSummon the town crier, do laundry in the penis fountains, and enjoy candle lit nights in Butler. The whole school is mad at Rachel, and even Damien\u2019s advice isn\u2019t enough to help Wilder fit in. But can the students learn a thing or two from Wilder?  Can Rachel and Joan put aside their differences to fix this? And can the students find a way to prove themselves without a series of useless tests?",
      "mediaOptions": [
        {
          "type": "soundcloud",
          "url": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1706610816&color=%231f1f1f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
        },
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/-EGi8pu_TFE"
        }
      ],
      "quotes": [],
      "cast": "Eleanor Babwin Hannah Carter Craig Cosentino Nina Dia Tommy Doyle Paul Hanna Ana Huesa Kieran Lomboy Nicholas Meyers (Dance Captain) Ariana Neal Shania Pahuja Filip Przybycien Jaeden Riley Juarez Casey Rogerson Tatiana Santos Mroczek Vincent Snyder Anja Vasa Tyler Zwick",
      "creativeTeam": "Directed by Jackie Balestrieri Produced by Amalia Garcia and Abby Svelan Written by Julian Gerber and Katy Haden Composed by Malcolm Toleno Lyrics by Ava Roberts Choreographed by Kambi Gathesha Stage Management by Emily Martin Tech Directed by Alex Malamud",
      "detailHref": "v129/index.html"
    },
    {
      "year": 2024,
      "showNumber": 130,
      "poster": "assets/program_cover_jpgs/v130-cover.jpg",
      "synopsis": "Columbia President Minouche Shafik sends four students on her private jet to attend a conference.\nThe jet crashes.",
      "mediaOptions": [
        {
          "type": "spotify",
          "url": "https://open.spotify.com/embed/album/45t9VIIQIY5YpACc2XiN4o?utm_source=generator&theme=0"
        },
        {
          "type": "youtube",
          "url": "https://www.youtube.com/embed/V6PCdSb4UtM"
        }
      ],
      "quotes": [
        "\u201cPlane Crash? I can\u2019t afford a scandal this early in my Presidency!\u201d",
        "\u201cI have to trust the fathers/My papas through and through/And trust their faithful words/Will tell me what to do!\u201d",
        "\u201cStudent after student is telling you something is wrong. Have you ever considered that they might be right?\u201d",
        "\u201cThere\u2019s a reason I hate Columbia/And a reason I go here still\u201d"
      ],
      "cast": "Matias Hernandez (CC '26) Kieran Lomboy (CC '26) Morgan Johns (GS\u2019 25) Abby Svelan (BC '25) Zach Brown (CC \u201827) Njoki Tiagha (CC '27) Kiana Mottahedan (CC '26) Sarafina Belafonte (CC '26) Ryan Crawford (CC '27) Ana Valeria V\u00e1zquez Navas (GS '24) Ella Wickham (CC '25) Hayley Lugg (GS '24) Anna Kasun (CC '24)",
      "creativeTeam": "Directed by Caroline Egler (BC \u201824) Produced by Caroline Itzkoff (BC \u201824) & Alex Malamud (BC \u201824) Written by Julian Gerber (CC \u201824) & Casey Rogerson (CC \u201824) Composed by Daniella Sapone (BC \u201825) Lyrics by Lauren Unterberger (BC \u201824) Choreographed by Julia Patella (BC \u201825) Stage Management by Kurt McLaughlin (CC \u201826) Tech Directed by Annabella Kliman (BC \u201824)",
      "detailHref": "v130/index.html"
    },
    {
      "year": 2025,
      "showNumber": 131,
      "poster": "assets/program_cover_jpgs/v131-cover.jpg",
      "synopsis": "When $440 million is slashed from Columbia's funding, the Co-Chairs of the Board of Trustees are desperate to get it back and protect their legacies. Their solution? Develop a device to make the world forget about the more\u2026 unsavory aspects of Columbia's reputation.\nBut when the spunky yearbook Editor-in-Chief and a new GS student (with a secret) overhear their plans, they decide to steal the device with the help of a \u201cFrench\u201d cinephile, a woke St. A's bro, a trad wife influencer, and a bold, beautiful techie.\nOn a campus full of scandal, romance, and bouncy castles, will good trump evil?\nNot if The Executive can help it\u2026",
      "mediaOptions": [
        {
          "type": "spotify",
          "url": "https://open.spotify.com/embed/album/6MrtQRKA0yvNIKdsRkmbyd?utm_source=generator&theme=0"
        }
      ],
      "quotes": [
        "\u201cYou had me at heist.\u201d",
        "\u201cCaption: Anyone want to be Columbia's fourth president in a year? Looks like we'll be rebuilding #fromscratch.\u201d",
        "\u201cIf I had a partner, he\u2019d never leave my side,/They\u2019d call me Hamilton the way he\u2019d keep me occupied\u201d",
        "\u201cFor once, Dad, would it be so impossible to listen to a proud, African American\u2026 Studies major?\u201d",
        "\u201cListen, I\u2019m all about shutting down entire academic departments, but messing with the Core? My leadership framework would be nothing without Pride, Prejudice, Crime, and Punishment.\u201d",
        "\u201cAt last they\u2019ll take notice/I\u2019ll be an event/and not even POTUS/ can stop my ascent\u201d"
      ],
      "cast": "Sarafina Belafonte (CC \u201826) Kiana Mottahedan (CC '26) Wren Pfetcher (BC '27) Grace Colucci (BC \u201827) Anoushka Sharma (BC '27) Luna Boissiere Armstrong (BC '26) Lilly Gasterland-Gustafsson (BC '25) Luca Tuana i Guitart (CC '27) Owen Kalmbach (CC '28) Drew Kelly (CC '26) Lucas Lugones (SEAS '25) Njoki Tiagha (CC '27)",
      "creativeTeam": "Directed by Kamila Boga (GS \u201826) Produced by Olivia Kuan-Romano (BC \u201826) & Abigail Hart (CC \u201826) Written by Morgan Johns (GS \u201826) & Ella Wickham (CC \u201825) Composed by Daniella Sapone (BC \u201825) Lyrics by Anna Steel (CC \u201827) Choreographed by Sarah Kaplan (BC \u201827) Music Directed by Ruby Liebmann (BC \u201825) Stage Management by Taya Barry (CC \u201827) Tech Directed by Wylie Dodson (CC \u201826)",
      "detailHref": "v131/index.html"
    }
  ]


  const LS_YEAR = "varsityArchiveYear";

  const showLabel = document.getElementById("archiveShowLabel");
  const synopsis = document.getElementById("archiveSynopsis");
  const poster = document.getElementById("archivePoster");
  const posterLink = document.getElementById("archivePosterLink");
  const mediaContainer = document.getElementById("archiveMediaContainer");
  const quotes = document.getElementById("archiveQuotes");
  const quotesHeading = document.getElementById("archiveQuotesHeading");
  const seeMore = document.getElementById("archiveSeeMore");
  const yearInput = document.getElementById("yearInput");
  const timelineTrack = document.getElementById("timelineTrack");
  const timelineDragSurface = document.getElementById("timelineDragSurface");

  const minYear = 2003;
  const maxYear = 2025;
  const DEFAULT_MEDIA_PRIORITY = ["spotify", "soundcloud", "dropbox", "youtube"];

  const DEFAULT_POSTER_ALT = "Varsity Show poster";
  const PLACEHOLDER_POSTER = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='900'%3E%3Crect width='100%25' height='100%25' fill='%23c8c8c8'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' fill='%23606060' font-size='36' font-family='Arial'%3Eposter placeholder%3C/text%3E%3C/svg%3E";

  let currentYear = maxYear;
  let dragStartX = 0;
  let dragStartYear = maxYear;
  let isDragging = false;
  let pointerDownX = 0;

  function saveTimelineYear(year) {
    try {
      localStorage.setItem(LS_YEAR, String(year));
    } catch (error) {
      void error;
    }
  }

  function getRecord(year) {
    return archiveData.find((item) => item.year === year) || null;
  }

  function getFirstValidMediaByPriority(options, priorityOrder) {
    if (!Array.isArray(options) || !options.length) return null;
    const usable = options.filter(function (item) {
      return item && typeof item === "object" && item.type && item.url;
    });
    if (!usable.length) return null;

    const priority = Array.isArray(priorityOrder) && priorityOrder.length ? priorityOrder : DEFAULT_MEDIA_PRIORITY;
    for (let i = 0; i < priority.length; i += 1) {
      const type = priority[i];
      const match = usable.find(function (item) {
        return item.type === type;
      });
      if (match) return match;
    }

    return usable[0] || null;
  }

  function normalizeMedia(record) {
    if (!record) return null;
    if (Array.isArray(record.mediaOptions)) {
      return getFirstValidMediaByPriority(record.mediaOptions, record.mediaPriority);
    }
    if (record.media && typeof record.media === "object") {
      return record.media;
    }
    if (record.spotifyEmbed) {
      return {
        type: "spotify",
        url: record.spotifyEmbed,
        height: record.spotifyHeight || 152,
      };
    }
    return null;
  }

  function buildMediaIframe(config) {
    const iframe = document.createElement("iframe");
    iframe.className = "media-embed";
    iframe.src = config.url;
    iframe.style.borderRadius = "12px";
    iframe.width = "100%";
    iframe.height = String(config.height || 152);
    iframe.frameBorder = "0";
    iframe.setAttribute("allowfullscreen", "");
    iframe.loading = "lazy";
    iframe.title = config.title;
    iframe.allow = config.allow;
    return iframe;
  }

  function setMediaSlot(media) {
    if (!media || !media.type) {
      mediaContainer.innerHTML = '<div class="placeholder-box">media embed placeholder</div>';
      return;
    }

    mediaContainer.innerHTML = "";

    if ((media.type === "spotify" || media.type === "soundcloud" || media.type === "youtube") && media.url) {
      const iframe = buildMediaIframe({
        url: media.url,
        height: media.height || 152,
        title: media.title || (media.type.charAt(0).toUpperCase() + media.type.slice(1) + " embed"),
        allow:
          media.type === "youtube"
            ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            : "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
      });
      mediaContainer.appendChild(iframe);
      return;
    }

    if (media.type === "dropbox" && media.url) {
      const box = document.createElement("div");
      box.className = "media-link-box";

      const link = document.createElement("a");
      link.className = "media-link-box-btn";
      link.href = media.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = media.buttonLabel || "open audio";

      box.appendChild(link);
      mediaContainer.appendChild(box);
      return;
    }

    mediaContainer.innerHTML = '<div class="placeholder-box">media unavailable</div>';
  }

  function buildTimelineYearMarks() {
    const ruler = document.createElement("div");
    ruler.className = "timeline-ruler";

    for (let year = maxYear; year >= minYear; year -= 1) {
      const tick = document.createElement("div");
      tick.className = "timeline-tick";

      const isMajor = year % 5 === 0 || year === maxYear || year === minYear;
      if (isMajor) {
        tick.classList.add("is-major");
        const label = document.createElement("span");
        label.className = "timeline-year-mark";
        label.textContent = String(year);
        tick.appendChild(label);
      }

      ruler.appendChild(tick);
    }

    timelineTrack.appendChild(ruler);
  }

  function updateTimelinePosition(year) {
    const ruler = timelineTrack.querySelector(".timeline-ruler");
    if (!ruler) return;

    const step = parseFloat(getComputedStyle(timelineTrack).getPropertyValue("--year-step")) || 48;
    const clampedYear = Math.max(minYear, Math.min(maxYear, year));
    const index = maxYear - clampedYear;
    const centerX = timelineTrack.clientWidth / 2;
    const tickCenter = index * step + step / 2;
    const translateX = centerX - tickCenter;
    ruler.style.transform = "translateX(" + translateX + "px)";
  }

  function getYearFromPointerX(clientX, anchorYear) {
    const rect = timelineTrack.getBoundingClientRect();
    const step = parseFloat(getComputedStyle(timelineTrack).getPropertyValue("--year-step")) || 48;
    const localX = clientX - rect.left;
    const centerX = rect.width / 2;
    const yearOffset = Math.round((localX - centerX) / step);
    return clampYear(anchorYear - yearOffset);
  }

  function syncYearInputFromTimeline(year) {
    yearInput.value = String(year);
    if (document.activeElement === yearInput) {
      yearInput.classList.remove("year-input--committed");
    } else {
      yearInput.classList.add("year-input--committed");
    }
  }

  function normalizedQuoteStrings(record) {
    if (!record) {
      return ["Quote archive coming soon."];
    }
    if (!Array.isArray(record.quotes)) {
      return [];
    }
    return record.quotes
      .map(function (s) {
        return String(s).trim();
      })
      .filter(Boolean);
  }

  function renderQuotesList(record) {
    quotes.innerHTML = "";
    const strings = normalizedQuoteStrings(record);
    const hideHeading = Boolean(record) && strings.length === 0;

    if (quotesHeading) {
      quotesHeading.hidden = hideHeading;
      quotesHeading.setAttribute("aria-hidden", hideHeading ? "true" : "false");
    }

    strings.forEach(function (quote) {
      const li = document.createElement("li");
      li.textContent = quote;
      quotes.appendChild(li);
    });
  }

  function updateScrollableState(el) {
    if (!el) return;
    const wrap = el.closest(".scroll-fade-wrap");
    /* Small tolerance so a subpixel overflow doesn't falsely flag scrollable. */
    const overflow = el.scrollHeight - el.clientHeight > 1;
    el.classList.toggle("is-scrollable", overflow);
    if (wrap) wrap.classList.toggle("is-scrollable", overflow);

    /* Are we scrolled to the bottom? Fade indicator hides when so. */
    const atBottom =
      !overflow || el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
    if (wrap) wrap.classList.toggle("is-at-bottom", atBottom);
  }

  function refreshScrollIndicators() {
    updateScrollableState(synopsis);
    updateScrollableState(quotes);
  }

  /* Run the check now AND across a few rAFs so layout, font-loading,
     and the synopsis-height clamp all get a chance to settle. */
  function refreshScrollIndicatorsDeferred() {
    refreshScrollIndicators();
    requestAnimationFrame(function () {
      refreshScrollIndicators();
      requestAnimationFrame(refreshScrollIndicators);
    });
  }

  function bindScrollIndicator(el) {
    if (!el || el.dataset.scrollBound === "1") return;
    el.dataset.scrollBound = "1";
    el.addEventListener("scroll", function () {
      updateScrollableState(el);
    });
    /* Re-check whenever the box's own size changes (initial layout, font
       loading, poster image finally loading, viewport resize, etc.). This
       is what fixes "no gradient on first page load" since on cold load
       the synopsis max-height isn't applied until the poster loads. */
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(function () {
        updateScrollableState(el);
      });
      ro.observe(el);
    }
  }

  function scheduleArchiveTextClamp() {
    const token = (posterClampToken += 1);
    const screen = document.querySelector(".archive-screen");
    if (!screen) {
      return;
    }

    function apply() {
      if (token !== posterClampToken) {
        return;
      }

      const wide = window.matchMedia("(min-width: 1025px)").matches;
      if (!wide) {
        screen.style.removeProperty("--archive-synopsis-h");
        refreshScrollIndicators();
        return;
      }

      const posterBottom = poster.getBoundingClientRect().bottom;
      const synTop = synopsis.getBoundingClientRect().top;
      const synopsisH = Math.max(160, Math.round(posterBottom - synTop - 10));

      screen.style.setProperty("--archive-synopsis-h", synopsisH + "px");
      refreshScrollIndicators();
    }

    function runAfterLayout() {
      requestAnimationFrame(function () {
        requestAnimationFrame(apply);
      });
    }

    if (poster.complete) {
      runAfterLayout();
    } else {
      poster.addEventListener(
        "load",
        function onPosterLoad() {
          poster.removeEventListener("load", onPosterLoad);
          if (token !== posterClampToken) {
            return;
          }
          runAfterLayout();
        },
        { once: true }
      );
    }
  }

  function updateUI(year, options) {
    const persist = !options || options.persist !== false;
    const record = getRecord(year);
    currentYear = year;

    if (record) {
      showLabel.textContent = "V" + record.showNumber + " (" + record.year + ")";
      synopsis.textContent = record.synopsis;
      poster.src = record.poster || PLACEHOLDER_POSTER;
      poster.alt = "V" + record.showNumber + " poster" || DEFAULT_POSTER_ALT;
    } else {
      showLabel.textContent = "V--- (" + year + ")";
      synopsis.textContent = "Archive details for this year are coming soon.";
      poster.src = PLACEHOLDER_POSTER;
      poster.alt = DEFAULT_POSTER_ALT;
    }

    setMediaSlot(normalizeMedia(record));

    renderQuotesList(record);

    /* Reset scroll positions so a new year doesn't inherit the previous
       year's scrollTop (which would otherwise be flagged as "at bottom"
       and suppress the gradient indicator). */
    if (synopsis) synopsis.scrollTop = 0;
    if (quotes) quotes.scrollTop = 0;

    if (!ARCHIVE_DETAIL_PAGES_ENABLED) {
      seeMore.href = "#";
      seeMore.classList.add("is-disabled");
      seeMore.setAttribute("aria-disabled", "true");
      seeMore.title = "Show detail pages are turned off for now.";
      posterLink.removeAttribute("href");
      posterLink.classList.remove("is-disabled");
      posterLink.setAttribute("aria-disabled", "true");
      posterLink.removeAttribute("title");
    } else if (record && record.detailHref) {
      seeMore.href = record.detailHref;
      seeMore.classList.remove("is-disabled");
      seeMore.setAttribute("aria-disabled", "false");
      seeMore.removeAttribute("title");
      posterLink.href = record.detailHref;
      posterLink.classList.remove("is-disabled");
      posterLink.setAttribute("aria-disabled", "false");
      posterLink.removeAttribute("title");
    } else {
      seeMore.href = "#";
      seeMore.classList.add("is-disabled");
      seeMore.setAttribute("aria-disabled", "true");
      seeMore.removeAttribute("title");
      posterLink.removeAttribute("href");
      posterLink.classList.remove("is-disabled");
      posterLink.setAttribute("aria-disabled", "true");
      posterLink.removeAttribute("title");
    }

    syncYearInputFromTimeline(year);
    updateTimelinePosition(year);
    if (persist) {
      saveTimelineYear(year);
    }

    scheduleArchiveTextClamp();
    refreshScrollIndicatorsDeferred();
  }

  function clampYear(year) {
    if (Number.isNaN(year)) return currentYear;
    if (year < minYear) return minYear;
    if (year > maxYear) return maxYear;
    return year;
  }

  function parseYearToken(raw) {
    const digits = String(raw || "").replace(/\D/g, "");
    if (!digits) return NaN;
    return parseInt(digits, 10);
  }

  function tryJumpFromYearInput() {
    const n = parseYearToken(yearInput.value);
    if (Number.isNaN(n)) {
      syncYearInputFromTimeline(currentYear);
      yearInput.classList.add("year-input--committed");
      return;
    }

    const enteredYear = clampYear(n);
    updateUI(enteredYear);
    yearInput.classList.add("year-input--committed");
  }

  function init() {
    buildTimelineYearMarks();
    bindScrollIndicator(synopsis);
    bindScrollIndicator(quotes);
    window.addEventListener("resize", function () {
      updateTimelinePosition(currentYear);
      scheduleArchiveTextClamp();
    });
    window.addEventListener("load", function () {
      updateTimelinePosition(currentYear);
      scheduleArchiveTextClamp();
    });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        updateTimelinePosition(currentYear);
        scheduleArchiveTextClamp();
      });
    }

    function resetDragState(event) {
      if (!isDragging) return;
      isDragging = false;
      timelineTrack.classList.remove("is-dragging");
      if (event && typeof event.pointerId === "number") {
        try {
          timelineDragSurface.releasePointerCapture(event.pointerId);
        } catch (error) {
          void error;
        }
      }
      updateTimelinePosition(currentYear);
    }

    timelineDragSurface.addEventListener("pointerdown", function (event) {
      isDragging = true;
      dragStartX = event.clientX;
      pointerDownX = event.clientX;
      dragStartYear = currentYear;
      timelineTrack.classList.add("is-dragging");
      timelineDragSurface.setPointerCapture(event.pointerId);
    });

    timelineDragSurface.addEventListener("pointermove", function (event) {
      if (!isDragging) return;
      const step = parseFloat(getComputedStyle(timelineTrack).getPropertyValue("--year-step")) || 56;
      const deltaX = event.clientX - dragStartX;
      const rawVisual = dragStartYear + deltaX / step;
      const clampedVisual = Math.max(minYear, Math.min(maxYear, rawVisual));
      updateTimelinePosition(clampedVisual);

      const nextYear = clampYear(Math.round(clampedVisual));
      if (nextYear !== currentYear) {
        updateUI(nextYear);
      }
    });

    function endDrag(event) {
      if (!isDragging) return;
      const deltaX = event.clientX - pointerDownX;
      const wasClick = Math.abs(deltaX) < 6;

      if (wasClick) {
        const clickedYear = getYearFromPointerX(event.clientX, currentYear);
        updateUI(clickedYear);
      } else {
        updateTimelinePosition(currentYear);
      }

      saveTimelineYear(currentYear);
      resetDragState(event);
    }

    timelineDragSurface.addEventListener("pointerup", endDrag);
    timelineDragSurface.addEventListener("pointercancel", endDrag);
    timelineDragSurface.addEventListener("pointerleave", resetDragState);
    timelineDragSurface.addEventListener("lostpointercapture", resetDragState);
    window.addEventListener("pointerup", resetDragState);
    window.addEventListener("blur", function () {
      saveTimelineYear(currentYear);
      resetDragState();
    });
    window.addEventListener("pagehide", function () {
      saveTimelineYear(currentYear);
    });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState === "hidden") {
        saveTimelineYear(currentYear);
      }
    });

    yearInput.addEventListener("focus", function () {
      yearInput.classList.remove("year-input--committed");
    });

    yearInput.addEventListener("blur", function () {
      tryJumpFromYearInput();
    });

    yearInput.addEventListener("change", function () {
      tryJumpFromYearInput();
    });

    yearInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        tryJumpFromYearInput();
        yearInput.blur();
      }
    });

    /* Live-spin the timeline dial as the user types each digit, so the
       scrubber visually tracks the typed year before they commit on
       Enter/blur. We only move the ruler here (no full updateUI), so
       the synopsis/poster don't thrash mid-typing. */
    yearInput.addEventListener("input", function () {
      const digits = String(yearInput.value || "").replace(/\D/g, "");
      if (digits.length < 4) return;
      const n = parseInt(digits, 10);
      if (Number.isNaN(n)) return;
      updateTimelinePosition(clampYear(n));
    });

    let initialYear = maxYear;
    try {
      const stored = localStorage.getItem(LS_YEAR);
      const y = parseInt(stored, 10);
      if (!Number.isNaN(y) && y >= minYear && y <= maxYear) {
        initialYear = y;
      }
    } catch (error) {
      void error;
    }

    updateUI(initialYear);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
