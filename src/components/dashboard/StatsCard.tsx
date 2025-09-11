import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  trend?: 'up' | 'down' | 'neutral';
  delay?: number;
}

export const StatsCard = ({ 
  title, 
  value, 
  change, 
  icon: Icon, 
  trend = 'neutral',
  delay = 0 
}: StatsCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-accent';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.3, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className="stats-card group"
    >
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground mb-1">
            {title}
          </p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-2xl font-bold text-foreground">
              {value}
            </h3>
            {change && (
              <span className={`text-sm font-medium ${getTrendColor()}`}>
                {change}
              </span>
            )}
          </div>
        </div>
        
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.3 }}
          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
        >
          <Icon className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    </motion.div>
  );
};