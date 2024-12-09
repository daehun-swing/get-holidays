import type { Holiday } from '@/@types/holiday';

interface HolidayItemProps {
  holiday: Holiday;
}

export function HolidayItem({ holiday }: HolidayItemProps) {
  return (
    <li className="p-4 border border-gray-700 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors shadow-lg">
      <h1 className="text-lg font-bold text-gray-100">{holiday.dateName}</h1>
      <p className="text-gray-400">
        {`${String(holiday.locdate).slice(0, 4)}년 ${String(holiday.locdate).slice(4, 6)}월 ${String(holiday.locdate).slice(6, 8)}일`}
      </p>
    </li>
  );
} 