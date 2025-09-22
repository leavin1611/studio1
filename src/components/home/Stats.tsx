import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { stats } from '@/lib/data';

export function Stats() {
  return (
    <Card className="bg-primary/10 border-primary/20">
      <CardHeader>
        <CardTitle>Today's Reports</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Total Reports</span>
            <span className="font-bold text-lg">{stats.totalReports}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Verified Incidents</span>
            <span className="font-bold text-lg">{stats.verifiedIncidents}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Social Media Mentions</span>
            <span className="font-bold text-lg">{stats.socialMentions}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">New Alerts</span>
            <span className="font-bold text-lg">{stats.newAlerts}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
