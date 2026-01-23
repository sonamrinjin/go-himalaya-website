import trekEverest from "@/assets/everest-basecamp.jpg";
import trekAnnapurna from "@/assets/trek-annapurna.jpg";
import trekLangtang from "@/assets/trek-langtang.jpg";
import peakClimbing from "@/assets/mera-peak.jpg";
import trekManaslu from "@/assets/trek-manaslu.jpg";
import islandPeak from "@/assets/island-peak.jpg";
import uppermustang from "@/assets/uppermustang.jpg";
import ghorepanipoonhill from "@/assets/ghorepanipoonhill.jpg";
import yalaPeak from "@/assets/yala-peak.jpg";
import mardiHimal from "@/assets/mardi-himal-trek.jpg";

export type TrekCategory = "popular" | "remote" | "peak-climbing";
export type Difficulty = "Easy" | "Moderate" | "Challenging" | "Strenuous" | "Extreme";
export type Region = "Everest" | "Annapurna" | "Langtang" | "Manaslu" | "Mustang" | "Dolpo" | "Kanchenjunga" | "Makalu";

export interface Trek {
  id: string;
  name: string;
  slug: string;
  category: TrekCategory;
  region: Region;
  duration: number;
  maxAltitude: number;
  difficulty: Difficulty;
  price: number;
  shortDescription: string;
  description: string;
  image: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    altitude?: number;
  }[];
  includes: string[];
  excludes: string[];
  bestSeason: string[];
  groupSize: string;
  packingList: string[];
}

