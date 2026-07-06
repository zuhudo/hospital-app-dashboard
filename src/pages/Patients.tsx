import { Plus, Search, Filter } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { PatientTable } from '../components/tables/PatientTable';
import { usePatients } from '../hooks/usePatients';

export function Patients() {
  const { patients, loading } = usePatients();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Patients</h1>
          <p className="text-gray-500 mt-1">
            Manage patient records and information
          </p>
        </div>
        <Button icon={<Plus className="w-4 h-4" />}>Add Patient</Button>
      </div>

      {/* Filters */}
      <Card>
        <div className="flex items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500"
            />
          </div>
          <Button variant="secondary" icon={<Filter className="w-4 h-4" />}>
            Filters
          </Button>
        </div>
      </Card>

      {/* Table */}
      <Card padding="none">
        <PatientTable patients={patients} loading={loading} />
      </Card>
    </div>
  );
}
