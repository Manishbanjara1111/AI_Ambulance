import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Ambulance, Layout, Users, Stethoscope } from "lucide-react";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/Dashboard";
import PatientDetails from "./components/patients/PatientDetails";
import DriverView from "./components/DriverView";
import AdminPanel from "./components/AdminPanel";
import DoctorPrep from "./components/DoctorPrep";

const navigation = [
  { id: "dashboard", name: "Dashboard", icon: Layout, path: "/dashboard" },
  { id: "driver", name: "Driver View", icon: Ambulance, path: "/driver" },
  { id: "admin", name: "Admin Panel", icon: Users, path: "/admin" },
  { id: "doctor", name: "Doctor Prep", icon: Stethoscope, path: "/doctor" },
];

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar navigation={navigation} />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/patients/:id" element={<PatientDetails />} />
            <Route path="/driver" element={<DriverView />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/doctor" element={<DoctorPrep />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
