export type HazardReport = {
  id: number;
  title: string;
  user: string;
  timeAgo: string;
  description: string;
  tags: string[];
  verified: boolean;
  type: 'tsunami' | 'storm' | 'waves' | 'currents' | 'flooding' | 'erosion' | 'other';
  severity: 'low' | 'medium' | 'high' | 'extreme';
  location: string;
  date: string;
  imageUrl: string;
  imageHint: string;
  lat: number;
  lng: number;
};

export const hazardReports: HazardReport[] = [
  {
    id: 1,
    title: "High Waves in Chennai",
    user: "Rajesh K.",
    timeAgo: "2 hours ago",
    description: "Waves reaching above 3 meters, causing erosion along Marina Beach. Avoid the area.",
    tags: ["High Waves", "Chennai"],
    verified: false,
    type: "waves",
    severity: "high",
    location: "Chennai",
    date: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    imageUrl: "https://picsum.photos/seed/report1/400/200",
    imageHint: "waves ocean",
    lat: 13.05,
    lng: 80.28,
  },
  {
    id: 2,
    title: "Flooding in Mumbai",
    user: "Priya M.",
    timeAgo: "5 hours ago",
    description: "Seawater has inundated roads in Cuffe Parade area due to high tide and heavy rains.",
    tags: ["Coastal Flooding", "Mumbai"],
    verified: true,
    type: "flooding",
    severity: "medium",
    location: "Mumbai",
    date: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    imageUrl: "https://picsum.photos/seed/report2/400/200",
    imageHint: "flood ocean",
    lat: 18.91,
    lng: 72.82,
  },
    {
    id: 3,
    title: "Storm Surge Warning",
    user: "INCOIS Official",
    timeAgo: "8 hours ago",
    description: "Storm surge expected along Odisha coast. Fishermen advised not to venture into sea.",
    tags: ["Storm Surge", "Odisha"],
    verified: true,
    type: "storm",
    severity: "high",
    location: "Odisha",
    date: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    imageUrl: "https://picsum.photos/seed/report3/400/200",
    imageHint: "stormy sea",
    lat: 20.50,
    lng: 86.10,
    },
      {
    id: 4,
    title: "Dangerous Currents Spotted",
    user: "Local Lifeguard",
    timeAgo: "1 day ago",
    description: "Strong rip currents reported near Visakhapatnam. Swimming is not recommended.",
    tags: ["Dangerous Currents", "Visakhapatnam"],
    verified: true,
    type: "currents",
    severity: "high",
    location: "Visakhapatnam",
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    imageUrl: "https://picsum.photos/seed/report4/400/200",
    imageHint: "ocean current",
    lat: 17.70,
    lng: 83.30,
    },
];

export const stats = {
    totalReports: 47,
    verifiedIncidents: 12,
    socialMentions: 283,
    newAlerts: 5,
};

export const hazardTypes = [
    { value: 'all', label: 'All Hazards' },
    { value: 'tsunami', label: 'Tsunami' },
    { value: 'storm', label: 'Storm Surge' },
    { value: 'waves', label: 'High Waves' },
    { value: 'currents', label: 'Coastal Currents' },
    { value: 'flooding', label: 'Coastal Flooding' },
    { value: 'erosion', label: 'Beach Erosion' },
];

export const dateRanges = [
    { value: 'today', label: 'Today' },
    { value: 'week', label: 'This Week' },
    { value: 'month', label: 'This Month' },
];

export const severityLevels = [
    { value: 'all', label: 'All Levels' },
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
    { value: 'extreme', label: 'Extreme' },
];

export const landPoints = [
      {lat:12.9716, lng:77.5946, name:"Bengaluru"},
      {lat:11.0168, lng:76.9558, name:"Coimbatore"},
      {lat:10.8505, lng:76.2711, name:"Kerala"},
      {lat:9.9312,  lng:76.2673, name:"Kochi"},
      {lat:8.0883,  lng:77.5385, name:"Kanyakumari"},
      {lat:7.8731,  lng:80.7718, name:"Sri Lanka"}
];