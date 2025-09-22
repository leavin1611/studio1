import { Dashboard } from "@/components/home/Dashboard";
import { Features } from "@/components/home/Features";
import { Hero } from "@/components/home/Hero";
import { RecentFeeds } from "@/components/home/RecentFeeds";
import { RecentReports } from "@/components/home/RecentReports";

export default function Home() {
  return (
    <>
      <Hero />
      <Dashboard />
      <RecentFeeds />
      <RecentReports />
      <Features />
    </>
  );
}
