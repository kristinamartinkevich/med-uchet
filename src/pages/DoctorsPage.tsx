import React, { useState } from 'react';
import { Doctor } from '../types';
import { StaffTable } from '../components/StaffTable';
import { StaffForm } from '../components/StaffForm';
import { mockDoctors } from '../data/mockData';
import { Plus } from 'lucide-react';

export const DoctorsPage: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(mockDoctors);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState<Doctor | undefined>();

  const handleAdd = (data: Omit<Doctor, 'id'>) => {
    const newDoctor: Doctor = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
    };
    setDoctors([...doctors, newDoctor]);
    setIsFormOpen(false);
  };

  const handleEdit = (id: string) => {
    const doctor = doctors.find((d) => d.id === id);
    setEditingDoctor(doctor);
    setIsFormOpen(true);
  };

  const handleUpdate = (data: Omit<Doctor, 'id'>) => {
    if (!editingDoctor) return;
    const updatedDoctors = doctors.map((doctor) =>
      doctor.id === editingDoctor.id
        ? { ...data, id: editingDoctor.id }
        : doctor
    );
    setDoctors(updatedDoctors);
    setIsFormOpen(false);
    setEditingDoctor(undefined);
  };

  const handleDelete = (id: string) => {
    setDoctors(doctors.filter((doctor) => doctor.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Доктора</h1>
        <button
          onClick={() => {
            setEditingDoctor(undefined);
            setIsFormOpen(true);
          }}
          className="px-4 flex items-center py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
        >
          <Plus className='h-5 w-5 mr-2' />
          Добавить Доктора
        </button>
      </div>

      {isFormOpen ? (
        <div className="bg-white shadow sm:rounded-lg p-6">
          <StaffForm
            type="doctor"
            initialData={editingDoctor}
            onSubmit={editingDoctor ? handleUpdate : handleAdd}
            onCancel={() => {
              setIsFormOpen(false);
              setEditingDoctor(undefined);
            }}
          />
        </div>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <StaffTable
            data={doctors}
            type="doctor"
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};