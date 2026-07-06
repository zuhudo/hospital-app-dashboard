import type { Appointment } from '../../types';
import { clsx } from 'clsx';

interface AppointmentTableProps {
  appointments: Appointment[];
  loading?: boolean;
}

const statusStyles: Record<string, string> = {
  scheduled: 'bg-blue-50 text-blue-700',
  confirmed: 'bg-green-50 text-green-700',
  in_progress: 'bg-yellow-50 text-yellow-700',
  completed: 'bg-emerald-50 text-emerald-700',
  cancelled: 'bg-red-50 text-red-700',
  no_show: 'bg-gray-50 text-gray-700',
};

export function AppointmentTable({ appointments, loading }: AppointmentTableProps) {
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
              Doctor
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date & Time
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {appointments.map((apt) => (
            <tr key={apt.id} className="hover:bg-gray-50 transition-colors">
              <td className="py-3 px-4 text-sm font-medium text-gray-900">
                {apt.patient_name || 'Patient'}
              </td>
              <td className="py-3 px-4">
                <div>
                  <p className="text-sm text-gray-900">
                    {apt.doctor_name || 'Doctor'}
                  </p>
                  <p className="text-xs text-gray-500">
                    {apt.doctor_specialization}
                  </p>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-gray-600">
                {new Date(apt.appointment_date).toLocaleDateString()} •{' '}
                {apt.time_slot}
              </td>
              <td className="py-3 px-4">
                <span className="text-sm text-gray-600 capitalize">
                  {apt.type.replace('_', ' ')}
                </span>
              </td>
              <td className="py-3 px-4">
                <span
                  className={clsx(
                    'inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium capitalize',
                    statusStyles[apt.status] || 'bg-gray-50 text-gray-700'
                  )}
                >
                  {apt.status.replace('_', ' ')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
