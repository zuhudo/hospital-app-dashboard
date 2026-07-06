import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', patients: 65 },
  { month: 'Feb', patients: 85 },
  { month: 'Mar', patients: 72 },
  { month: 'Apr', patients: 98 },
  { month: 'May', patients: 110 },
  { month: 'Jun', patients: 125 },
  { month: 'Jul', patients: 140 },
];

export function PatientChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="patientGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00897B" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#00897B" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#6B7280' }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            }}
          />
          <Area
            type="monotone"
            dataKey="patients"
            stroke="#00897B"
            strokeWidth={2}
            fill="url(#patientGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
