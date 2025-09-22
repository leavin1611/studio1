import { FeatureCard } from '../common/FeatureCard';
import { BarChart, Bell, Bot, Globe, Map, ShieldAlert } from 'lucide-react';

const features = [
  {
    icon: <ShieldAlert className="h-8 w-8" />,
    title: 'Real-time Reporting',
    description: 'Submit geotagged reports with photos and videos of ocean hazards in real-time.',
  },
  {
    icon: <Map className="h-8 w-8" />,
    title: 'Interactive Map',
    description: 'Visualize all reports and alerts on an interactive map with dynamic hotspots.',
  },
  {
    icon: <BarChart className="h-8 w-8" />,
    title: 'Social Media Analytics',
    description: 'Monitor and analyze social media for hazard-related discussions and trends.',
  },
  {
    icon: <Bell className="h-8 w-8" />,
    title: 'Push Notifications',
    description: 'Receive instant alerts about verified hazards in your area.',
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: 'Multi-language Support',
    description: 'Access the platform in multiple regional languages for better accessibility.',
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: 'AI-Powered Analysis',
    description: 'Advanced AI for media analysis, object detection, and predictive hotspot mapping.',
  },
];

export function Features() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Platform Features
            <span className="block w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Comprehensive tools for ocean hazard reporting and analysis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
