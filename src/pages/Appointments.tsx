import { Plus, Calendar } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { AppointmentTable } from '../components/tables/AppointmentTable';
import { useState, useEffect } from 'react';
import { api } from '../api/client';
import type { Appointment } from '../types';

export function Appointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await api.get<Appointment[]>('appointments');
        setAppointments(res.data);
      } catch {
        // fallback demo data
        setAppointments([]);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Appointments</h1>
          <p className="text-gray-500 mt-1">
            View and manage all appointments
          </p>
        </div>
        <Button icon={<Plus className="w-4 h-4" />}>New Appointment</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Today', value: '12', color: 'bg-blue-50 text-blue-600' },
          { label: 'This Week', value: '48', color: 'bg-green-50 text-green-600' },
          { label: 'Pending', value: '8', color: 'bg-yellow-50 text-yellow-600' },
          { label: 'Completed', value: '156', color: 'bg-emerald-50 text-emerald-600' },
        ].map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${stat.color}`}>
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card padding="none">
        <AppointmentTable appointments={appointments} loading={loading} />
      </Card>
    </div>
  );
}
