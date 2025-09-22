'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useHazardReports } from '@/context/HazardReportsContext';
import { SocialStats } from './SocialStats';
import { Skeleton } from '../ui/skeleton';

export function Stats() {
  const { reports, loading } = useHazardReports();

  if (loading) {
     return (
        <Card className="bg-primary/10 border-primary/20">
            <CardHeader>
                <CardTitle>Today's Reports</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Reports</span>
                        <Skeleton className="h-6 w-12" />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Verified Incidents</span>
                        <Skeleton className="h-6 w-12" />
                    </div>
                    <SocialStats />
                </div>
            </CardContent>
        </Card>
     )
  }

  const totalReports = reports.length;
  const verifiedIncidents = reports.filter(report => report.verified).length;
  
  return (
    <Card className="bg-primary/10 border-primary/20">
      <CardHeader>
        <CardTitle>Today's Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Reports</span>
            <span className="font-bold text-lg">{totalReports}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Verified Incidents</span>
            <span className="font-bold text-lg">{verifiedIncidents}</span>
          </div>
          <SocialStats />
        </div>
      </CardContent>
    </Card>
  );
}
