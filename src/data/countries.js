// src/data/countries.js
// Each country: id, name, flag, summary (short text for homepage card),
// history (detailed text for country page), cities (5 cities: capital + 4 major cities)

const countries = [
  {
    id: "iran",
    continent: "Asia",
    name: "Iran",
    flag: "/images/iran-flag.jpg",
    summary:
      "A land of thousands of years of civilization, unmatched architecture, and diverse nature from desert to forest.",
    history:
      "Iran is one of the world's oldest civilizations, with history dating back to the Achaemenid Empire in the 6th century BC. Persepolis, the ceremonial capital of the Achaemenids, remains one of the most important ancient heritage sites in the world today. Throughout history, Iran hosted great civilizations such as the Sassanids and played a major role in the development of science, art, and architecture in the region.",
    cities: [
      {
        name: "Tehran",
        role: "Capital",
        description:
          "The populous capital of Iran, combining modern towers, large museums, and the Alborz mountains in the city backdrop.",
        image: "PLACEHOLDER_CITY_TEHRAN.jpg",
      },
      {
        name: "Isfahan",
        role: "Major City",
        description:
          "A city with stunning Safavid-era architecture, Naqsh-e Jahan Square, and historic bridges over the Zayandeh River.",
        image: "PLACEHOLDER_CITY_ISFAHAN.jpg",
      },
      {
        name: "Shiraz",
        role: "Major City",
        description:
          "The city of poetry and Persian gardens, home to Hafez and Saadi, near the ruins of Persepolis.",
        image: "PLACEHOLDER_CITY_SHIRAZ.jpg",
      },
      {
        name: "Yazd",
        role: "Major City",
        description:
          "A desert city with unique mudbrick architecture, wind towers, and buildings adapted to a hot, dry climate.",
        image: "PLACEHOLDER_CITY_YAZD.jpg",
      },
      {
        name: "Tabriz",
        role: "Major City",
        description:
          "One of Iran's oldest cities, featuring a historic covered bazaar and centuries of trading importance.",
        image: "PLACEHOLDER_CITY_TABRIZ.jpg",
      },
    ],
  },
  {
    id: "turkey",
    continent: "Asia",
    name: "Turkey",
    flag: "/images/turkey-flag.jpg",
    summary:
      "A bridge between Europe and Asia with Mediterranean coastlines, historic cities, and mountainous nature.",
    history:
      "Turkey sits at the crossroads of Eastern and Western civilizations, inheriting the legacy of empires including the Eastern Roman and Ottoman Empires. Istanbul (formerly Byzantium/Constantinople) served as the capital of two great empires for centuries. The Republic of Turkey was founded in 1923 under Atatürk, with Ankara chosen as the new capital.",
    cities: [
      {
        name: "Ankara",
        role: "Capital",
        description:
          "Turkey's administrative and political capital, featuring modern architecture and important historical museums.",
        image: "PLACEHOLDER_CITY_ANKARA.jpg",
      },
      {
        name: "Istanbul",
        role: "Major City",
        description:
          "The city that connects two continents, with the Bosphorus strait and an impressive historic fabric.",
        image: "PLACEHOLDER_CITY_ISTANBUL.jpg",
      },
      {
        name: "Izmir",
        role: "Major City",
        description:
          "An important Aegean coastal port city with a Mediterranean climate and beautiful waterfront.",
        image: "PLACEHOLDER_CITY_IZMIR.jpg",
      },
      {
        name: "Antalya",
        role: "Major City",
        description:
          "Turkey's coastal tourism hub, with sandy beaches, turquoise waters, and beachfront resorts.",
        image: "PLACEHOLDER_CITY_ANTALYA.jpg",
      },
      {
        name: "Cappadocia",
        role: "Major City",
        description:
          "A region with unusual volcanic rock formations, rocky valleys, and hot air balloon flights.",
        image: "PLACEHOLDER_CITY_CAPPADOCIA.jpg",
      },
    ],
  },
  {
    id: "uae",
    continent: "Asia",
    name: "UAE",
    flag: "/images/uae-flag.jpg",
    summary:
      "A modern country on the Persian Gulf with skyscrapers, artificial islands, and an oil-and-tourism economy.",
    history:
      "The United Arab Emirates was formed in 1971 from the union of seven emirates. Before the discovery of oil, the region's economy was based on pearl diving and maritime trade. Over recent decades, the UAE has become one of the world's key hubs for trade, aviation, and tourism.",
    cities: [
      {
        name: "Abu Dhabi",
        role: "Capital",
        description:
          "The UAE's capital, featuring modern architecture, artificial islands, and major international museums.",
        image: "PLACEHOLDER_CITY_ABUDHABI.jpg",
      },
      {
        name: "Dubai",
        role: "Major City",
        description:
          "A city with the world's tallest tower, massive shopping malls, and a stunning skyline.",
        image: "PLACEHOLDER_CITY_DUBAI.jpg",
      },
      {
        name: "Sharjah",
        role: "Major City",
        description:
          "The UAE's cultural hub, with museums and an urban fabric distinct from other emirates.",
        image: "PLACEHOLDER_CITY_SHARJAH.jpg",
      },
      {
        name: "Al Ain",
        role: "Major City",
        description:
          "A green city in the heart of the desert, known for its oases and historic gardens.",
        image: "PLACEHOLDER_CITY_ALAIN.jpg",
      },
      {
        name: "Ras Al Khaimah",
        role: "Major City",
        description:
          "An emirate with the Hajar Mountains, calm beaches, and adventure destinations like the Jebel Jais cable car.",
        image: "PLACEHOLDER_CITY_RAK.jpg",
      },
    ],
  },
  {
    id: "usa",
    continent: "North America",
    name: "USA",
    flag: "/images/usa-flag.jpg",
    summary:
      "A vast country with immense geographic diversity, from New York's skyscrapers to California's beaches.",
    history:
      "The United States declared independence in 1776, separating from Britain after the American Revolution. Over the past two centuries, the country has become one of the world's largest economic, industrial, and cultural powers, home to one of the most diverse immigrant populations on Earth.",
    cities: [
      {
        name: "Washington, D.C.",
        role: "Capital",
        description:
          "America's political capital, with iconic government buildings and major national museums.",
        image: "PLACEHOLDER_CITY_WASHINGTON.jpg",
      },
      {
        name: "New York",
        role: "Major City",
        description:
          "America's largest city, the world's financial and cultural hub, with famous skyscrapers.",
        image: "PLACEHOLDER_CITY_NEWYORK.jpg",
      },
      {
        name: "Los Angeles",
        role: "Major City",
        description:
          "The center of the global entertainment industry in California, with sunny weather and long beaches.",
        image: "PLACEHOLDER_CITY_LA.jpg",
      },
      {
        name: "Chicago",
        role: "Major City",
        description:
          "A city known for modern architecture, historic skyscrapers, and its location on Lake Michigan.",
        image: "PLACEHOLDER_CITY_CHICAGO.jpg",
      },
      {
        name: "San Francisco",
        role: "Major City",
        description:
          "A hilly city with the Golden Gate Bridge, a beautiful bay, and proximity to Silicon Valley.",
        image: "PLACEHOLDER_CITY_SF.jpg",
      },
    ],
  },
  {
    id: "germany",
    continent: "Europe",
    name: "Germany",
    flag: "/images/germany-flag.jpg",
    summary:
      "Europe's industrial powerhouse, with fairy-tale castles, black forests, and historic cities.",
    history:
      "Modern Germany was unified in 1871 under Prussian leadership. The country experienced two world wars in the 20th century, followed by division into East and West Germany, which reunified in 1990. Today, Germany is one of the world's largest economies and a major cultural and industrial center in Europe.",
    cities: [
      {
        name: "Berlin",
        role: "Capital",
        description:
          "Germany's dynamic capital, with a turbulent history, the former Berlin Wall, and a vibrant arts scene.",
        image: "PLACEHOLDER_CITY_BERLIN.jpg",
      },
      {
        name: "Munich",
        role: "Major City",
        description:
          "The capital of Bavaria, with classical architecture, large parks, and proximity to the Alps.",
        image: "PLACEHOLDER_CITY_MUNICH.jpg",
      },
      {
        name: "Hamburg",
        role: "Major City",
        description:
          "Germany's largest port city, with water canals and historic warehouses along the waterfront.",
        image: "PLACEHOLDER_CITY_HAMBURG.jpg",
      },
      {
        name: "Cologne",
        role: "Major City",
        description:
          "A city with a massive Gothic cathedral, one of Germany's oldest cities.",
        image: "PLACEHOLDER_CITY_COLOGNE.jpg",
      },
      {
        name: "Frankfurt",
        role: "Major City",
        description:
          "Germany and Europe's financial hub, with a skyline of tall towers and a major international airport.",
        image: "PLACEHOLDER_CITY_FRANKFURT.jpg",
      },
    ],
  },
  {
    id: "france",
    continent: "Europe",
    name: "France",
    flag: "/images/france-flag.jpg",
    summary:
      "Europe's home of art and fashion, with the Eiffel Tower, grand palaces, and romantic villages.",
    history:
      "France is one of Europe's oldest nations, with history dating back to Gaul and the Roman Empire. The French Revolution of 1789 transformed the political order of Europe, introducing concepts of liberty, equality, and fraternity. Today, France remains a major global center of culture, art, and diplomacy.",
    cities: [
      {
        name: "Paris",
        role: "Capital",
        description:
          "The capital of love and art, with the Eiffel Tower, the Louvre Museum, and the historic Champs-Élysées.",
        image: "PLACEHOLDER_CITY_PARIS.jpg",
      },
      {
        name: "Nice",
        role: "Major City",
        description:
          "A coastal city on the French Riviera with a Mediterranean climate and beautiful beach.",
        image: "PLACEHOLDER_CITY_NICE.jpg",
      },
      {
        name: "Lyon",
        role: "Major City",
        description:
          "France's gastronomic capital, with a historic Renaissance district listed by UNESCO.",
        image: "PLACEHOLDER_CITY_LYON.jpg",
      },
      {
        name: "Marseille",
        role: "Major City",
        description:
          "France's oldest city, a major Mediterranean port with a multicultural heritage.",
        image: "PLACEHOLDER_CITY_MARSEILLE.jpg",
      },
      {
        name: "Strasbourg",
        role: "Major City",
        description:
          "A city on the German border with half-timbered architecture and the picturesque canals of Alsace.",
        image: "PLACEHOLDER_CITY_STRASBOURG.jpg",
      },
    ],
  },
  {
    id: "switzerland",
    continent: "Europe",
    name: "Switzerland",
    flag: "/images/switzerland-flag.jpg",
    summary:
      "The land of the Alps, with pristine lakes, mountain trains, and well-organized cities.",
    history:
      "Switzerland was founded through a confederation pact in 1291 by three cantons, forming the country's early core. Switzerland is known for its long-standing policy of neutrality throughout Europe's wars and today is one of the most stable and wealthy countries in the world.",
    cities: [
      {
        name: "Bern",
        role: "Capital",
        description:
          "Switzerland's historic capital, with a medieval old town listed by UNESCO.",
        image: "PLACEHOLDER_CITY_BERN.jpg",
      },
      {
        name: "Zurich",
        role: "Major City",
        description:
          "Switzerland's largest city, the country's financial center, with a beautiful lake at its heart.",
        image: "PLACEHOLDER_CITY_ZURICH.jpg",
      },
      {
        name: "Geneva",
        role: "Major City",
        description:
          "Home to international organizations, with views of Lake Geneva and the city's iconic fountain.",
        image: "PLACEHOLDER_CITY_GENEVA.jpg",
      },
      {
        name: "Lucerne",
        role: "Major City",
        description:
          "A small, romantic mountainside city with a historic wooden bridge over the river.",
        image: "PLACEHOLDER_CITY_LUCERNE.jpg",
      },
      {
        name: "Interlaken",
        role: "Major City",
        description:
          "The gateway to the Swiss Alps, popular for nature tourism and mountain sports.",
        image: "PLACEHOLDER_CITY_INTERLAKEN.jpg",
      },
    ],
  },
  {
    id: "norway",
    continent: "Europe",
    name: "Norway",
    flag: "/images/norway-flag.jpg",
    summary:
      "The land of fjords, northern lights, and raw Scandinavian nature.",
    history:
      "Norway was a key maritime center of Europe during the Viking Age (8th to 11th centuries). After centuries of union with Denmark and then Sweden, the country gained full independence in 1905. The discovery of North Sea oil in the 1960s turned Norway into one of the wealthiest nations in the world.",
    cities: [
      {
        name: "Oslo",
        role: "Capital",
        description:
          "Norway's capital, blending forested nature with modern architecture along the Oslo Fjord.",
        image: "PLACEHOLDER_CITY_OSLO.jpg",
      },
      {
        name: "Bergen",
        role: "Major City",
        description:
          "A historic city with colorful wooden houses, the gateway to Norway's famous fjords.",
        image: "PLACEHOLDER_CITY_BERGEN.jpg",
      },
      {
        name: "Tromsø",
        role: "Major City",
        description:
          "A city in the far north, a popular destination for viewing the northern lights.",
        image: "PLACEHOLDER_CITY_TROMSO.jpg",
      },
      {
        name: "Stavanger",
        role: "Major City",
        description:
          "A coastal city famous for Preikestolen (Pulpit Rock) and its old wooden town.",
        image: "PLACEHOLDER_CITY_STAVANGER.jpg",
      },
      {
        name: "Ålesund",
        role: "Major City",
        description:
          "A city with unique Art Nouveau architecture and stunning fjord views.",
        image: "PLACEHOLDER_CITY_ALESUND.jpg",
      },
    ],
  },
  {
    id: "senegal",
    continent: "Africa",
    name: "Senegal",
    flag: "/images/senegal-flag.jpg",
    summary:
      "The gateway to West Africa, with Atlantic coastlines, live music, and vibrant culture.",
    history:
      "Senegal has long been a crossroads of trans-Saharan trade routes and, from the 15th century, came under the influence of European colonial powers, including France. The country gained independence from France in 1960. Gorée Island near Dakar is a key symbol of Africa's slave trade history and today serves as a world memorial site.",
    cities: [
      {
        name: "Dakar",
        role: "Capital",
        description:
          "Senegal's vibrant capital, the westernmost major city in Africa, on the Atlantic coast.",
        image: "PLACEHOLDER_CITY_DAKAR.jpg",
      },
      {
        name: "Saint-Louis",
        role: "Major City",
        description:
          "A historic colonial city listed by UNESCO, with colorful French architecture.",
        image: "PLACEHOLDER_CITY_SAINTLOUIS.jpg",
      },
      {
        name: "Saly",
        role: "Major City",
        description:
          "A coastal city popular with tourists, featuring long beaches and resort hotels.",
        image: "PLACEHOLDER_CITY_SALY.jpg",
      },
      {
        name: "Thiès",
        role: "Major City",
        description:
          "Senegal's third-largest city, an important industrial and commercial center.",
        image: "PLACEHOLDER_CITY_THIES.jpg",
      },
      {
        name: "Ziguinchor",
        role: "Major City",
        description:
          "A green city in southern Senegal on the Casamance River, with tropical nature.",
        image: "PLACEHOLDER_CITY_ZIGUINCHOR.jpg",
      },
    ],
  },
  {
    id: "netherlands",
    continent: "Europe",
    name: "Netherlands",
    flag: "/images/netherlands-flag.jpg",
    summary:
      "The land of windmills, canals, and colorful tulip fields.",
    history:
      "The Netherlands entered its Golden Age in the 17th century, becoming one of the world's greatest maritime and trading powers. The Dutch East India Company was one of the first multinational corporations in history. Today, the Netherlands is known for its water management systems, widespread cycling culture, and historic cities.",
    cities: [
      {
        name: "Amsterdam",
        role: "Capital",
        description:
          "The capital known for its historic canals, narrow houses, and major art museums.",
        image: "PLACEHOLDER_CITY_AMSTERDAM.jpg",
      },
      {
        name: "Rotterdam",
        role: "Major City",
        description:
          "A city with bold, modern architecture, home to one of Europe's largest ports.",
        image: "PLACEHOLDER_CITY_ROTTERDAM.jpg",
      },
      {
        name: "The Hague",
        role: "Major City",
        description:
          "Seat of the Dutch government and the International Court of Justice, a formal coastal city.",
        image: "PLACEHOLDER_CITY_THEHAGUE.jpg",
      },
      {
        name: "Utrecht",
        role: "Major City",
        description:
          "A university city with unique two-level canals and a historic Dom Tower.",
        image: "PLACEHOLDER_CITY_UTRECHT.jpg",
      },
      {
        name: "Delft",
        role: "Major City",
        description:
          "A small, beautiful city famous for Delft Blue pottery and its untouched historic fabric.",
        image: "PLACEHOLDER_CITY_DELFT.jpg",
      },
    ],
  },
];

export default countries;
