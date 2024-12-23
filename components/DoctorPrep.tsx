import { Stethoscope, AlertCircle, Clock } from "lucide-react";
import { mockPatients } from "../data/mockData";

export default function DoctorPrep() {
  const patient = mockPatients[0]; // Using first patient as example

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold flex items-center">
              <Stethoscope className="w-6 h-6 mr-2" />
              Doctor Preparation
            </h1>
            <div className="flex items-center text-yellow-600">
              <Clock className="w-5 h-5 mr-2" />
              <span>ETA: {patient.estimatedArrival}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-red-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Critical Information
                </h2>
                <div className="space-y-3">
                  <div>
                    <span className="font-medium">Condition:</span>
                    <span className="ml-2">{patient.condition}</span>
                  </div>
                  <div>
                    <span className="font-medium">Allergies:</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {patient.medicalHistory.allergies.map(
                        (allergy, index) => (
                          <span
                            key={index}
                            className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                          >
                            {allergy}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">
                  Required Equipment
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    />
                    <span className="ml-2">Cardiac Monitor</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    />
                    <span className="ml-2">Defibrillator</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 rounded border-gray-300"
                    />
                    <span className="ml-2">Emergency Medications</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">
                  Live Vitals Trend
                </h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Blood Pressure</span>
                      <span className="font-medium">
                        {patient.vitals.bloodPressure}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Heart Rate</span>
                      <span className="font-medium">
                        {patient.vitals.heartRate} bpm
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-red-600 h-2 rounded-full"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Oxygen Level</span>
                      <span className="font-medium">
                        {patient.vitals.oxygenLevel}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Medical Notes</h2>
                <textarea
                  className="w-full h-32 p-2 border rounded-md"
                  placeholder="Add preparation notes here..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
