import { Search, Download } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const records = [
  { id: '1', patient: 'John Doe', doctor: 'Dr. Sarah Johnson', date: '2024-01-15', diagnosis: 'Hypertension', type: 'Consultation' },
  { id: '2', patient: 'Jane Smith', doctor: 'Dr. Michael Chen', date: '2024-01-14', diagnosis: 'Migraine', type: 'Follow-up' },
  { id: '3', patient: 'Bob Wilson', doctor: 'Dr. Emily Williams', date: '2024-01-13', diagnosis: 'Common Cold', type: 'Consultation' },
  { id: '4', patient: 'Alice Brown', doctor: 'Dr. James Brown', date: '2024-01-12', diagnosis: 'Fracture', type: 'Emergency' },
];

export function Records() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Medical Records</h1>
          <p className="text-gray-500 mt-1">Access and manage patient medical records</p>
        </div>
      </div>

      <Card>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search records by patient, doctor, or diagnosis..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
          />
        </div>
      </Card>

      <Card padding="none">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Patient</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Doctor</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Diagnosis</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Type</th>
                <th className="text-right py-3 px-4 text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {records.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{record.patient}</td>
                  <td className="py-3 px-4 text-sm text-gray-600">{record.doctor}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">{record.date}</td>
                  <td className="py-3 px-4 text-sm text-gray-900">{record.diagnosis}</td>
                  <td className="py-3 px-4">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-lg bg-blue-50 text-blue-700">
                      {record.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <Button variant="ghost" size="sm" icon={<Download className="w-4 h-4" />}>
                      Export
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
