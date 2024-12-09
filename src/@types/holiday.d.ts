export interface Holiday {
  dateName: string;
  locdate: number;
  isHoliday: string;
}

export interface HolidayResponse {
  response: {
    body: {
      items: {
        item: Holiday[];
      };
    };
  };
} 