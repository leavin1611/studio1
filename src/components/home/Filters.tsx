'use client';

import type { Dispatch, SetStateAction } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { hazardTypes, dateRanges, severityLevels } from '@/lib/data';
import type { FiltersState } from './Dashboard';

type FiltersProps = {
  filters: FiltersState;
  setFilters: Dispatch<SetStateAction<FiltersState>>;
};

export function Filters({ filters, setFilters }: FiltersProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold">Filter Reports</h3>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="hazard-type">Hazard Type</Label>
          <Select
            value={filters.hazardType}
            onValueChange={(value) => setFilters(prev => ({ ...prev, hazardType: value }))}
          >
            <SelectTrigger id="hazard-type">
              <SelectValue placeholder="All Hazards" />
            </SelectTrigger>
            <SelectContent>
              {hazardTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="date-range">Date Range</Label>
          <Select
            value={filters.dateRange}
            onValueChange={(value) => setFilters(prev => ({ ...prev, dateRange: value }))}
          >
            <SelectTrigger id="date-range">
              <SelectValue placeholder="All Time" />
            </SelectTrigger>
            <SelectContent>
              {dateRanges.map((range) => (
                <SelectItem key={range.value} value={range.value}>
                  {range.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            placeholder="Enter location..."
            value={filters.location}
            onChange={(e) => setFilters(prev => ({ ...prev, location: e.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="severity">Severity Level</Label>
          <Select
            value={filters.severity}
            onValueChange={(value) => setFilters(prev => ({ ...prev, severity: value as any }))}
          >
            <SelectTrigger id="severity">
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              {severityLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
