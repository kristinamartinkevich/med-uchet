import React, { useState, useEffect } from 'react';
import { Doctor, Nurse, Department } from '../types';

interface StaffFormProps {
  type: 'doctor' | 'nurse';
  initialData?: Doctor | Nurse;
  onSubmit: (data: Omit<Doctor | Nurse, 'id'>) => void;
  onCancel: () => void;
}

export const StaffForm: React.FC<StaffFormProps> = ({
  type,
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [fullName, setFullName] = useState(initialData?.fullName || '');
  const [department, setDepartment] = useState<Department>(
    initialData?.department || Department.CARDIOLGY
  );
  const [isHeadOfDepartment, setIsHeadOfDepartment] = useState(
    type === 'doctor' ? (initialData as Doctor)?.isHeadOfDepartment || false : false
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      fullName,
      department,
      ...(type === 'doctor' && { isHeadOfDepartment }),
    };
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          ФИО
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Департмент
        </label>
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value as Department)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value={Department.CARDIOLGY}>Кардиология</option>
          <option value={Department.SURGERY}>Хирургия</option>
        </select>
      </div>

      {type === 'doctor' && (
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isHeadOfDepartment}
            onChange={(e) => setIsHeadOfDepartment(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label className="ml-2 block text-sm text-gray-700">
            Заведующий отделения
          </label>
        </div>
      )}

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Отмена
        </button>
        <button
          type="submit"
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Сохранить
        </button>
      </div>
    </form>
  );
};