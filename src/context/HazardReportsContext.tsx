'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import type { HazardReport } from '@/lib/data';
import { hazardReports as initialReports } from '@/lib/data';

interface HazardReportsContextType {
  reports: HazardReport[];
  addReport: (report: HazardReport) => void;
}

const HazardReportsContext = createContext<HazardReportsContextType | undefined>(undefined);

export const HazardReportsProvider = ({ children }: { children: ReactNode }) => {
  const [reports, setReports] = useState<HazardReport[]>(initialReports);

  const addReport = (report: HazardReport) => {
    setReports(prevReports => [report, ...prevReports]);
  };

  return (
    <HazardReportsContext.Provider value={{ reports, addReport }}>
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
