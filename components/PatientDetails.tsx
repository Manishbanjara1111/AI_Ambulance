import React from 'react';
import { ClipboardList, Heart, Thermometer, Activity } from 'lucide-react';
import { mockPatients } from '../data/mockData';

export default function PatientDetails({ patientId = '1' }) {
  const patient = mockPatients.find((p) => p.id === patientId);

  if (!patient) return null;

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">{patient.name}</h1>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Live Vitals
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="text-sm text-gray-600">Blood Pressure</div>
                    <div className="text-xl font-semibold">{patient.vitals.bloodPressure}</div>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="text-sm text-gray-600">Heart Rate</div>
                    <div className="text-xl font-semibold">{patient.vitals.heartRate} bpm</div>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="text-sm text-gray-600">Temperature</div>
                    <div className="text-xl font-semibold">{patient.vitals.temperature}°C</div>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow-sm">
                    <div className="text-sm text-gray-600">Oxygen Level</div>
                    <div className="text-xl font-semibold">{patient.vitals.oxygenLevel}%</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <ClipboardList className="w-5 h-5 mr-2" />
                  Medical History
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Medications</h3>
                    <div className="flex flex-wrap gap-2">
                      {patient.medicalHistory.medications.map((med, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {med}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700 mb-2">Allergies</h3>
                    <div className="flex flex-wrap gap-2">
                      {patient.medicalHistory.allergies.map((allergy, index) => (
                        <span
                          key={index}
                          className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                        >
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}