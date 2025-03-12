import React from 'react';
import { Doctor, Nurse, Department } from '../types';
import { Check, X } from 'lucide-react';

interface StaffTableProps {
  data: (Doctor | Nurse)[];
  type: 'doctor' | 'nurse';
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const StaffTable: React.FC<StaffTableProps> = ({
  data,
  type,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ФИО
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Отделение
            </th>
            {type === 'doctor' && (
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Заведующий отделения
              </th>
            )}
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Действия
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {item.fullName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">
                {item.department}
              </td>
              {type === 'doctor' && (
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {(item as Doctor).isHeadOfDepartment ? <Check className='text-rose-600' /> : <X className='text-green-600' />}
                </td>
              )}
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => onEdit(item.id)}
                  className="text-blue-600 hover:text-blue-900 mr-4"
                >
                  Изм.
                </button>
                <button
                  onClick={() => onDelete(item.id)}
                  className="text-red-600 hover:text-red-900"
                >
                  Удалить
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};