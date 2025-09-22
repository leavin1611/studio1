'use client';

import { hazardReports } from '@/lib/data';
import { HazardReportCard } from '../common/HazardReportCard';

export function RecentReports() {
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
          {hazardReports.slice(0, 4).map((report) => (
            <HazardReportCard key={report.id} report={report} />
          ))}
        </div>
      </div>
    </section>
  );
}
