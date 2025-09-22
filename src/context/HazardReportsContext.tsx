'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import type { HazardReport } from '@/lib/data';

interface HazardReportsContextType {
  reports: HazardReport[];
  addReport: (report: HazardReport) => void;
  loading: boolean;
}

const HazardReportsContext = createContext<HazardReportsContextType | undefined>(undefined);

export const HazardReportsProvider = ({ children }: { children: ReactNode }) => {
  const [reports, setReports] = useState<HazardReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReports() {
      try {
        const response = await fetch('/hazard-reports.json');
        if (!response.ok) {
          throw new Error('Failed to fetch hazard reports');
        }
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error(error);
        // In a real app, you might want to set an error state here
      } finally {
        setLoading(false);
      }
    }
    fetchReports();
  }, []);

  const addReport = (report: HazardReport) => {
    setReports(prevReports => [report, ...prevReports]);
  };

  return (
    <HazardReportsContext.Provider value={{ reports, addReport, loading }}>
      {children}
    </HazardReportsContext.Provider>
  );
};

export const useHazardReports = () => {
  const context = useContext(HazardReportsContext);
  if (context === undefined) {
    throw new Error('useHazardReports must be used within a HazardReportsProvider');
  }
  return context;
};
