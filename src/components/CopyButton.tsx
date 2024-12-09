import { useState } from 'react';
import type { Holiday } from '@/@types/holiday';
import { formatHolidaysForCopy, copyToClipboard } from '@/utils/clipboard';

interface CopyButtonProps {
  holidays: Holiday[];
  isLoading: boolean;
}

export function CopyButton({ holidays, isLoading }: CopyButtonProps) {
  const [copySuccess, setCopySuccess] = useState(false);

  async function handleCopy() {
    const formattedData = formatHolidaysForCopy(holidays);
    const success = await copyToClipboard(formattedData);
    
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  }

  return (
    <button
      onClick={handleCopy}
      disabled={isLoading || holidays.length === 0}
      className={`
        w-full p-2 rounded transition-colors
        ${isLoading || holidays.length === 0
          ? 'bg-gray-700 cursor-not-allowed'
          : 'bg-gray-800 hover:bg-gray-700 active:bg-gray-600'}
        ${copySuccess ? 'bg-green-700' : ''}
      `}
    >
      {copySuccess ? '복사 완료!' : '공휴일 데이터 복사'}
    </button>
  );
} 