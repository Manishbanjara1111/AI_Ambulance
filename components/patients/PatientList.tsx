import React from 'react';
import { Link } from 'react-router-dom';
import { AlertCircle, Activity, User } from 'lucide-react';
import { mockPatients } from '../../data/mockData';
import type { PatientStatus } from '../../types';

const statusColors: Record<PatientStatus, string> = {
  Critical: 'bg-red-100 text-red-800',
  Intermediate: 'bg-yellow-100 text-yellow-800',
  Normal: 'bg-green-100 text-green-800',
};

const statusIcons: Record<PatientStatus, React.ReactNode> = {
  Critical: <AlertCircle className="w-4 h-4" />,
  Intermediate: <Activity className="w-4 h-4" />,
  Normal: <User className="w-4 h-4" />,
};

export default function PatientList() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockPatients.map((patient) => (
        <Link
          key={patient.id}
          to={`/patients/${patient.id}`}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">{patient.name}</h2>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                statusColors[patient.status]
              }`}
            >
              {statusIcons[patient.status]}
              <span className="ml-2">{patient.status}</span>
            </span>
          </div>
          <div className="space-y-2 text-gray-600">
            <p>Age: {patient.age}</p>
            <p>Condition: {patient.condition}</p>
            <p>ETA: {patient.estimatedArrival}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}