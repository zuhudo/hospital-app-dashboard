import { Receipt, DollarSign, CreditCard, TrendingUp } from 'lucide-react';
import { Card } from '../components/ui/Card';

export function Billing() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Billing & Payments</h1>
        <p className="text-gray-500 mt-1">Track invoices, payments, and revenue</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Revenue', value: '$124,500', icon: DollarSign, color: 'bg-green-100 text-green-600' },
          { label: 'Pending', value: '$8,200', icon: CreditCard, color: 'bg-yellow-100 text-yellow-600' },
          { label: 'Paid This Month', value: '$24,100', icon: Receipt, color: 'bg-blue-100 text-blue-600' },
          { label: 'Growth', value: '+15.3%', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' },
        ].map((stat) => (
          <Card key={stat.label}>
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Invoices</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Invoice</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Patient</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {[
                { id: 'INV-001', patient: 'John Doe', amount: '$200', date: '2024-01-15', status: 'Paid' },
                { id: 'INV-002', patient: 'Jane Smith', amount: '$150', date: '2024-01-14', status: 'Pending' },
                { id: 'INV-003', patient: 'Bob Wilson', amount: '$300', date: '2024-01-13', status: 'Paid' },
              ].map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm font-mono text-gray-600">{inv.id}</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{inv.patient}</td>
                  <td className="py-3 px-4 text-sm font-medium text-gray-900">{inv.amount}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">{inv.date}</td>
                  <td className="py-3 px-4">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-lg ${
                      inv.status === 'Paid' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      {inv.status}
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
