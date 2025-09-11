import { motion } from "framer-motion";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts";

const careerGrowthData = [
  { stage: 'Entry Level', salary: 300000, years: '0-2' },
  { stage: 'Mid Level', salary: 600000, years: '3-5' },
  { stage: 'Senior Level', salary: 1200000, years: '6-8' },
  { stage: 'Management', salary: 2000000, years: '9+' },
];

const fieldDistribution = [
  { name: 'Technology', value: 35, color: 'hsl(217, 91%, 60%)' },
  { name: 'Finance', value: 25, color: 'hsl(262, 83%, 58%)' },
  { name: 'Healthcare', value: 20, color: 'hsl(142, 76%, 36%)' },
  { name: 'Education', value: 12, color: 'hsl(45, 93%, 47%)' },
  { name: 'Others', value: 8, color: 'hsl(220, 9%, 46%)' },
];

export const CareerChart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="dashboard-card p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Career Growth Projection
        </h3>
        <p className="text-sm text-muted-foreground">
          Average salary progression in your field over time
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Salary Growth Chart */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">
            Salary Growth (Technology)
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={careerGrowthData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="stage" 
                className="text-xs"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `₹${value / 100000}L`}
              />
              <Tooltip
                formatter={(value: number) => [`₹${(value / 100000).toFixed(1)}L`, 'Salary']}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Bar 
                dataKey="salary" 
                fill="url(#salaryGradient)"
                radius={[4, 4, 0, 0]}
              />
              <defs>
                <linearGradient id="salaryGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
                  <stop offset="100%" stopColor="hsl(262, 83%, 58%)" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Field Distribution */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-4">
            Popular Career Fields
          </h4>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={fieldDistribution}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {fieldDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value: number) => [`${value}%`, 'Share']}
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          
          {/* Legend */}
          <div className="flex flex-wrap gap-2 mt-4">
            {fieldDistribution.map((field, index) => (
              <div key={index} className="flex items-center gap-2 text-xs">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: field.color }}
                />
                <span className="text-muted-foreground">
                  {field.name} ({field.value}%)
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};