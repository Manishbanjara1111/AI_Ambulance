export type PatientStatus = 'Critical' | 'Intermediate' | 'Normal';

export interface Patient {
  id: string;
  name: string;
  age: number;
  status: PatientStatus;
  condition: string;
  vitals: {
    bloodPressure: string;
    heartRate: number;
    temperature: number;
    oxygenLevel: number;
  };
  medicalHistory: {
    medications: string[];
    allergies: string[];
    pastAdmissions: {
      date: string;
      reason: string;
    }[];
  };
  ambulanceId: string;
  estimatedArrival: string;
}

export interface Ambulance {
  id: string;
  vehicleNumber: string;
  location: {
    lat: number;
    lng: number;
  };
  status: 'Available' | 'On Call' | 'Maintenance';
  currentPatientId?: string;
}