import { Patient, Ambulance } from '../types';

export const mockPatients: Patient[] = [
  {
    id: '1',
    name: 'John Doe',
    age: 45,
    status: 'Critical',
    condition: 'Cardiac Arrest',
    vitals: {
      bloodPressure: '140/90',
      heartRate: 70,
      temperature: 38.5,
      oxygenLevel: 94,
    },
    medicalHistory: {
      medications: ['Aspirin', 'Metoprolol'],
      allergies: ['Penicillin'],
      pastAdmissions: [
        {
          date: '2023-10-15',
          reason: 'Hypertension',
        },
      ],
    },
    ambulanceId: 'AMB-001',
    estimatedArrival: '10 minutes',
  },
  {
    id: '2',
    name: 'Jane Smith',
    age: 28,
    status: 'Intermediate',
    condition: 'Traffic Accident',
    vitals: {
      bloodPressure: '120/80',
      heartRate: 90,
      temperature: 37.2,
      oxygenLevel: 98,
    },
    medicalHistory: {
      medications: [],
      allergies: ['Latex'],
      pastAdmissions: [],
    },
    ambulanceId: 'AMB-002',
    estimatedArrival: '15 minutes',
  },
];

export const mockAmbulances: Ambulance[] = [
  {
    id: 'AMB-001',
    vehicleNumber: 'EMT-123',
    location: {
      lat: 40.7128,
      lng: -74.0060,
    },
    status: 'On Call',
    currentPatientId: '1',
  },
  {
    id: 'AMB-002',
    vehicleNumber: 'EMT-124',
    location: {
      lat: 40.7580,
      lng: -73.9855,
    },
    status: 'On Call',
    currentPatientId: '2',
  },
];