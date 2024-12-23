import React from 'react';
import { User, Clock, AlertCircle } from 'lucide-react';
import type { Patient, PatientStatus } from '../../types';

interface PatientHeaderProps {
  patient: Patient;
}

const statusColors: Record<PatientStatus, string> = {
  Critical: 'bg-red-100 text-red-800',
  Intermediate: 'bg-yellow-100 text-yellow-800',
  Normal: 'bg-green-100 text-green-800',
};

export default function PatientHeader({ patient }: PatientHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-blue-100 p-3 rounded-full">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <div className="ml-4">
            <h1 className="text-2xl font-bold">{patient.name}</h1>
            <p className="text-gray-600">Age: {patient.age}</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center">
            <Clock className="w-5 h-5 text-gray-400" />
            <span className="ml-2">ETA: {patient.estimatedArrival}</span>
          </div>
          
          <div className="flex items-center">
            <AlertCircle className="w-5 h-5 text-gray-400" />
            <span className="ml-2">Condition: {patient.condition}</span>
          </div>
          
          <span className={`px-3 py-1 rounded-full ${statusColors[patient.status]}`}>
            {patient.status}
          </span>
        </div>
      </div>
    </div>
  );
}