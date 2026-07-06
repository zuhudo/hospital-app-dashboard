import {
  Users,
  Calendar,
  Stethoscope,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react';
import { Card, CardHeader } from '../components/ui/Card';
import { PatientChart } from '../components/charts/PatientChart';
import { RevenueChart } from '../components/charts/RevenueChart';

const stats = [
  {
    label: 'Total Patients',
    value: '1,284',
    change: '+12.5%',
    icon: Users,
    color: 'bg-primary-100 text-primary-600',
  },
  {
    label: 'Appointments Today',
    value: '48',
    change: '+8.2%',
    icon: Calendar,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    label: 'Active Doctors',
    value: '24',
    change: '+2',
    icon: Stethoscope,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    label: 'Revenue (Monthly)',
    value: '$24,100',
    change: '+15.3%',
    icon: TrendingUp,
    color: 'bg-green-100 text-green-600',
  },
];

const recentAppointments = [
  { patient: 'John Doe', doctor: 'Dr. Sarah Johnson', time: '10:00 AM', status: 'confirmed' },
  { patient: 'Jane Smith', doctor: 'Dr. Michael Chen', time: '11:30 AM', status: 'scheduled' },
  { patient: 'Bob Wilson', doctor: 'Dr. Emily Williams', time: '2:00 PM', status: 'completed' },
  { patient: 'Alice Brown', doctor: 'Dr. James Brown', time: '3:30 PM', status: 'scheduled' },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">
                  {stat.value}
                </p>
                <div className="flex items-center gap-1 mt-2">
                  <ArrowUpRight className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-xs font-medium text-green-600">
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-400">vs last month</span>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader title="Patient Visits" subtitle="Last 7 months" />
          <PatientChart />
        </Card>
        <Card>
          <CardHeader title="Revenue" subtitle="Last 7 months" />
          <RevenueChart />
        </Card>
      </div>

      {/* Recent Appointments */}
      <Card>
        <CardHeader
          title="Today's Appointments"
          subtitle="Recent scheduled appointments"
          action={
            <button className="text-sm text-primary-600 font-medium hover:text-primary-700">
              View All
            </button>
          }
        />
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Patient
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Doctor
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Time
                </th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentAppointments.map((apt, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">
                    {apt.patient}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {apt.doctor}
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-600">
                    {apt.time}
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-50 text-green-700 capitalize">
                      {apt.status}
                    </span>
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
