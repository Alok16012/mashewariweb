export type Property = {
  id: number;
  title: string;
  slug: string;
  location: string;
  fullAddress: string;
  price: string;
  priceValue: number;
  pricePerSqft?: string;
  type: "Residential" | "Commercial" | "Industrial" | "Land";
  subType: string;
  status: "Ready to Move" | "Under Construction" | "New Launch";
  beds?: number;
  baths?: number;
  area: string;
  areaValue: number;
  floor?: string;
  totalFloors?: number;
  facing?: string;
  furnishing?: string;
  parking?: number;
  age?: string;
  possession?: string;
  images: string[];
  tag?: string;
  featured?: boolean;
  description: string;
  amenities: string[];
  highlights: string[];
  nearbyPlaces: { name: string; distance: string }[];
  agent: {
    name: string;
    phone: string;
    designation: string;
  };
  postedOn: string;
  rera?: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Premium 3BHK Apartment",
    slug: "premium-3bhk-apartment-saguna-more-patna",
    location: "Saguna More, Patna",
    fullAddress: "Sri Niwas Avenue, Saguna More, Patna, Bihar 801503",
    price: "₹45 Lakh",
    priceValue: 4500000,
    pricePerSqft: "₹2,800/sqft",
    type: "Residential",
    subType: "Apartment / Flat",
    status: "Ready to Move",
    beds: 3,
    baths: 2,
    area: "1,600 sqft",
    areaValue: 1600,
    floor: "3rd",
    totalFloors: 5,
    facing: "East",
    furnishing: "Semi-Furnished",
    parking: 1,
    age: "2 Years",
    images: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
    ],
    tag: "Featured",
    featured: true,
    description:
      "A beautifully designed premium 3BHK apartment located in the heart of Saguna More, Patna. This ready-to-move property features spacious rooms, modern fittings, and excellent connectivity to major landmarks. Ideal for families looking for comfort and convenience in the rapidly developing area of Bihar's capital.",
    amenities: [
      "Power Backup",
      "Lift",
      "Security Guard",
      "CCTV Surveillance",
      "Car Parking",
      "Water Supply 24/7",
      "Children's Play Area",
      "Gym",
      "Club House",
      "Terrace Garden",
    ],
    highlights: [
      "Ready to move — no waiting",
      "Vastu compliant layout",
      "East-facing for maximum sunlight",
      "Close to IndusInd Bank & major schools",
      "Verified clear title",
    ],
    nearbyPlaces: [
      { name: "IndusInd Bank", distance: "50 m" },
      { name: "Saguna More Bus Stand", distance: "200 m" },
      { name: "NH-30 Highway", distance: "300 m" },
      { name: "DAV School", distance: "1.2 km" },
      { name: "Patna Airport", distance: "18 km" },
    ],
    agent: {
      name: "Rajesh Maheshwari",
      phone: "097083 09999",
      designation: "Senior Property Advisor",
    },
    postedOn: "15 May 2026",
    rera: "RERA/BR/2024/001234",
  },
  {
    id: 2,
    title: "Industrial Shed / Warehouse",
    slug: "industrial-shed-warehouse-bihta",
    location: "Bihta Industrial Area",
    fullAddress: "Bihta Industrial Area, Bihta, Patna, Bihar 801103",
    price: "₹1.2 Cr",
    priceValue: 12000000,
    type: "Industrial",
    subType: "Industrial Shed / Warehouse",
    status: "Ready to Move",
    area: "8,000 sqft",
    areaValue: 8000,
    parking: 5,
    age: "New",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80",
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80",
      "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?w=900&q=80",
    ],
    tag: "Best Price",
    description:
      "A large industrial shed / warehouse in Bihta Industrial Area — one of Bihar's fastest growing industrial zones. Perfect for manufacturing, storage, or logistics. With excellent road connectivity to NH-30 and Patna-Buxar highway, this property is ideal for businesses looking to expand in Bihar.",
    amenities: [
      "3-Phase Power Supply",
      "Loading / Unloading Dock",
      "High Ceiling (24 ft)",
      "Overhead Crane Ready",
      "Fire Safety System",
      "Boundary Wall",
      "Security Cabin",
      "Water Connection",
      "Drainage",
    ],
    highlights: [
      "8000 sqft built-up on 12000 sqft plot",
      "24 ft height — suitable for heavy machinery",
      "3-phase industrial power connection",
      "NH-30 connectivity — 2 km",
      "Bihta Railway Station — 1.5 km",
    ],
    nearbyPlaces: [
      { name: "NH-30 National Highway", distance: "2 km" },
      { name: "Bihta Railway Station", distance: "1.5 km" },
      { name: "Bihta EPIP Zone", distance: "3 km" },
      { name: "Patna City", distance: "30 km" },
    ],
    agent: {
      name: "Suresh Kumar",
      phone: "097083 09999",
      designation: "Industrial Property Specialist",
    },
    postedOn: "10 May 2026",
  },
  {
    id: 3,
    title: "Commercial Office Space",
    slug: "commercial-office-space-exhibition-road-patna",
    location: "Exhibition Road, Patna",
    fullAddress: "Exhibition Road, Fraser Road Area, Patna, Bihar 800001",
    price: "₹75 Lakh",
    priceValue: 7500000,
    pricePerSqft: "₹4,200/sqft",
    type: "Commercial",
    subType: "Office Space",
    status: "Ready to Move",
    area: "1,800 sqft",
    areaValue: 1800,
    floor: "4th",
    totalFloors: 6,
    furnishing: "Fully Furnished",
    parking: 2,
    age: "3 Years",
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=900&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    ],
    description:
      "Premium commercial office space in the most sought-after business district of Patna — Exhibition Road. Fully furnished with modular workstations, server room, conference room, and reception area. Ideal for IT companies, consultancy firms, or corporate offices.",
    amenities: [
      "Modular Workstations",
      "Conference Room",
      "Reception Area",
      "Server Room",
      "Central AC",
      "Power Backup",
      "Lift",
      "CCTV",
      "Parking",
      "Cafeteria Access",
    ],
    highlights: [
      "Prime Exhibition Road location",
      "Fully furnished and move-in ready",
      "Excellent road connectivity",
      "Near Bihar Secretariat & Courts",
      "High footfall commercial area",
    ],
    nearbyPlaces: [
      { name: "Patna Junction Railway Station", distance: "2 km" },
      { name: "Bihar Secretariat", distance: "1.5 km" },
      { name: "Gandhi Maidan", distance: "800 m" },
      { name: "Patna High Court", distance: "2.5 km" },
    ],
    agent: {
      name: "Priya Maheshwari",
      phone: "097083 09999",
      designation: "Commercial Property Advisor",
    },
    postedOn: "8 May 2026",
  },
  {
    id: 4,
    title: "Residential Plot — NA",
    slug: "residential-plot-danapur-patna",
    location: "Danapur, Patna",
    fullAddress: "Shivpuri Colony, Danapur, Patna, Bihar 801503",
    price: "₹28 Lakh",
    priceValue: 2800000,
    pricePerSqft: "₹1,400/sqft",
    type: "Land",
    subType: "Residential Plot (NA)",
    status: "Ready to Move",
    area: "2,000 sqft",
    areaValue: 2000,
    facing: "West",
    possession: "Immediate",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=900&q=80",
    ],
    tag: "Hot Deal",
    description:
      "A premium residential plot in the fast-developing area of Danapur, Patna. Non-Agricultural (NA) approved plot with clear title and all legal documents ready. Wide road facing, rectangular shape — ideal for building your dream home. Danapur is one of Patna's most sought-after residential areas with excellent connectivity.",
    amenities: [
      "NA (Non-Agricultural) Approved",
      "Clear Title",
      "Gated Colony",
      "Wide Road Access",
      "Water & Electricity Available",
      "Drainage System",
      "Boundary Wall",
    ],
    highlights: [
      "Rectangular plot — easy construction",
      "30-ft road facing",
      "NA conversion done — no delay",
      "Close to Danapur Cantonment",
      "Near schools, hospitals, markets",
    ],
    nearbyPlaces: [
      { name: "Danapur Railway Station", distance: "1.5 km" },
      { name: "Danapur Cantonment", distance: "2 km" },
      { name: "Patna City Center", distance: "14 km" },
      { name: "State Highway 1", distance: "500 m" },
    ],
    agent: {
      name: "Rajesh Maheshwari",
      phone: "097083 09999",
      designation: "Senior Property Advisor",
    },
    postedOn: "5 May 2026",
  },
  {
    id: 5,
    title: "2BHK Flat — New Launch",
    slug: "2bhk-flat-kankarbagh-patna",
    location: "Kankarbagh, Patna",
    fullAddress: "Shri Ram Nagar, Kankarbagh, Patna, Bihar 800020",
    price: "₹32 Lakh",
    priceValue: 3200000,
    pricePerSqft: "₹2,600/sqft",
    type: "Residential",
    subType: "Apartment / Flat",
    status: "New Launch",
    beds: 2,
    baths: 2,
    area: "1,200 sqft",
    areaValue: 1200,
    floor: "2nd",
    totalFloors: 4,
    facing: "North-East",
    furnishing: "Unfurnished",
    parking: 1,
    possession: "Dec 2025",
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=900&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
    ],
    tag: "New",
    featured: true,
    description:
      "Brand new 2BHK apartment in the vibrant and well-connected area of Kankarbagh, Patna. This new launch project offers spacious rooms, modern architecture, and quality construction. Kankarbagh is one of Patna's most popular residential localities with all amenities nearby.",
    amenities: [
      "Modular Kitchen",
      "Lift",
      "Power Backup",
      "CCTV Security",
      "Car Parking",
      "Garden",
      "Children Play Area",
      "24/7 Water Supply",
    ],
    highlights: [
      "Brand new — booking open",
      "North-East facing — auspicious",
      "Vastu compliant design",
      "Near Kankarbagh market",
      "Easy loan from all major banks",
    ],
    nearbyPlaces: [
      { name: "Kankarbagh Market", distance: "500 m" },
      { name: "Rajendra Nagar", distance: "1.5 km" },
      { name: "Patna Junction", distance: "5 km" },
      { name: "PMCH Hospital", distance: "3 km" },
    ],
    agent: {
      name: "Suresh Kumar",
      phone: "097083 09999",
      designation: "Industrial Property Specialist",
    },
    postedOn: "20 May 2026",
    rera: "RERA/BR/2024/005678",
  },
  {
    id: 6,
    title: "Showroom on NH-30",
    slug: "showroom-nh30-saguna-more-patna",
    location: "Saguna More, NH-30",
    fullAddress: "NH-30, Saguna More, Patna, Bihar 801503",
    price: "₹2.5 Cr",
    priceValue: 25000000,
    type: "Commercial",
    subType: "Showroom / Retail Space",
    status: "Ready to Move",
    area: "3,500 sqft",
    areaValue: 3500,
    floor: "Ground",
    furnishing: "Shell / Bare",
    parking: 10,
    age: "1 Year",
    images: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=900&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
    ],
    description:
      "A prime showroom space directly on National Highway 30 at Saguna More — one of the highest traffic commercial locations in Bihar. Ground floor with glass frontage, high ceiling, and large parking. Perfect for automobile showrooms, electronics, furniture, or any high-visibility retail brand.",
    amenities: [
      "Glass Facade / Frontage",
      "High Ceiling (18 ft)",
      "3-Phase Power",
      "10 Car Parking",
      "Loading Area",
      "CCTV Security",
      "Generator Backup",
      "Separate Staff Entry",
    ],
    highlights: [
      "NH-30 direct frontage — max visibility",
      "30,000+ vehicles daily traffic",
      "Ground floor — no lift needed",
      "Glass facade — premium display",
      "Biggest showroom cluster in the area",
    ],
    nearbyPlaces: [
      { name: "IndusInd Bank (Saguna More)", distance: "100 m" },
      { name: "Patna Bypass", distance: "500 m" },
      { name: "Bihta Industrial Area", distance: "15 km" },
      { name: "Patna Airport", distance: "16 km" },
    ],
    agent: {
      name: "Priya Maheshwari",
      phone: "097083 09999",
      designation: "Commercial Property Advisor",
    },
    postedOn: "1 May 2026",
  },
  {
    id: 7,
    title: "4BHK Luxury Villa",
    slug: "4bhk-luxury-villa-boring-road-patna",
    location: "Boring Road, Patna",
    fullAddress: "Boring Canal Road, Patna, Bihar 800001",
    price: "₹1.8 Cr",
    priceValue: 18000000,
    pricePerSqft: "₹6,000/sqft",
    type: "Residential",
    subType: "Independent Villa",
    status: "Ready to Move",
    beds: 4,
    baths: 4,
    area: "3,000 sqft",
    areaValue: 3000,
    floor: "G+2",
    facing: "South",
    furnishing: "Fully Furnished",
    parking: 2,
    age: "5 Years",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=900&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80",
    ],
    featured: true,
    description:
      "A stunning fully furnished 4BHK luxury villa on the prestigious Boring Road — Patna's most affluent residential corridor. Features Italian marble flooring, modular kitchen, home automation, and a private garden. This G+2 independent villa offers complete privacy with premium interiors and top-of-the-line fittings.",
    amenities: [
      "Italian Marble Flooring",
      "Modular Kitchen",
      "Home Automation",
      "Private Garden",
      "Terrace",
      "2 Car Garage",
      "Study Room",
      "Servant Quarter",
      "Solar Panels",
      "RO Water Purifier",
      "Security System",
    ],
    highlights: [
      "Fully furnished — move in today",
      "Private garden & terrace",
      "Home automation system",
      "Prime Boring Road address",
      "Gated society with security",
    ],
    nearbyPlaces: [
      { name: "Boring Road Market", distance: "300 m" },
      { name: "IGIMS Hospital", distance: "2 km" },
      { name: "Patna Zoo", distance: "3 km" },
      { name: "Patna Junction", distance: "6 km" },
    ],
    agent: {
      name: "Rajesh Maheshwari",
      phone: "097083 09999",
      designation: "Senior Property Advisor",
    },
    postedOn: "12 May 2026",
  },
  {
    id: 8,
    title: "Agricultural Land — 5 Bigha",
    slug: "agricultural-land-5-bigha-bihta",
    location: "Bihta, Bihar",
    fullAddress: "Village Dumri, Bihta Block, Patna, Bihar 801103",
    price: "₹35 Lakh",
    priceValue: 3500000,
    type: "Land",
    subType: "Agricultural Land",
    status: "Ready to Move",
    area: "5 Bigha (30,250 sqft)",
    areaValue: 30250,
    facing: "Road Facing",
    possession: "Immediate",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
    ],
    description:
      "5 Bigha (approx. 30,250 sqft) of prime agricultural land near Bihta — on the outskirts of Patna. Fertile land with excellent irrigation facilities. Close to the Bihta EPIP industrial zone, making it suitable for future non-agricultural conversion. Clear title, jamabandi & khatian available.",
    amenities: [
      "Fertile Soil",
      "Irrigation Canal Access",
      "Road Facing",
      "Clear Title / Jamabandi",
      "Khatian Available",
      "Electricity Nearby",
    ],
    highlights: [
      "5 Bigha — rare large plot",
      "Road-facing — high accessibility",
      "Near Bihta industrial zone",
      "High appreciation potential",
      "All original documents available",
    ],
    nearbyPlaces: [
      { name: "Bihta Town", distance: "3 km" },
      { name: "NH-30 Highway", distance: "2 km" },
      { name: "Bihta Railway Station", distance: "4 km" },
      { name: "Bihta EPIP Zone", distance: "5 km" },
    ],
    agent: {
      name: "Suresh Kumar",
      phone: "097083 09999",
      designation: "Industrial Property Specialist",
    },
    postedOn: "3 May 2026",
  },
];

export function getPropertyById(id: number): Property | undefined {
  return properties.find((p) => p.id === id);
}

export function getSimilarProperties(current: Property, limit = 3): Property[] {
  return properties
    .filter((p) => p.id !== current.id && p.type === current.type)
    .slice(0, limit);
}
