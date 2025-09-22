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
