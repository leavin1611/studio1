
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { HazardReportCard } from '../common/HazardReportCard';
import { useHazardReports } from '@/context/HazardReportsContext';
import { Skeleton } from '../ui/skeleton';
import type { HazardReport } from '@/lib/data';

function shuffleArray(array: any[]) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


export function RecentReports() {
  const { reports: allReports, loading } = useHazardReports();
  const [shuffledReports, setShuffledReports] = useState<HazardReport[]>([]);
  const [displayedReports, setDisplayedReports] = useState<HazardReport[]>([]);
  const [isPaused, setIsPaused] = useState(false);
  const currentIndex = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (allReports.length > 0) {
      setShuffledReports(shuffleArray([...allReports]));
    }
  }, [allReports]);

  const advanceReports = useCallback(() => {
    if (shuffledReports.length === 0) return;

    const nextIndex = (currentIndex.current + 4) % shuffledReports.length;
    const newReports = [];
    for (let i = 0; i < 4; i++) {
        newReports.push(shuffledReports[(nextIndex + i) % shuffledReports.length]);
    }
    
    setDisplayedReports(newReports);
    currentIndex.current = nextIndex;
  }, [shuffledReports]);

  useEffect(() => {
      if(shuffledReports.length > 0 && displayedReports.length === 0) {
          advanceReports();
      }
  }, [shuffledReports, displayedReports, advanceReports]);


  useEffect(() => {
    if (shuffledReports.length > 0 && !isPaused) {
      intervalRef.current = setInterval(advanceReports, 15000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [shuffledReports, isPaused, advanceReports]);

  const handleViewDetails = () => {
    setIsPaused(true);
    const checkDialog = setInterval(() => {
      const dialogs = document.querySelectorAll('[role="dialog"]');
      let oneOpen = false;
      dialogs.forEach(d => {
        if (d.hasAttribute('data-state') && d.getAttribute('data-state') === 'open') {
          oneOpen = true;
        }
      });
      if (!oneOpen) {
        setIsPaused(false);
        clearInterval(checkDialog);
      }
    }, 500);
  };
  
  if (loading) {
    return (
      <section id="posts" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
              Recent Ocean Hazard Reports
              <span className="block w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></span>
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Community-submitted hazard alerts from coastal areas
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="posts" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
            Recent Ocean Hazard Reports
            <span className="block w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Community-submitted hazard alerts from coastal areas
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedReports.map((report) => (
            <HazardReportCard key={report.id} report={report} onViewDetails={handleViewDetails} />
          ))}
        </div>
      </div>
    </section>
  );
}
