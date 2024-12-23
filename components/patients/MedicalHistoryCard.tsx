import React from 'react';
import { Pill, AlertTriangle, Clock } from 'lucide-react';
import type { Patient } from '../../types';

interface MedicalHistoryCardProps {
  medicalHistory: Patient['medicalHistory'];
}

export default function MedicalHistoryCard({ medicalHistory }: MedicalHistoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Medical History</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex items-center mb-3">
            <Pill className="w-5 h-5 text-blue-600" />
            <h3 className="ml-2 font-medium">Current Medications</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {medicalHistory.medications.length > 0 ? (
              medicalHistory.medications.map((med, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                >
                  {med}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No current medications</span>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            <h3 className="ml-2 font-medium">Allergies</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {medicalHistory.allergies.length > 0 ? (
              medicalHistory.allergies.map((allergy, index) => (
                <span
                  key={index}
                  className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm"
                >
                  {allergy}
                </span>
              ))
            ) : (
              <span className="text-gray-500">No known allergies</span>
            )}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-3">
            <Clock className="w-5 h-5 text-purple-600" />
            <h3 className="ml-2 font-medium">Past Admissions</h3>
          </div>
          <div className="space-y-2">
            {medicalHistory.pastAdmissions.length > 0 ? (
              medicalHistory.pastAdmissions.map((admission, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-3 rounded-lg flex justify-between items-center"
                >
                  <span className="text-gray-700">{admission.reason}</span>
                  <span className="text-sm text-gray-500">{admission.date}</span>
                </div>
              ))
            ) : (
              <span className="text-gray-500">No past admissions</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}