import { WeekdayOption, WeekdaysIndex } from '../types/schedule';

export const WeekdaysSelectOptions = [
  { value: 0, label: WeekdaysIndex.SUNDAY },
  { value: 1, label: WeekdaysIndex.MONDAY },
  { value: 2, label: WeekdaysIndex.TUESDAY },
  { value: 3, label: WeekdaysIndex.WEDNESDAY },
  { value: 4, label: WeekdaysIndex.THURSDAY },
  { value: 5, label: WeekdaysIndex.FRIDAY },
  { value: 6, label: WeekdaysIndex.SATURDAY },
] as unknown as WeekdayOption[];
