'use client';

import { useEffect, useState } from 'react';
import { FeedCard } from '../common/FeedCard';
import { Skeleton } from '../ui/skeleton';

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

export function RecentFeeds() {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeeds() {
      try {
        const response = await fetch('/ocean_data.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setFeeds(data);
      } catch (err) {
        console.error('Error loading feeds:', err);
      } finally {
        setLoading(false);
      }
    }
    loadFeeds();
  }, []);

  return (
    <section id="feeds" className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Recent Feeds
            <span className="block w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Community-submitted updates from ocean hazard data
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-96 w-full rounded-xl" />)
          ) : (
            feeds.map((feed) => <FeedCard key={feed.id} feed={feed} />)
          )}
        </div>
      </div>
    </section>
  );
}
