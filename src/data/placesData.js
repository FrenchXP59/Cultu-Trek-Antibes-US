// src/data/placesData.js
export const PLACES_DATA = [
  {
    id: 1,
    lieu: "Place Nationale",
    latitude: 43.58125,
    longitude: 7.1259,
    photo: "/images/villas/1.jpg",
    infoShort: "Place Nationale, 06600 Antibes",
    infoLong:
      "This proud column, erected in 1818, commemorates the return of King Louis XVIII after Napoleon’s fall. Located in the heart of Old Antibes, it symbolizes the city’s enduring loyalty to the restored monarchy.",
    infoPlus:
      "The column was installed by Antibes’ royalist citizens. A commemorative plaque at its base recalls this historic pledge of allegiance.",
    defi: "Take a photo of the column and find the best perspective.",
    questions: [
      {
        id: 101,
        question: "In what year was the column in Place Nationale erected?",
        reponses_acceptables: ["1818", "year 1818", "in 1818"],
        indice: "It was the year when Louis XVIII was in power.",
        qcm: ["1800", "1818", "1830", "1850"],
        bonne_reponse: "1818"
      },
      {
        id: 102,
        question: "Which king of France is mentioned on the column?",
        reponses_acceptables: ["Louis XVIII", "Louis 18"],
        indice:
          "He reigned after Napoleon and shared his name with several other famous kings.",
        qcm: ["Louis XIV", "Louis XV", "Louis XVIII", "Louis XVI"],
        bonne_reponse: "Louis XVIII"
      }
    ]
  },
  {
    id: 2,
    lieu: "Peynet Museum",
    latitude: 43.58105,
    longitude: 7.12591,
    photo: "/images/villas/2.jpg",
    infoShort: "Place Nationale, 06600 Antibes",
    infoLong:
      "The Peynet Museum houses a unique collection dedicated to illustrator Raymond Peynet, famed for his 'Lovers', universal symbols of romance. You'll find drawings, lithographs, porcelain pieces, and rare objects.",
    infoPlus:
      "Two museums in Japan—Karuizawa and Sakuto-cho—are entirely dedicated to Peynet. A statue of his 'Lovers' also stands in Hiroshima.",
    defi: "Make a quick sketch inspired by one of the works on display.",
    questions: [
      {
        id: 201,
        question: "Which iconic Peynet artwork is associated with Valentine’s Day?",
        reponses_acceptables: [
          "Peynet's Lovers",
          "the lovers",
          "les amoureux de peynet"
        ],
        indice: "A legendary couple symbolizing eternal romance.",
        qcm: [
          "Peynet's Brides",
          "Peynet's Lovers",
          "Peynet's Smiles",
          "Peynet's Engagements"
        ],
        bonne_reponse: "Peynet's Lovers"
      },
      {
        id: 202,
        question: "In which country can you find two museums dedicated to Peynet?",
        reponses_acceptables: ["Japan", "the japan", "japon", "le japon"],
        indice: "An Asian country known for its manga.",
        qcm: ["China", "South Korea", "Japan", "Thailand"],
        bonne_reponse: "Japan"
      }
    ]
  },
  {
    id: 3,
    lieu: "Dor de la Souchère Path",
    latitude: 43.58095,
    longitude: 7.12842,
    photo: "/images/villas/3.jpg",
    infoShort:
      "Access via Place Mariejol, leading to the Picasso Museum",
    infoLong:
      "This picturesque slope honors Romuald Dor de la Souchère, a French historian and archaeologist who initiated the transformation of the Grimaldi Castle into a museum, even before Picasso's arrival.",
    infoPlus:
      "He was the first curator of the museum founded in 1928. His vision paved the way for the site to host Picasso’s works a few years later.",
    defi:
      "Find the best viewpoint from the slope, with the museum on your right. Take a photo of a boat passing by.",
    questions: [
      {
        id: 301,
        question: "Who was Romuald Dor de la Souchère?",
        reponses_acceptables: [
          "Archaeologist",
          "Curator",
          "founder",
          "romuald dor de la souchère"
        ],
        indice: "He played a key role in preserving Antibes’ heritage.",
        qcm: ["Archaeologist", "Curator", "Founder", "Romuald Dor de la Souchère"],
        bonne_reponse: "Romuald Dor de la Souchère"
      }
    ]
  },
  {
    id: 4,
    lieu: "Picasso Museum",
    latitude: 43.58088,
    longitude: 7.12817,
    photo: "/images/villas/4.jpg",
    infoShort: "Place Mariejol, 06600 Antibes",
    infoLong:
      "The Picasso Museum of Antibes occupies the Grimaldi Castle, a medieval fortress turned modern art museum. In 1946, Picasso set up a temporary studio here and left several major works.",
    infoPlus:
      "Here, Picasso created murals and powerful pieces like 'La Joie de Vivre'. He donated these to the city, marking the beginning of the museum’s collection.",
    defi:
      "Take a creative selfie in front of the museum, mimicking a pose or artwork inspired by Picasso’s universe.",
    questions: [
      {
        id: 401,
        question: "Which former castle now houses the Picasso Museum?",
        reponses_acceptables: [
          "Grimaldi Castle",
          "château grimaldi",
          "le château grimaldi"
        ],
        indice: "Its name recalls a famous princely family.",
        qcm: [
          "Grimaldi Castle",
          "Turbie Castle",
          "Antibes Castle",
          "Fortified Castle"
        ],
        bonne_reponse: "Grimaldi Castle"
      },
      {
        id: 402,
        question:
          "What special connection did Picasso have with Antibes before his 1946 stay?",
        reponses_acceptables: [
          "Picasso could see Antibes from Malaga",
          "depuis malaga",
          "malaga"
        ],
        indice:
          "Antibes was visible from his hometown, across the Mediterranean.",
        qcm: [
          "Picasso could see Antibes from Malaga",
          "Picasso loved Antibes",
          "Picasso lived in Antibes",
          "Picasso was born in Antibes"
        ],
        bonne_reponse: "Picasso could see Antibes from Malaga"
      }
    ]
  },
  {
    id: 5,
    lieu: "Nicolas Lavarenne's Challenge (Ramparts)",
    latitude: 43.58137,
    longitude: 7.1289,
    photo: "/images/villas/5.jpg",
    infoShort:
      "Sea-facing ramparts, near the Porte Marine",
    infoLong:
      "Installed on the Antibes ramparts, this dizzying sculpture by Nicolas Lavarenne embodies the quest for elevation, risk-taking, and movement. The artist often explores lightness and verticality.",
    infoPlus:
      "The figure seems to defy gravity, suspended in space as if between two decisions. A powerful work to admire from multiple angles.",
    defi:
      "Find the perfect angle to photograph the sculpture with the sea in the background. Bonus if you capture its shadow!",
    questions: [
      {
        id: 501,
        question:
          "How does the sculpture's posture reflect the themes of courage and self-transcendence?",
        reponses_acceptables: [
          "Precarious balance",
          "dynamic posture",
          "balance",
          "tension"
        ],
        indice:
          "Look at the aerial stance: suspended, about to tip, yet in motion.",
        qcm: [
          "Precarious balance",
          "Seated in contemplation",
          "Static",
          "Tilted"
        ],
        bonne_reponse: "Precarious balance"
      }
    ]
  },
  {
    id: 6,
    lieu: "Blind Bench by David David (Port Vauban)",
    latitude: 43.583706,
    longitude: 7.1275453,
    photo: "/images/villas/6.jpg",
    infoShort:
      "Port Vauban, promenade in front of the Harbor Master’s Office",
    infoLong:
      "The artwork 'Blind Bench' by David David depicts a man sitting on a bench, blindfolded, absorbed by an invisible smartphone. It critiques the loss of connection to the real world and modern isolation.",
    infoPlus:
      "David David is a committed artist from Nice. His sculptures often use powerful symbols (blindfolds, frozen poses) to denounce modern alienation.",
    defi:
      "Take a photo of the statue while mimicking its pose… but without a screen. Just you, eyes closed, and the bench.",
    questions: [
      {
        id: 601,
        question:
          "What modern phenomenon is criticized by the 'Blind Bench' sculpture?",
        reponses_acceptables: [
          "Smartphone addiction",
          "digital isolation",
          "addiction"
        ],
        indice: "Look at what the person on the bench is doing.",
        qcm: [
          "Smartphone addiction",
          "Digital isolation",
          "Modernity",
          "Technology"
        ],
        bonne_reponse: "Smartphone addiction"
      }
    ]
  },
  {
    id: 7,
    lieu: "Sea Column (Ramparts)",
    latitude: 43.5806698,
    longitude: 7.1285784,
    photo: "/images/villas/7.jpg",
    infoShort:
      "Eastern ramparts below the Picasso Museum",
    infoLong:
      "Installed at the eastern entrance to the ramparts, the Sea Column is a contemporary work by Bernard Pagès. Its raw aesthetic contrasts with the ancient walls of Antibes, sparking debate.",
    infoPlus:
      "This work is part of a public contemporary art integration program. Pagès plays with volume, industrial materials, and vertical lines.",
    defi:
      "Take a photo of the Sea Column with the ramparts or old town in the background. Add one word to express your impression (e.g., shock, modernity, contrast...).",
    questions: [
      {
        id: 701,
        question:
          "Compare the Sea Column's style to the surrounding architecture. What features create the controversy's contrast?",
        reponses_acceptables: [
          "Modern materials",
          "bright colors",
          "contrast with historical stone"
        ],
        indice:
          "Some love its style, others think it clashes with the historic ramparts.",
        qcm: [
          "Modern materials",
          "Bright colors",
          "Contrast with historical stone",
          "Contemporary architecture"
        ],
        bonne_reponse: "Contrast with historical stone"
      },
      {
        id: 702,
        question: "Who is the artist behind the Sea Column?",
        reponses_acceptables: ["Bernard Pagès"],
        indice: "The artist's name.",
        qcm: [
          "Bernard Pagès",
          "Jean Dupont",
          "Pierre Martin",
          "Paul Durand"
        ],
        bonne_reponse: "Bernard Pagès"
      }
    ]
  },
  {
    id: 8,
    lieu: "Gravette Beach",
    latitude: 43.58244,
    longitude: 7.12861,
    photo: "/images/villas/8.jpg",
    infoShort:
      "Below the ramparts, access via the Porte Marine",
    infoLong:
      "Nestled between the ramparts and Port Vauban, Gravette Beach is a sheltered cove popular with locals. Its curved shape and calm waters make it an ideal spot to relax.",
    infoPlus:
      "Its name comes from the gravel that makes up the beach, unlike sandy ones. From above, you can spot Fort Carré. A perfect place to watch boats.",
    defi:
      "Pick up at least 3 pieces of trash to help preserve the beach. Well done for your contribution!",
    questions: [
      {
        id: 801,
        question:
          "Standing on the ramparts above Gravette Beach, what monument to the east dominates the view?",
        reponses_acceptables: ["Fort Carré"],
        indice: "This monument overlooks the beach.",
        qcm: ["Fort Carré", "Grimaldi Castle", "Fort of Antibes", "Antibes Ramparts"],
        bonne_reponse: "Fort Carré"
      },
      {
        id: 802,
        question:
          "What geological feature gives Gravette Beach its name?",
        reponses_acceptables: ["Gravel", "Pebbles"],
        indice: "The small pebbles give the beach its name.",
        qcm: ["Gravel", "Pebbles", "Small pebbles", "Rocks"],
        bonne_reponse: "Gravel"
      }
    ]
  },
  {
    id: 9,
    lieu: "Nomade by Jaume Plensa (Port Vauban)",
    latitude: 43.584952,
    longitude: 7.130666,
    photo: "/images/villas/9.jpg",
    infoShort:
      "Mole of Port Vauban, eastern tip, facing the sea",
    infoLong:
      "Located at the port entrance, 'Nomade' is a monumental sculpture made of Latin letters. Created by Jaume Plensa, it invites contemplation and cultural dialogue.",  
    infoPlus:
      "A landmark in Antibes since 2010, this hollow human figure symbolizes the search for meaning, connection, and horizon.",
    defi:
      "Take a creative photo framing the sea through the Nomade’s letters. Bonus if your shadow appears inside the sculpture!",
    questions: [
      {
        id: 901,
        question:
          "What alphabet is used to form the 'Nomade' sculpture?",
        reponses_acceptables: ["Latin alphabet", "Latin letters"],
        indice: "It’s the most widely used alphabet in the world.",
        qcm: ["Latin alphabet", "Cyrillic alphabet", "Arabic alphabet", "Greek alphabet"],
        bonne_reponse: "Latin alphabet"
      },
      {
        id: 902,
        question:
          "What message does artist Jaume Plensa aim to convey with this work?",
        reponses_acceptables: ["Openness to the world", "diversity", "exchange"],
        indice: "This hollow figure facing the sea evokes connections between peoples.",
        qcm: [
          "Openness to the world",
          "Isolation",
          "Patriotism",
          "Cultural closure"
        ],
        bonne_reponse: "Openness to the world"
      }
    ]
  },
  {
    id: 10,
    lieu: "Fort Carré",
    latitude: 43.58996,
    longitude: 7.12754,
    photo: "/images/villas/10.jpg",
    infoShort: "View from the Nomade, at the end of Port Vauban",
    infoLong:
      "Built in the 16th century, Fort Carré is a star-shaped military bastion designed to guard the kingdom's borders. It now overlooks the port and is visible from afar.",
    infoPlus:
      "Although it can be visited, Fort Carré is also admired from a distance: its geometric silhouette is one of the most iconic visual markers of Antibes' maritime entrance.",
    defi:
      "From the Nomade, take a photo of Fort Carré in the distance. Add a filter or setting to make it look like a postcard.",
    questions: [
      {
        id: 1001,
        question:
          "What was one of the main historical functions of Fort Carré?",        reponses_acceptables: ["Military defense", "Protection", "Fortress"],
        indice: "A historical role of the fort.",
        qcm: ["Military defense", "Protection from invasions", "Observatory", "Military reserve"],
        bonne_reponse: "Military defense"
      }
    ]
  },
  {
    id: 11,
    lieu: "Antibes Market Hall",
    latitude: 43.58122,
    longitude: 7.12763,
    photo: "/images/villas/11.jpg",
    infoShort: "Cours Masséna, historic center of Antibes",
    infoLong:
      "The Antibes Market Hall is the city's gourmet heart. This covered market hosts local producers, cheesemongers, butchers, and farmers, offering typical Provençal products.",
    infoPlus:
      "Don't miss homemade tapenade, black Nyons olives, or Niçoise stuffed vegetables. In summer, the market becomes a lively and tasty gathering place.",
    defi:
      "Spot a colorful stall that tempts you and take a photo. You can also jot down the name of a product you've never seen before.",
    questions: [
      {
        id: 1101,
        question:
          "What iconic local product can you taste here?",
        reponses_acceptables: [
          "Tapenade", "Cheese", "pissaladière", "socca", "olives", "rosé"
        ],
        indice:
          "A must-have for Provençal apéritifs, often olive-based.",
        qcm: ["Tapenade", "Flammekueche", "Raclette", "Sauerkraut"],
        bonne_reponse: "Tapenade"
      }
    ]
  },
  {
    id: 12,
    lieu: "Absinthe Bar",
    latitude: 43.58082,
    longitude: 7.12743,
    photo: "/images/villas/12.jpg",
    infoShort: "25 Cours Masséna, 06600 Antibes",
    infoLong:
      "Antibes' Absinthe Bar immerses you in a Belle Époque atmosphere. Located in a vaulted 9th-century cellar, this unusual place offers a rediscovery of absinthe, banned in France until 2011.",
    infoPlus:
      "Antique objects, period music, and costumes let you step back in time. Absinthe is served following the traditional ritual, with water fountain, slotted spoon, and sugar cube.",
    defi:
      "Go down into the bar (if it's open) and take a fun photo with the retro accessories: bowler hat, absinthe fountain, or vintage mirror.",
    questions: [
      {
        id: 1201,
        question:
          "What unique historical setting houses Antibes' Absinthe Bar?",
        reponses_acceptables: ["Vaulted cellar", "9th century", "Romanesque masonry"],
        indice: "A hidden underground place, perfect for enjoying this historic drink.",
        qcm: ["Vaulted cellar", "9th century", "Romanesque masonry", "Gothic architecture"],
        bonne_reponse: "Vaulted cellar"
      },
      {
        id: 1202,
        question:
          "What was one of absinthe’s presumed medicinal uses in the 19th century?",
        reponses_acceptables: ["Antibacterial properties", "Digestive aid", "Stimulant"],
        indice: "A supposed medical benefit of absinthe.",
        qcm: ["Antibacterial properties", "Digestive aid", "Stimulant", "Antiseptic"],
        bonne_reponse: "Antibacterial properties"
      }
    ]
  },
  {
    id: 13,
    lieu: "Poets’ Garden (Ramparts)",
    latitude: 43.578607,
    longitude: 7.126694,
    photo: "/images/villas/13.jpg",
    infoShort: "Southern ramparts, east of the Porte Marine",
    infoLong:
      "This small garden overlooks the sea and offers a quiet tribute to French literature. Several writers’ busts are scattered throughout, in a setting ideal for reflection.",
    infoPlus:
      "Victor Hugo's bust shows the admiration for the author, whose work often celebrated nature, people, and Mediterranean shores.",
    defi:
      "Find Victor Hugo’s bust and read aloud a passage from one of his poems or novels. Or recite it silently for yourself.",
    questions: [
      {
        id: 1301,
        question:
          "Which famous French writer has a bust in this garden?",
        reponses_acceptables: ["Victor Hugo", "Hugo"],
        indice:
          "His name is associated with Les Misérables and The Hunchback of Notre-Dame.",
        qcm: ["Victor Hugo", "Molière", "Voltaire", "Balzac"],
        bonne_reponse: "Victor Hugo"
      }
    ]
  }
];