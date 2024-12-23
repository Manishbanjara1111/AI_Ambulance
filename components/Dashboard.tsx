import PatientList from "./patients/PatientList";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Active Patients</h1>
      <PatientList />
    </div>
  );
}
