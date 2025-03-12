export const enum Department {
  CARDIOLGY = 'Кардиология',
  SURGERY = 'Хирургия',
}

export interface Employee {
  id: string;
  fullName: string;
  department: Department;
}

export interface Doctor extends Employee {
  isHeadOfDepartment: boolean;
}

export interface Nurse extends Employee {
  school?: string;
}

export type Employees = {
  doctors: Doctor[];
  nurses: Nurse[];
}