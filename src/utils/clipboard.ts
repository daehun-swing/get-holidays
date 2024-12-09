import type { Holiday } from '@/@types/holiday';

export function formatHolidaysForCopy(holidays: Holiday[]): string {
  return JSON.stringify(
    holidays.map(holiday => (holiday.locdate)),
    null,
    2
  );
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
} 