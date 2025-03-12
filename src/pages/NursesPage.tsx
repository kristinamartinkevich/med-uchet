import React, { useState } from 'react';
import { Nurse } from '../types';
import { StaffTable } from '../components/StaffTable';
import { StaffForm } from '../components/StaffForm';
import { mockNurses } from '../data/mockData';

export const NursesPage: React.FC = () => {
  const [nurses, setNurses] = useState<Nurse[]>(mockNurses);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingNurse, setEditingNurse] = useState<Nurse | undefined>();

  const handleAdd = (data: Omit<Nurse, 'id'>) => {
    const newNurse: Nurse = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
    };
    setNurses([...nurses, newNurse]);
    setIsFormOpen(false);
  };

  const handleEdit = (id: string) => {
    const nurse = nurses.find((n) => n.id === id);
    setEditingNurse(nurse);
    setIsFormOpen(true);
  };

  const handleUpdate = (data: Omit<Nurse, 'id'>) => {
    if (!editingNurse) return;
    const updatedNurses = nurses.map((nurse) =>
      nurse.id === editingNurse.id
        ? { ...data, id: editingNurse.id }
        : nurse
    );
    setNurses(updatedNurses);
    setIsFormOpen(false);
    setEditingNurse(undefined);
  };

  const handleDelete = (id: string) => {
    setNurses(nurses.filter((nurse) => nurse.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Медсестры</h1>
        <button
          onClick={() => {
            setEditingNurse(undefined);
            setIsFormOpen(true);
          }}
          className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          Добавить Медсестру
        </button>
      </div>

      {isFormOpen ? (
        <div className="bg-white shadow sm:rounded-lg p-6">
          <StaffForm
            type="nurse"
            initialData={editingNurse}
            onSubmit={editingNurse ? handleUpdate : handleAdd}
            onCancel={() => {
              setIsFormOpen(false);
              setEditingNurse(undefined);
            }}
          />
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <StaffTable
            data={nurses}
            type="nurse"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};