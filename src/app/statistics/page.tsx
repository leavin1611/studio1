
'use client';

import { useHazardReports } from '@/context/HazardReportsContext';
import { useNeeds } from '@/context/NeedsContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { AlertTriangle, HeartHandshake, FileText, BarChart2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useMemo } from 'react';

const HAZARD_COLORS = {
  tsunami: '#ef4444',
  storm: '#f97316',
  waves: '#eab308',
  currents: '#84cc16',
  flooding: '#22c55e',
  erosion: '#10b981',
  other: '#64748b',
};

const NEED_COLORS = {
  water: '#0ea5e9',
  food: '#6366f1',
  shelter: '#8b5cf6',
  medical: '#d946ef',
  rescue: '#ec4899',
  other: '#78716c',
};


export default function StatisticsPage() {
  const { reports, loading: reportsLoading } = useHazardReports();
  const { needs, loading: needsLoading } = useNeeds();

  const loading = reportsLoading || needsLoading;

  const { hazardStats, totalReports, verifiedReports, highSeverityReports } = useMemo(() => {
    if (loading) return { hazardStats: [], totalReports: 0, verifiedReports: 0, highSeverityReports: 0 };
    
    const stats = reports.reduce((acc, report) => {
      acc[report.type] = (acc[report.type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const highSeverityCount = reports.filter(r => r.severity === 'high' || r.severity === 'extreme').length;

    return {
        hazardStats: Object.entries(stats).map(([name, value]) => ({ name, count: value })),
        totalReports: reports.length,
        verifiedReports: reports.filter(r => r.verified).length,
        highSeverityReports: highSeverityCount,
    };
  }, [reports, loading]);

  const { needStats, totalNeeds, urgentNeeds } = useMemo(() => {
    if (loading) return { needStats: [], totalNeeds: 0, urgentNeeds: 0 };
    
    const stats = needs.reduce((acc, need) => {
      acc[need.needType] = (acc[need.needType] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
        needStats: Object.entries(stats).map(([name, value]) => ({ name, count: value })),
        totalNeeds: needs.length,
        urgentNeeds: needs.filter(n => n.isUrgent).length,
    };
  }, [needs, loading]);


  if (loading) {
      return (
        <div className="container mx-auto px-4 py-8 md:py-12">
            <header className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-primary">Platform Statistics</h1>
                <p className="text-muted-foreground mt-2 text-lg">An overview of community contributions and needs.</p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {Array.from({length: 4}).map((_, i) => <Skeleton key={i} className="h-32" />)}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Skeleton className="h-96" />
                <Skeleton className="h-96" />
            </div>
        </div>
      )
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Platform Statistics</h1>
        <p className="text-muted-foreground mt-2 text-lg">An overview of community contributions and needs.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hazard Reports</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalReports}</div>
            <p className="text-xs text-muted-foreground">{verifiedReports} verified by officials</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Severity Reports</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highSeverityReports}</div>
            <p className="text-xs text-muted-foreground">Marked as 'High' or 'Extreme'</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Assistance Requests</CardTitle>
            <HeartHandshake className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalNeeds}</div>
             <p className="text-xs text-muted-foreground">{urgentNeeds} marked as urgent</p>
          </CardContent>
        </Card>
         <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Community Engagement</CardTitle>
            <BarChart2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalReports + totalNeeds}</div>
            <p className="text-xs text-muted-foreground">Total submissions</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Hazard Reports by Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={hazardStats} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12 }} />
                <Tooltip
                    cursor={{fill: 'hsl(var(--accent))'}}
                    contentStyle={{
                        background: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))'
                    }}
                />
                <Bar dataKey="count" name="Reports">
                    {hazardStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={HAZARD_COLORS[entry.name as keyof typeof HAZARD_COLORS] || '#8884d8'} />
                    ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Assistance Requests by Type</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie data={needStats} dataKey="count" nameKey="name" cx="50%" cy="50%" outerRadius={120} label>
                     {needStats.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={NEED_COLORS[entry.name as keyof typeof NEED_COLORS] || '#8884d8'} />
                    ))}
                </Pie>
                <Legend />
                <Tooltip 
                     contentStyle={{
                        background: 'hsl(var(--background))',
                        border: '1px solid hsl(var(--border))'
                    }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
