import { ReactNode } from 'react';

export interface userCheck {
  id?: number;
  name: string;
  phoneNumber: string;
  noshow: boolean;
  reservation: string;
  reservationDate: string;
  reservationTime: string;
  reservationNum: number;
}

export interface ChildProps {
  page: ReactNode;
}

export interface TimeProps {
  schedule: ScheduleArr[];
  setSelected: React.Dispatch<React.SetStateAction<[]> | string | any>;
  selected: string;
}
export interface ScheduleArr {
  time: string;
}
