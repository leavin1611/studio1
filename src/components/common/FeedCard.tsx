import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ThumbsUp } from 'lucide-react';

type Feed = {
  id: number;
  user_handle: string;
  hazard_type: string;
  location_name: string;
  comments: string;
  likes: number;
  hashtags: string;
  image_url: string;
};

type FeedCardProps = {
  feed: Feed;
};

export function FeedCard({ feed }: FeedCardProps) {
  const description = feed.comments ? feed.comments.split('|||')[0] : '';
  const tags = (feed.hashtags || '')
    .split(' ')
    .filter(t => t.trim() !== '')
    .map(t => t.startsWith('#') ? t : `#${t}`);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-lg group">
      <Image
        src={feed.image_url}
        alt={`${feed.hazard_type} at ${feed.location_name}`}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        data-ai-hint="ocean social"
      />
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2">
        <ThumbsUp className="w-4 h-4" />
        {feed.likes}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold mb-1">{`${feed.hazard_type} at ${feed.location_name}`}</h3>
        <p className="text-sm text-white/80 mb-2">@{feed.user_handle}</p>
        <p className="text-base mb-3 text-white/90">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-white/20 px-2 py-1 rounded-full text-xs">{tag}</span>
          ))}
        </div>
        <Button variant="outline" className="w-full bg-white/20 border-white text-white hover:bg-white/30">
          View Details
        </Button>
      </div>
    </div>
  );
}
