import { Map, Navigation2 } from "lucide-react";
import { mockAmbulances } from "../data/mockData";

export default function DriverView() {
  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-6 flex items-center">
            <Navigation2 className="w-6 h-6 mr-2" />
            Driver Navigation
          </h1>

          <div className="aspect-video bg-gray-100 rounded-lg mb-6 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Map className="w-12 h-12 text-gray-400" />
              <span className="ml-2 text-gray-500">Map View</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-4">Current Route</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span>Distance Remaining</span>
                  <span className="font-semibold">2.5 km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Estimated Time</span>
                  <span className="font-semibold">8 mins</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Traffic Condition</span>
                  <span className="text-green-600 font-semibold">Light</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-4">Vehicle Status</h2>
              <div className="space-y-2">
                {mockAmbulances.map((ambulance) => (
                  <div
                    key={ambulance.id}
                    className="flex justify-between items-center"
                  >
                    <span>{ambulance.vehicleNumber}</span>
                    <span
                      className={`font-semibold ${
                        ambulance.status === "Available"
                          ? "text-green-600"
                          : ambulance.status === "On Call"
                          ? "text-yellow-600"
                          : "text-red-600"
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
    </div>
  );
}
