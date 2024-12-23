import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { mockPatients } from '../../data/mockData';
import PatientHeader from './PatientHeader';
import VitalsCard from './VitalsCard';
import MedicalHistoryCard from './MedicalHistoryCard';

export default function PatientDetails() {
  const { id } = useParams();
  const patient = mockPatients.find(p => p.id === id);

  if (!patient) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="p-6">
      <div className="max-w-7xl mx-auto">
        <PatientHeader patient={patient} />
        
        <div className="grid md:grid-cols-2 gap-6">
          <VitalsCard vitals={patient.vitals} />
          <MedicalHistoryCard medicalHistory={patient.medicalHistory} />
        </div>
      </div>
    </div>
  );
}