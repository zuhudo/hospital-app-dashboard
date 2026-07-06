import { Plus, Search, Star } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const doctors = [
  { id: '1', name: 'Dr. Sarah Johnson', specialization: 'Cardiology', patients: 124, rating: 4.8, available: true },
  { id: '2', name: 'Dr. Michael Chen', specialization: 'Neurology', patients: 98, rating: 4.9, available: true },
  { id: '3', name: 'Dr. Emily Williams', specialization: 'Pediatrics', patients: 156, rating: 4.7, available: true },
  { id: '4', name: 'Dr. James Brown', specialization: 'Orthopedics', patients: 87, rating: 4.6, available: false },
  { id: '5', name: 'Dr. Lisa Anderson', specialization: 'Dermatology', patients: 112, rating: 4.5, available: true },
];

export function Doctors() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Doctors</h1>
          <p className="text-gray-500 mt-1">Manage doctor profiles and schedules</p>
        </div>
        <Button icon={<Plus className="w-4 h-4" />}>Add Doctor</Button>
      </div>

      <Card>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search doctors..."
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
          />
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <Card key={doctor.id}>
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center">
                <span className="text-primary-600 font-bold text-lg">
                  {doctor.name.split(' ').slice(1).map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                <p className="text-sm text-primary-600">{doctor.specialization}</p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-sm font-medium">{doctor.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {doctor.patients} patients
                  </span>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-lg ${
                      doctor.available
                        ? 'bg-green-50 text-green-700'
                        : 'bg-gray-100 text-gray-500'
                    }`}
                  >
                    {doctor.available ? 'Available' : 'Unavailable'}
                  </span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
