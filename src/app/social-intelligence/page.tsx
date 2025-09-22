'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { analyzeSocialMediaTrends, AnalyzeSocialMediaTrendsOutput } from '@/ai/flows/analyze-social-media-trends';
import { AlertCircle, CheckCircle, TrendingUp, Zap, MessageSquare, Newspaper, Tag } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

const COLORS = {
  positive: '#22c55e', // green-500
  negative: '#ef4444', // red-500
  neutral: '#64748b', // slate-500
};

export default function SocialIntelligencePage() {
  const [analysis, setAnalysis] = useState<AnalyzeSocialMediaTrendsOutput | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/ocean_data.json');
        const posts = await response.json();
        const result = await analyzeSocialMediaTrends({ posts });
        setAnalysis(result);
      } catch (error) {
        console.error("Failed to analyze social media trends:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const sentimentData = analysis ? [
    { name: 'Positive', value: analysis.sentiment.positive },
    { name: 'Negative', value: analysis.sentiment.negative },
    { name: 'Neutral', value: analysis.sentiment.neutral },
  ] : [];

  const topPostsData = analysis ? analysis.topPosts.map(p => ({...p, name: p.handle})) : [];

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">Social Media Intelligence</h1>
          <p className="text-muted-foreground mt-2 text-lg">AI-driven analysis of public social media conversations.</p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Skeleton className="h-48 col-span-1 lg:col-span-3" />
          <Skeleton className="h-96" />
          <Skeleton className="h-96" />
          <Skeleton className="h-96" />
        </div>
      </div>
    );
  }

  if (!analysis) {
    return <div className="text-center py-20">Failed to load analysis. Please try again later.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">Social Media Intelligence</h1>
        <p className="text-muted-foreground mt-2 text-lg">AI-driven analysis of public social media conversations.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Urgency Level</CardTitle>
            <Zap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysis.urgency.level.toUpperCase()}</div>
            <p className="text-xs text-muted-foreground">{analysis.urgency.justification}</p>
            <Progress value={analysis.urgency.score * 100} className="mt-2 h-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mentions</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysis.totalMentions}</div>
            <p className="text-xs text-muted-foreground">posts analyzed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Dominant Sentiment</CardTitle>
            {analysis.sentiment.dominant === 'positive' && <CheckCircle className="h-4 w-4 text-green-500" />}
            {analysis.sentiment.dominant === 'negative' && <AlertCircle className="h-4 w-4 text-red-500" />}
            {analysis.sentiment.dominant === 'neutral' && <Newspaper className="h-4 w-4 text-slate-500" />}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analysis.sentiment.dominant.toUpperCase()}</div>
            <p className="text-xs text-muted-foreground">Overall public mood</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Hazard Topic</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold capitalize">{analysis.keyTopics[0]}</div>
            <p className="text-xs text-muted-foreground">Most discussed hazard type</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Top Influential Posts</CardTitle>
            <CardDescription>Posts with the highest engagement (likes).</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={topPostsData} layout="vertical" margin={{ left: 20 }}>
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} tick={{fontSize: 12}}/>
                <Tooltip 
                  cursor={{fill: 'hsl(var(--accent))'}}
                  contentStyle={{
                      background: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))'
                  }}
                />
                <Bar dataKey="likes" fill="hsl(var(--primary))" background={{ fill: 'hsl(var(--accent))' }} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Distribution</CardTitle>
            <CardDescription>Breakdown of public sentiment.</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={sentimentData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[entry.name.toLowerCase() as keyof typeof COLORS]} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Tag className="h-5 w-5 text-primary"/> Key Topics Discussed</CardTitle>
                <CardDescription>The most frequent keywords and topics identified by the AI from social media posts.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-3">
                    {analysis.keyTopics.map(topic => (
                        <Badge key={topic} variant="secondary" className="text-base px-4 py-2">{topic}</Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
