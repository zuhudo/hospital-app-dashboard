import { Eye, Edit, Trash2 } from 'lucide-react';
import type { Patient } from '../../types';

interface PatientTableProps {
  patients: Patient[];
  loading?: boolean;
}

export function PatientTable({ patients, loading }: PatientTableProps) {
  if (loading) {
    return (
      <div className="animate-pulse space-y-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="h-16 bg-gray-100 rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Patient
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Contact
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Blood Group
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Gender
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Joined
            </th>
            <th className="text-right py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {patients.map((patient) => (
            <tr key={patient.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-3 px-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary-100 rounded-xl flex items-center justify-center">
                    <span className="text-primary-600 font-semibold text-sm">
                      {patient.first_name[0]}
                      {patient.last_name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {patient.first_name} {patient.last_name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {patient.email}
                    </p>
                  </div>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                {patient.phone}
              </td>
              <td className="py-3 px-4">
                {patient.blood_group ? (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-red-50 text-red-700">
                    {patient.blood_group}
                  </span>
                ) : (
                  <span className="text-gray-400 text-sm">—</span>
                )}
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                {patient.gender}
              </td>
              <td className="py-3 px-4 text-sm text-gray-500">
                {new Date(patient.created_at).toLocaleDateString()}
              </td>
              <td className="py-3 px-4 text-right">
                <div className="flex items-center justify-end gap-1">
                  <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                    <Eye className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
                    <Edit className="w-4 h-4 text-gray-400" />
                  </button>
                  <button className="p-1.5 rounded-lg hover:bg-red-50 transition-colors">
                    <Trash2 className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
