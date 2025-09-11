import { motion } from "framer-motion";
import { Calendar, Clock, DollarSign, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DeadlineCardProps {
  title: string;
  deadline: string;
  type: string;
  amount: string;
  daysLeft: number;
  description: string;
  delay?: number;
}

export const DeadlineCard = ({
  title,
  deadline,
  type,
  amount,
  daysLeft,
  description,
  delay = 0
}: DeadlineCardProps) => {
  const getUrgencyColor = (days: number) => {
    if (days <= 7) return "bg-destructive text-destructive-foreground";
    if (days <= 30) return "bg-yellow-500 text-white";
    return "bg-accent text-accent-foreground";
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'scholarship': return "bg-accent-soft text-accent";
      case 'entrance exam': return "bg-secondary-soft text-secondary";
      case 'college application': return "bg-primary-soft text-primary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.3, 
        delay,
        ease: "easeOut"
      }}
      className="dashboard-card p-4 hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Badge className={getTypeColor(type)}>
            {type}
          </Badge>
          <Badge className={getUrgencyColor(daysLeft)}>
            {daysLeft} days left
          </Badge>
        </div>
        {daysLeft <= 7 && (
          <AlertCircle className="w-5 h-5 text-destructive animate-pulse" />
        )}
      </div>

      <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {description}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-4 h-4" />
          <span>{new Date(deadline).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <DollarSign className="w-4 h-4" />
          <span>{amount}</span>
        </div>
      </div>

      <Button 
        size="sm" 
        className="w-full group-hover:scale-[1.02] transition-transform"
        variant={daysLeft <= 7 ? "default" : "outline"}
      >
        Apply Now
      </Button>
    </motion.div>
  );
};