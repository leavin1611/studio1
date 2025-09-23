'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {

  return (
    <section className="bg-hero-pattern bg-cover bg-center text-white py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white max-w-4xl mx-auto">
          Protecting Coastal Communities Through Crowdsourced Intelligence
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
          Report ocean hazards, monitor real-time alerts, and contribute to safer coastal communities with our integrated platform.
        </p>
        <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
          <Link href="/report">Report a Hazard</Link>
        </Button>
      </div>
    </section>
  );
}
