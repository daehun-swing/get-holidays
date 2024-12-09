import type { Holiday } from '@/@types/holiday';
import { HolidayItem } from './HolidayItem';

interface HolidayListProps {
  holidays: Holiday[];
  isLoading: boolean;
}

export function HolidayList({ holidays, isLoading }: HolidayListProps) {
  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-300"></div>
      </div>
    );
  }

  return (
    <ol className="flex flex-col gap-4 w-full max-w-xl">
      {holidays.map((item) => (
        <HolidayItem key={`${item.locdate}-${item.dateName}`} holiday={item} />
      ))}
      {holidays.length === 0 && !isLoading && (
        <p className="text-center text-gray-400">
          공휴일 정보를 불러오는 중입니다...
        </p>
      )}
    </ol>
  );
} 