import { Activity, Heart, Thermometer, Droplets } from "lucide-react";
import type { Patient } from "../../types";

interface VitalsCardProps {
  vitals: Patient["vitals"];
}

export default function VitalsCard({ vitals }: VitalsCardProps) {
  const vitalsData = [
    {
      icon: Heart,
      label: "Blood Pressure",
      value: vitals.bloodPressure,
      color: "text-red-600",
    },
    {
      icon: Activity,
      label: "Heart Rate",
      value: `${vitals.heartRate} bpm`,
      color: "text-blue-600",
    },
    {
      icon: Thermometer,
      label: "Temperature",
      value: `${vitals.temperature}°C`,
      color: "text-yellow-600",
    },
    {
      icon: Droplets,
      label: "Oxygen Level",
      value: `${vitals.oxygenLevel}%`,
      color: "text-green-600",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Live Vitals</h2>
      <div className="grid grid-cols-2 gap-4">
        {vitalsData.map(({ icon: Icon, label, value, color }) => (
          <div key={label} className="bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <Icon className={`w-5 h-5 ${color}`} />
              <span className="ml-2 text-gray-600">{label}</span>
            </div>
            <div className="text-2xl font-bold">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