export const treks: Trek[] = [
  {
    id: "1",
    name: "Everest Base Camp Trek",
    slug: "everest-base-camp-trek",
    category: "popular",
    region: "Everest",
    duration: 14,
    maxAltitude: 5545,
    difficulty: "Challenging",
    price: 1450,
    shortDescription: "Stand at the foot of the world's highest peak on this iconic Himalayan adventure.",
    description: "The Everest Base Camp Trek is the ultimate adventure for those seeking to experience the majesty of the world's highest mountain. This iconic journey takes you through the heart of the Khumbu region, past ancient Buddhist monasteries, traditional Sherpa villages, and breathtaking mountain vistas.",
    image: trekEverest,
    highlights: [
      "Stand at Everest Base Camp (5,364m)",
      "Sunrise from Kala Patthar (5,545m)",
      "Visit Tengboche Monastery",
      "Experience Sherpa culture and hospitality",
      "Fly into Lukla - world's most exciting airport"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Welcome at airport, transfer to hotel, trek briefing", altitude: 1400 },
      { day: 2, title: "Fly to Lukla, Trek to Phakding", description: "Scenic flight to Lukla, begin trek through pine forests", altitude: 2652 },
      { day: 3, title: "Phakding to Namche Bazaar", description: "Cross suspension bridges, first views of Everest", altitude: 3440 },
      { day: 4, title: "Acclimatization in Namche", description: "Rest day, explore Namche, hike to Everest View Hotel", altitude: 3440 },
      { day: 5, title: "Namche to Tengboche", description: "Trek to famous monastery with Everest views", altitude: 3860 },
      { day: 6, title: "Tengboche to Dingboche", description: "Enter high alpine zone through rhododendron forests", altitude: 4410 },
      { day: 7, title: "Acclimatization in Dingboche", description: "Rest day, optional hike to Nangkartshang Peak", altitude: 4410 },
      { day: 8, title: "Dingboche to Lobuche", description: "Trek along Khumbu Glacier moraine", altitude: 4940 },
      { day: 9, title: "Lobuche to Gorak Shep to EBC", description: "Reach Everest Base Camp, explore the glacier", altitude: 5364 },
      { day: 10, title: "Gorak Shep to Kala Patthar to Pheriche", description: "Sunrise at Kala Patthar, descend to Pheriche", altitude: 4240 },
      { day: 11, title: "Pheriche to Namche Bazaar", description: "Long descent through familiar terrain", altitude: 3440 },
      { day: 12, title: "Namche to Lukla", description: "Final day of trekking, celebration dinner", altitude: 2860 },
      { day: 13, title: "Fly to Kathmandu", description: "Morning flight, free time in Kathmandu", altitude: 1400 },
      { day: 14, title: "Departure", description: "Transfer to airport, farewell", altitude: 1400 }
    ],
    includes: [
      "Airport transfers",
      "3 nights hotel in Kathmandu with breakfast",
      "Domestic flights: Kathmandu-Lukla-Kathmandu",
      "All meals during trek",
      "Experienced English-speaking guide",
      "Porter service (1 porter per 2 trekkers)",
      "All necessary permits (TIMS, Sagarmatha National Park)",
      "Trekking lodge accommodation",
      "First aid kit and oximeter"
    ],
    excludes: [
      "International flights",
      "Travel insurance (mandatory)",
      "Personal trekking gear",
      "Tips for guides and porters",
      "Extra meals in Kathmandu",
      "Personal expenses",
      "Emergency evacuation costs"
    ],
    bestSeason: ["March", "April", "May", "September", "October", "November"],
    groupSize: "2-12 people",
    packingList: [
      "Warm down jacket",
      "Waterproof hiking boots",
      "Trekking poles",
      "Sleeping bag (-15°C rated)",
      "Headlamp",
      "Sunglasses and sunscreen",
      "Water bottles and purification",
      "First aid kit",
      "Camera"
    ]
  },
  {
    id: "2",
    name: "Annapurna Base Camp Trek",
    slug: "annapurna-base-camp-trek",
    category: "popular",
    region: "Annapurna",
    duration: 11,
    maxAltitude: 4130,
    difficulty: "Moderate",
    price: 950,
    shortDescription: "Journey into the heart of the Annapurna Sanctuary surrounded by towering peaks.",
    description: "The Annapurna Base Camp Trek takes you into the stunning Annapurna Sanctuary, a natural amphitheater surrounded by some of Nepal's most iconic peaks. This trek offers diverse landscapes from lush rhododendron forests to high alpine terrain.",
    image: trekAnnapurna,
    highlights: [
      "Reach Annapurna Base Camp (4,130m)",
      "360° views of Annapurna massif",
      "Trek through rhododendron forests",
      "Experience Gurung culture",
      "Hot springs at Jhinu Danda"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Airport pickup, hotel check-in, trek briefing", altitude: 1400 },
      { day: 2, title: "Drive to Nayapul, Trek to Tikhedhunga", description: "Scenic drive, begin trek through villages", altitude: 1540 },
      { day: 3, title: "Tikhedhunga to Ghorepani", description: "Climb stone steps, enter rhododendron forest", altitude: 2860 },
      { day: 4, title: "Poon Hill Sunrise, Trek to Tadapani", description: "Early morning hike, spectacular sunrise views", altitude: 2630 },
      { day: 5, title: "Tadapani to Chhomrong", description: "Descend and climb through beautiful terrain", altitude: 2170 },
      { day: 6, title: "Chhomrong to Dovan", description: "Enter the Annapurna Sanctuary", altitude: 2600 },
      { day: 7, title: "Dovan to Annapurna Base Camp", description: "Trek through Machhapuchhre Base Camp to ABC", altitude: 4130 },
      { day: 8, title: "ABC to Bamboo", description: "Sunrise at ABC, long descent", altitude: 2335 },
      { day: 9, title: "Bamboo to Jhinu Danda", description: "Trek and enjoy natural hot springs", altitude: 1780 },
      { day: 10, title: "Jhinu to Nayapul, Drive to Pokhara", description: "Complete trek, transfer to Pokhara", altitude: 884 },
      { day: 11, title: "Fly to Kathmandu, Departure", description: "Morning flight, departure assistance", altitude: 1400 }
    ],
    includes: [
      "Airport transfers",
      "2 nights hotel in Kathmandu",
      "1 night hotel in Pokhara",
      "All ground transportation",
      "All meals during trek",
      "Licensed trekking guide",
      "Porter service",
      "All permits (ACAP, TIMS)",
      "Lodge accommodation on trek"
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal equipment",
      "Tips and gratuities",
      "Personal expenses",
      "Emergency evacuation"
    ],
    bestSeason: ["March", "April", "May", "October", "November", "December"],
    groupSize: "2-14 people",
    packingList: [
      "Layered clothing",
      "Rain jacket",
      "Trekking boots",
      "Trekking poles",
      "Sleeping bag",
      "Sun protection",
      "Water purification",
      "First aid kit"
    ]
  },
  {
    id: "3",
    name: "Langtang Valley Trek",
    slug: "langtang-valley-trek",
    category: "popular",
    region: "Langtang",
    duration: 10,
    maxAltitude: 4984,
    difficulty: "Moderate",
    price: 750,
    shortDescription: "Explore the beautiful Langtang Valley with its rich Tamang culture and stunning peaks.",
    description: "The Langtang Valley Trek offers a perfect blend of natural beauty and cultural immersion. Located close to Kathmandu, this trek takes you through traditional Tamang villages, dense forests, and the stunning Langtang Valley.",
    image: trekLangtang,
    highlights: [
      "Kyanjin Gompa monastery visit",
      "Climb Kyanjin Ri for panoramic views",
      "Rich Tamang Buddhist culture",
      "Beautiful rhododendron forests",
      "Close proximity to Kathmandu"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Airport pickup, briefing", altitude: 1400 },
      { day: 2, title: "Drive to Syabrubesi", description: "Scenic drive through hills", altitude: 1550 },
      { day: 3, title: "Syabrubesi to Lama Hotel", description: "Trek through oak and rhododendron forest", altitude: 2380 },
      { day: 4, title: "Lama Hotel to Langtang Village", description: "Enter the beautiful Langtang Valley", altitude: 3430 },
      { day: 5, title: "Langtang to Kyanjin Gompa", description: "Trek to monastery, explore cheese factory", altitude: 3870 },
      { day: 6, title: "Kyanjin Gompa Exploration", description: "Climb Kyanjin Ri or Tserko Ri", altitude: 4984 },
      { day: 7, title: "Kyanjin Gompa to Lama Hotel", description: "Long descent through valley", altitude: 2380 },
      { day: 8, title: "Lama Hotel to Syabrubesi", description: "Final trekking day", altitude: 1550 },
      { day: 9, title: "Drive to Kathmandu", description: "Return drive to capital", altitude: 1400 },
      { day: 10, title: "Departure", description: "Airport transfer", altitude: 1400 }
    ],
    includes: [
      "All ground transportation",
      "2 nights hotel in Kathmandu",
      "All meals on trek",
      "Licensed guide",
      "Porter service",
      "National park permits",
      "Lodge accommodation"
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal gear",
      "Tips",
      "Personal expenses"
    ],
    bestSeason: ["March", "April", "May", "October", "November"],
    groupSize: "2-12 people",
    packingList: [
      "Warm clothing",
      "Rain gear",
      "Trekking boots",
      "Sleeping bag",
      "Sun protection",
      "Camera"
    ]
  },
  {
    id: "4",
    name: "Island Peak Climbing",
    slug: "island-peak-climbing",
    category: "peak-climbing",
    region: "Everest",
    duration: 18,
    maxAltitude: 6189,
    difficulty: "Strenuous",
    price: 2450,
    shortDescription: "Combine Everest Base Camp trek with a summit of Island Peak at 6,189m.",
    description: "Island Peak (Imja Tse) is one of Nepal's most popular climbing peaks. Combined with the Everest Base Camp trek, this expedition offers the perfect introduction to high-altitude mountaineering in a spectacular setting.",
    image: islandPeak,
    highlights: [
      "Summit Island Peak at 6,189m",
      "Visit Everest Base Camp",
      "Learn mountaineering skills",
      "Stunning Himalayan panoramas",
      "Sherpa climbing guides"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Welcome, gear check", altitude: 1400 },
      { day: 2, title: "Fly to Lukla, Trek to Phakding", description: "Begin the journey", altitude: 2652 },
      { day: 3, title: "Phakding to Namche Bazaar", description: "Enter Khumbu region", altitude: 3440 },
      { day: 4, title: "Acclimatization in Namche", description: "Rest and explore", altitude: 3440 },
      { day: 5, title: "Namche to Tengboche", description: "Trek to monastery", altitude: 3860 },
      { day: 6, title: "Tengboche to Dingboche", description: "Enter high altitude zone", altitude: 4410 },
      { day: 7, title: "Acclimatization in Dingboche", description: "Prepare for altitude", altitude: 4410 },
      { day: 8, title: "Dingboche to Lobuche", description: "Along the glacier moraine", altitude: 4940 },
      { day: 9, title: "Lobuche to EBC to Gorak Shep", description: "Visit Everest Base Camp", altitude: 5364 },
      { day: 10, title: "Gorak Shep to Chhukung", description: "Cross to Island Peak valley", altitude: 4730 },
      { day: 11, title: "Chhukung to Island Peak BC", description: "Approach the peak", altitude: 5200 },
      { day: 12, title: "Training Day", description: "Climbing skills practice", altitude: 5200 },
      { day: 13, title: "Summit Day", description: "Early start, summit attempt", altitude: 6189 },
      { day: 14, title: "Reserve Day", description: "Weather contingency", altitude: 5200 },
      { day: 15, title: "Base Camp to Pangboche", description: "Descend after summit", altitude: 3930 },
      { day: 16, title: "Pangboche to Namche", description: "Trek down valley", altitude: 3440 },
      { day: 17, title: "Namche to Lukla", description: "Final trek day", altitude: 2860 },
      { day: 18, title: "Fly to Kathmandu", description: "Return to capital", altitude: 1400 }
    ],
    includes: [
      "All permits and peak fees",
      "Technical climbing gear",
      "Experienced climbing Sherpa",
      "Climbing training",
      "All accommodations",
      "All meals on trek",
      "Domestic flights"
    ],
    excludes: [
      "Personal climbing gear",
      "Travel insurance with rescue",
      "Personal expenses",
      "Tips"
    ],
    bestSeason: ["April", "May", "October", "November"],
    groupSize: "2-8 people",
    packingList: [
      "Mountaineering boots",
      "Crampons",
      "Ice axe",
      "Harness",
      "Helmet",
      "Down suit",
      "Expedition sleeping bag"
    ]
  },
  {
    id: "5",
    name: "Manaslu Circuit Trek",
    slug: "manaslu-circuit-trek",
    category: "popular",
    region: "Manaslu",
    duration: 14,
    maxAltitude: 5160,
    difficulty: "Challenging",
    price: 1350,
    shortDescription: "Circle the world's 8th highest peak on this spectacular remote trek.",
    description: "The Manaslu Circuit Trek offers a stunning journey around the world's eighth highest mountain. This restricted area trek provides an authentic Himalayan experience with fewer crowds and rich Tibetan Buddhist culture.",
    image: trekManaslu,
    highlights: [
      "Cross Larkya La Pass (5,160m)",
      "Views of Manaslu (8,163m)",
      "Authentic Tibetan villages",
      "Ancient Buddhist monasteries",
      "Fewer tourists than Annapurna"
    ],
    itinerary: [
      { day: 1, title: "Kathmandu Arrival", description: "Briefing and preparation", altitude: 1400 },
      { day: 2, title: "Drive to Soti Khola", description: "Begin journey to trailhead", altitude: 730 },
      { day: 3, title: "Soti Khola to Machha Khola", description: "Trek along Budhi Gandaki", altitude: 869 },
      { day: 4, title: "Machha Khola to Jagat", description: "Enter restricted area", altitude: 1410 },
      { day: 5, title: "Jagat to Deng", description: "Trek through gorge", altitude: 1804 },
      { day: 6, title: "Deng to Namrung", description: "Enter Tibetan culture zone", altitude: 2660 },
      { day: 7, title: "Namrung to Samagaun", description: "Views of Manaslu appear", altitude: 3530 },
      { day: 8, title: "Acclimatization Day", description: "Explore Pungyen Gompa", altitude: 3530 },
      { day: 9, title: "Samagaun to Samdo", description: "Approach the pass", altitude: 3875 },
      { day: 10, title: "Samdo to Dharamsala", description: "High camp before pass", altitude: 4460 },
      { day: 11, title: "Cross Larkya La to Bimthang", description: "Epic pass crossing", altitude: 3590 },
      { day: 12, title: "Bimthang to Tilije", description: "Descend into warmth", altitude: 2300 },
      { day: 13, title: "Tilije to Besisahar", description: "Complete the circuit", altitude: 760 },
      { day: 14, title: "Drive to Kathmandu", description: "Return journey", altitude: 1400 }
    ],
    includes: [
      "Special restricted area permit",
      "All ground transportation",
      "Experienced guide and porters",
      "All meals on trek",
      "Lodge/camping accommodation",
      "First aid and safety equipment"
    ],
    excludes: [
      "International flights",
      "Insurance",
      "Personal equipment",
      "Tips"
    ],
    bestSeason: ["March", "April", "May", "September", "October", "November"],
    groupSize: "2-12 people",
    packingList: [
      "4-season sleeping bag",
      "Warm down jacket",
      "Sturdy trekking boots",
      "Trekking poles",
      "Sun and cold protection"
    ]
  },
  {
    id: "6",
    name: "Upper Mustang Trek",
    slug: "upper-mustang-trek",
    category: "remote",
    region: "Mustang",
    duration: 14,
    maxAltitude: 3840,
    difficulty: "Moderate",
    price: 1850,
    shortDescription: "Explore the forbidden kingdom of Lo in the rain shadow of the Himalayas.",
    description: "Upper Mustang, the last forbidden kingdom of Nepal, offers a unique trek into a preserved Tibetan Buddhist world. The dramatic desert-like landscape and ancient cave monasteries make this a truly special journey.",
    image: uppermustang,
    highlights: [
      "Explore ancient Lo Manthang",
      "Desert mountain landscapes",
      "Cave monasteries and paintings",
      "Preserved Tibetan culture",
      "Rain shadow climate"
    ],
    itinerary: [
      { day: 1, title: "Fly to Pokhara", description: "Transfer to lakeside city", altitude: 884 },
      { day: 2, title: "Fly to Jomsom, Trek to Kagbeni", description: "Enter Mustang", altitude: 2810 },
      { day: 3, title: "Kagbeni to Chele", description: "Enter restricted zone", altitude: 3050 },
      { day: 4, title: "Chele to Syangboche", description: "Climb through desert terrain", altitude: 3475 },
      { day: 5, title: "Syangboche to Ghami", description: "Cross high passes", altitude: 3520 },
      { day: 6, title: "Ghami to Tsarang", description: "Visit ancient palace ruins", altitude: 3560 },
      { day: 7, title: "Tsarang to Lo Manthang", description: "Arrive at walled capital", altitude: 3840 },
      { day: 8, title: "Explore Lo Manthang", description: "Visit monasteries and palace", altitude: 3840 },
      { day: 9, title: "Lo Manthang to Ghami", description: "Begin return journey", altitude: 3520 },
      { day: 10, title: "Ghami to Samar", description: "Alternative route descent", altitude: 3290 },
      { day: 11, title: "Samar to Chhusang", description: "Continue descent", altitude: 2980 },
      { day: 12, title: "Chhusang to Jomsom", description: "Complete the trek", altitude: 2720 },
      { day: 13, title: "Fly to Pokhara", description: "Return to lakeside", altitude: 884 },
      { day: 14, title: "Fly to Kathmandu", description: "Final transfer", altitude: 1400 }
    ],
    includes: [
      "Upper Mustang restricted permit",
      "Domestic flights",
      "All accommodations",
      "All meals on trek",
      "Licensed guide",
      "Porter/pack animals"
    ],
    excludes: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Tips"
    ],
    bestSeason: ["April", "May", "June", "September", "October"],
    groupSize: "2-10 people",
    packingList: [
      "Layered clothing",
      "Dust protection",
      "Sunscreen SPF50+",
      "Comfortable trekking shoes",
      "Camera for unique landscapes"
    ]
  },
  {
    id: "7",
    name: "Mera Peak Climbing",
    slug: "mera-peak-climbing",
    category: "peak-climbing",
    region: "Everest",
    duration: 18,
    maxAltitude: 6476,
    difficulty: "Strenuous",
    price: 2650,
    shortDescription: "Climb Nepal's highest trekking peak with views of five 8,000m mountains.",
    description: "Mera Peak at 6,476m is Nepal's highest trekking peak, offering incredible views of five of the world's fourteen 8,000m peaks. The climb is technically straightforward, making it perfect for aspiring mountaineers.",
    image: peakClimbing,
    highlights: [
      "Nepal's highest trekking peak",
      "Views of Everest, Lhotse, Makalu, Cho Oyu, Kanchenjunga",
      "Less technical than Island Peak",
      "Remote Hinku Valley approach",
      "Excellent mountaineering introduction"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kathmandu", description: "Welcome meeting, gear check", altitude: 1400 },
      { day: 2, title: "Fly to Lukla, Trek to Paiya", description: "Begin eastern approach", altitude: 2730 },
      { day: 3, title: "Paiya to Panggom", description: "Trek through forests", altitude: 2850 },
      { day: 4, title: "Panggom to Ningsow", description: "Continue climb", altitude: 3050 },
      { day: 5, title: "Ningsow to Chhatra Khola", description: "Enter Hinku Valley", altitude: 3150 },
      { day: 6, title: "Chhatra Khola to Kothe", description: "Valley floor walking", altitude: 3600 },
      { day: 7, title: "Kothe to Thaknak", description: "Approach Mera", altitude: 4350 },
      { day: 8, title: "Thaknak to Khare (Mera BC)", description: "Reach base camp", altitude: 5045 },
      { day: 9, title: "Acclimatization and Training", description: "Practice climbing skills", altitude: 5045 },
      { day: 10, title: "Khare to Mera High Camp", description: "Climb to high camp", altitude: 5780 },
      { day: 11, title: "Summit Day", description: "Pre-dawn summit attempt", altitude: 6476 },
      { day: 12, title: "Reserve Day", description: "Weather contingency", altitude: 5780 },
      { day: 13, title: "Descend to Khare", description: "Return to base", altitude: 5045 },
      { day: 14, title: "Khare to Kothe", description: "Begin return trek", altitude: 3600 },
      { day: 15, title: "Kothe to Thuli Kharka", description: "Continue descent", altitude: 4200 },
      { day: 16, title: "Cross Zatr La to Lukla", description: "High pass and finish", altitude: 2860 },
      { day: 17, title: "Fly to Kathmandu", description: "Return to capital", altitude: 1400 },
      { day: 18, title: "Departure", description: "Airport transfer", altitude: 1400 }
    ],
    includes: [
      "Peak climbing permit",
      "All climbing equipment",
      "Experienced climbing guide",
      "All accommodations",
      "All meals",
      "Domestic flights"
    ],
    excludes: [
      "Personal climbing gear",
      "Insurance with helicopter rescue",
      "Tips",
      "Personal expenses"
    ],
    bestSeason: ["April", "May", "October", "November"],
    groupSize: "2-6 people",
    packingList: [
      "Double plastic boots",
      "Down suit",
      "Expedition sleeping bag",
      "Personal climbing gear",
      "High altitude clothing"
    ]
  },
  {
    id: "8",
    name: "Ghorepani Poon Hill Trek",
    slug: "ghorepani-poon-hill-trek",
    category: "popular",
    region: "Annapurna",
    duration: 5,
    maxAltitude: 3210,
    difficulty: "Easy",
    price: 450,
    shortDescription: "Perfect short trek with stunning sunrise views over the Annapurna and Dhaulagiri ranges.",
    description: "The Ghorepani Poon Hill trek is the perfect short Himalayan adventure. Famous for its spectacular sunrise views over Annapurna, Dhaulagiri, and Machhapuchhre, this trek offers big mountain experiences in a short timeframe.",
    image: ghorepanipoonhill,
    highlights: [
      "Sunrise from Poon Hill (3,210m)",
      "Views of Annapurna and Dhaulagiri",
      "Beautiful rhododendron forests",
      "Traditional Gurung villages",
      "Ideal for beginners"
    ],
    itinerary: [
      { day: 1, title: "Drive to Nayapul, Trek to Tikhedhunga", description: "Begin the adventure", altitude: 1540 },
      { day: 2, title: "Tikhedhunga to Ghorepani", description: "Climb through forest", altitude: 2860 },
      { day: 3, title: "Poon Hill Sunrise, Trek to Tadapani", description: "Famous sunrise, continue trek", altitude: 2630 },
      { day: 4, title: "Tadapani to Ghandruk", description: "Descend to Gurung village", altitude: 1940 },
      { day: 5, title: "Ghandruk to Nayapul, Drive to Pokhara", description: "Complete the trek", altitude: 884 }
    ],
    includes: [
      "Transportation",
      "All meals on trek",
      "Licensed guide",
      "All permits",
      "Lodge accommodation"
    ],
    excludes: [
      "Travel insurance",
      "Tips",
      "Personal expenses"
    ],
    bestSeason: ["March", "April", "May", "October", "November", "December"],
    groupSize: "2-14 people",
    packingList: [
      "Comfortable clothing",
      "Trekking shoes",
      "Rain jacket",
      "Sun protection",
      "Camera"
    ]
  },
  {
  id: "9",
  name: "Yala Peak Climbing",
  slug: "yala-peak-climbing",
  category: "peak-climbing",
  region: "Langtang",
  duration: 11,
  maxAltitude: 5500,
  difficulty: "Strenuous",
  price: 1200,
  shortDescription:
    "An ideal introductory Himalayan climbing adventure in the Langtang region, perfect for beginners.",
  description:
    "Yala Peak Climbing is a fantastic introduction to mountaineering in Nepal. Located in the Langtang region, this 5,500-meter peak offers breathtaking views of Langtang Lirung, Dorje Lakpa, Ganesh Himal, and even Shishapangma in Tibet. The climb is non-technical but physically demanding, making it perfect for first-time climbers with good fitness.",
  image: yalaPeak,
  highlights: [
    "Summit Yala Peak (5,500m)",
    "Views of Langtang Lirung, Dorje Lakpa & Shishapangma",
    "Perfect first Himalayan climbing experience",
    "Explore Langtang Valley & Tamang culture",
    "Experienced climbing guides and safety support"
  ],
  itinerary: [
    { day: 1, title: "Syabrubesi to Lama Hotel", description: "Trek through forested trails", altitude: 2460 },
    { day: 2, title: "Lama Hotel to Langtang Village", description: "Scenic valley trek", altitude: 3450 },
    { day: 3, title: "Langtang Village to Kyanjin Gompa", description: "Enter alpine zone", altitude: 3870 },
    { day: 4, title: "Acclimatization Day", description: "Hike to Tsergo Ri", altitude: 4984 },
    { day: 5, title: "Kyanjin Gompa to Yala Base Camp", description: "Approach base camp", altitude: 4600 },
    { day: 6, title: "Summit Yala Peak & Return", description: "Summit day and descent", altitude: 5500 },
    { day: 7, title: "Kyanjin Gompa to Lama Hotel", description: "Descend through valley", altitude: 2460 },
    { day: 8, title: "Lama Hotel to Khanjim", description: "Forest trek", altitude: 2235 },
    { day: 9, title: "Khanjim to Syabrubesi", description: "Final trekking day", altitude: 1460 },
    { day: 10, title: "Drive to Kathmandu", description: "Return to capital", altitude: 1400 },
    { day: 11, title: "Departure", description: "Airport transfer", altitude: 1400 }
  ],
  includes: [
    "Licensed trekking & climbing guide",
    "Porter service",
    "Langtang permits",
    "Meals during trek and climb",
    "Camping equipment at base camp",
    "Climbing gear (ropes, crampons, ice axe)",
    "Guide & porter insurance"
  ],
  excludes: [
    "International flights",
    "Nepal visa fees",
    "Personal climbing gear",
    "Travel insurance with rescue",
    "Tips and personal expenses"
  ],
  bestSeason: ["April", "May", "October", "November"],
  groupSize: "1–7 people",
  packingList: [
    "Mountaineering boots",
    "Crampons & ice axe",
    "Down jacket",
    "Sleeping bag (-10°C)",
    "Helmet & harness",
    "Trekking poles"
  ]
},
{
  id: "10",
  name: "Mardi Himal Base Camp Trek",
  slug: "mardi-himal-base-camp-trek",
  category: "popular",
  region: "Annapurna",
  duration: 4,
  maxAltitude: 4250,
  difficulty: "Moderate",
  price: 450,
  shortDescription:
    "A short and less-crowded trek in the Annapurna region offering stunning views of Mardi Himal, Machhapuchhre, Annapurna, and Dhaulagiri.",
  description:
    "The Mardi Himal Trek is a less touristic trek in the Annapurna region that takes you to the base camp of Mardi Himal near Machhapuchhre. This 4-day trek passes through Gurung villages, lush rhododendron forests, suspension bridges, and scenic ridgelines. The trek starts from Pokhara with a drive to Kande and continues through Forest Camp, Low Camp, and High Camp before reaching Mardi Himal Base Camp.",
  image: mardiHimal,
  highlights: [
    "Close-up views of Mardi Himal, Machhapuchhre, Annapurna & Dhaulagiri",
    "Off-the-beaten-path Annapurna trekking route",
    "Walk through rhododendron and magnolia forests",
    "Traditional Gurung villages and local culture",
    "Spectacular Himalayan viewpoints"
  ],
  itinerary: [
    {
      day: 1,
      title: "Pokhara – Kande – Forest Camp",
      description:
        "Drive from Pokhara to Kande and trek via Australian Camp, Pothana, and Deurali to Forest Camp.",
      altitude: 2600
    },
    {
      day: 2,
      title: "Forest Camp – Low Camp – Badal Danda – High Camp",
      description:
        "Trek through forested trails and ridgelines to reach High Camp with mountain views.",
      altitude: 3600
    },
    {
      day: 3,
      title: "High Camp – Mardi Himal Base Camp – Badal Danda",
      description:
        "Early hike to viewpoint and Mardi Himal Base Camp, then descend to Badal Danda.",
      altitude: 4250
    },
    {
      day: 4,
      title: "Badal Danda – Sidhing – Pokhara",
      description:
        "Descend to Sidhing village and drive back to Pokhara.",
      altitude: 1700
    }
  ],
  includes: [
    "Tea house accommodation during trek",
    "Breakfast, lunch, and dinner during trek",
    "Transportation: Pokhara–Kande & Sidhing–Pokhara",
    "Licensed trekking guide with insurance",
    "First aid kit",
    "Annapurna Conservation Area Permit (ACAP)",
    "TIMS card",
    "All necessary government taxes and fees"
  ],
  excludes: [
    "International airfare",
    "Nepal visa fee",
    "Travel insurance",
    "Personal expenses (drinks, Wi-Fi, hot shower, charging)",
    "Porter service (optional)",
    "Tips for guide and porter"
  ],
  bestSeason: ["March", "April", "May", "September", "October", "November"],
  groupSize: "2–12 people",
  packingList: [
    "Warm jacket",
    "Trekking boots",
    "Rain jacket",
    "Trekking poles",
    "Sleeping bag",
    "Sun protection",
    "Reusable water bottles",
    "Personal first aid kit"
  ]
},


];

export const getTrekBySlug = (slug: string): Trek | undefined => {
  return treks.find(trek => trek.slug === slug);
};

export const getTreksByCategory = (category: TrekCategory): Trek[] => {
  return treks.filter(trek => trek.category === category);
};

export const filterTreks = (filters: {
  region?: Region;
  difficulty?: Difficulty;
  minDuration?: number;
  maxDuration?: number;
  maxPrice?: number;
}): Trek[] => {
  return treks.filter(trek => {
    if (filters.region && trek.region !== filters.region) return false;
    if (filters.difficulty && trek.difficulty !== filters.difficulty) return false;
    if (filters.minDuration && trek.duration < filters.minDuration) return false;
    if (filters.maxDuration && trek.duration > filters.maxDuration) return false;
    if (filters.maxPrice && trek.price > filters.maxPrice) return false;
    return true;
  });
};

