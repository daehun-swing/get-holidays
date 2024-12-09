'use client'
import { useState, useEffect } from 'react';
import Image from "next/image";
import dayjs from 'dayjs';
import { getHolidays } from './actions';
import type { Holiday } from '@/@types/holiday';
import { HolidayList, CopyButton } from '@/components';

export default function Home() {
  const currentYear = dayjs().year();
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const years = Array.from(
    { length: 3 }, 
    (_, i) => currentYear + i
  );

  async function handleYearChange(year: number) {
    setIsLoading(true);
    try {
      const allHolidays = await getHolidays(year);
      setHolidays(allHolidays);
    } catch (error) {
      console.error('Error fetching holidays:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    handleYearChange(currentYear);
  }, [currentYear]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center sm:items-start">
          <span className="text-xs text-gray-500 mb-1">made by daehun</span>
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>

        <div className="flex flex-col gap-4 w-full max-w-xs">
          <select 
            className="w-full p-2 border rounded bg-transparent text-foreground border-gray-700"
            onChange={(e) => handleYearChange(Number(e.target.value))}
            defaultValue={currentYear}
          >
            {years.map(year => (
              <option key={year} value={year} className="bg-background text-foreground">
                {year}년
              </option>
            ))}
          </select>

          <CopyButton holidays={holidays} isLoading={isLoading} />
        </div>

        <HolidayList holidays={holidays} isLoading={isLoading} />
      </main>
    </div>
  );
}
