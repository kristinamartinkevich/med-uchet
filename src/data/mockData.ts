import { Department, Doctor, Nurse } from '../types';

export const mockDoctors: Doctor[] = [
  {
    id: '1',
    fullName: 'Василенко Мария Афанасъевна',
    department: Department.CARDIOLGY,
    isHeadOfDepartment: false,
  },
  {
    id: '2',
    fullName: 'Воронцов Игорь Дмитриевич',
    department: Department.SURGERY,
    isHeadOfDepartment: true,
  },
  {
    id: '3',
    fullName: 'Лобанов Кирилл Антонов',
    department: Department.CARDIOLGY,
    isHeadOfDepartment: false,
  },
];

export const mockNurses: Nurse[] = [
  {
    id: '1',
    fullName: 'Добров Артур Иванович',
    department: Department.CARDIOLGY,
  },
  {
    id: '2',
    fullName: 'Мошкова Елизавета Егоровна',
    department: Department.SURGERY,
  },
  {
    id: '3',
    fullName: 'Давидович Игорь Павлович',
    department: Department.CARDIOLGY,
  },
];