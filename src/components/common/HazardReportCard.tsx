import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { HazardReport } from '@/lib/data';
import { cn } from '@/lib/utils';
import { Clock, User } from 'lucide-react';

type HazardReportCardProps = {
  report: HazardReport;
};

export function HazardReportCard({ report }: HazardReportCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
      <div className="relative h-48 w-full">
        <Image
          src={report.imageUrl}
          alt={report.title}
          fill
          className="object-cover"
          data-ai-hint={report.imageHint}
        />
      </div>
      <CardContent className="p-4">
        <CardTitle className="text-lg mb-2">{report.title}</CardTitle>
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{report.user}</span>
            </div>
            <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{report.timeAgo}</span>
            </div>
        </div>
        <p className="text-sm text-muted-foreground mb-4 h-10 overflow-hidden">
          {report.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {report.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
          <Badge
            variant={report.verified ? 'default' : 'destructive'}
            className={cn(report.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800')}
          >
            {report.verified ? 'Verified' : 'Unverified'}
          </Badge>
        </div>
        <Button variant="outline" className="w-full">View Details</Button>
      </CardContent>
    </Card>
  );
}
