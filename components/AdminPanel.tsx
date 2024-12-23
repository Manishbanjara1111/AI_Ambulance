import React from 'react';
import { Users, Ambulance, FileText } from 'lucide-react';
import { mockPatients, mockAmbulances } from '../data/mockData';

export default function AdminPanel() {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-500 text-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Total Patients</p>
                <p className="text-3xl font-bold">{mockPatients.length}</p>
              </div>
              <Users className="w-8 h-8 opacity-80" />
            </div>
          </div>
          
          <div className="bg-green-500 text-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Active Ambulances</p>
                <p className="text-3xl font-bold">{mockAmbulances.length}</p>
              </div>
              <Ambulance className="w-8 h-8 opacity-80" />
            </div>
          </div>
          
          <div className="bg-purple-500 text-white rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-80">Reports Generated</p>
                <p className="text-3xl font-bold">24</p>
              </div>
              <FileText className="w-8 h-8 opacity-80" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {mockPatients.map((patient) => (
                <div
                  key={patient.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <p className="font-medium">{patient.name}</p>
                    <p className="text-sm text-gray-600">
                      Ambulance: {patient.ambulanceId}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      patient.status === 'Critical'
                        ? 'bg-red-100 text-red-800'
                        : patient.status === 'Intermediate'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {patient.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Ambulance Fleet Status</h2>
            <div className="space-y-4">
              {mockAmbulances.map((ambulance) => (
                <div
                  key={ambulance.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div>
                    <p className="font-medium">{ambulance.vehicleNumber}</p>
                    <p className="text-sm text-gray-600">
                      {ambulance.currentPatientId
                        ? `Active Patient: ${ambulance.currentPatientId}`
                        : 'No active patient'}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      ambulance.status === 'Available'
                        ? 'bg-green-100 text-green-800'
                        : ambulance.status === 'On Call'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {ambulance.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}