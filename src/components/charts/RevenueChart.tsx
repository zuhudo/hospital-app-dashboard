import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 12400 },
  { month: 'Feb', revenue: 15800 },
  { month: 'Mar', revenue: 14200 },
  { month: 'Apr', revenue: 18600 },
  { month: 'May', revenue: 16900 },
  { month: 'Jun', revenue: 21300 },
  { month: 'Jul', revenue: 24100 },
];

export function RevenueChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
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
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            formatter={(value) => [`$${Number(value).toLocaleString()}`, 'Revenue']}
            contentStyle={{
              borderRadius: '12px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            }}
          />
          <Bar
            dataKey="revenue"
            fill="#00897B"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
