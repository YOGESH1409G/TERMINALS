import { motion } from "framer-motion";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RecommendationCardProps {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  rating?: number;
  location?: string;
  duration?: string;
  delay?: number;
}

export const RecommendationCard = ({
  title,
  subtitle,
  description,
  category,
  rating,
  location,
  duration,
  delay = 0
}: RecommendationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -4,
        transition: { duration: 0.2 }
      }}
      className="recommendation-card group"
    >
      <div className="flex items-start justify-between mb-3">
        <Badge 
          variant="secondary" 
          className="bg-primary-soft text-primary border-0"
        >
          {category}
        </Badge>
        {rating && (
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium text-foreground">{rating}</span>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm font-medium text-muted-foreground mb-2">
        {subtitle}
      </p>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {location && (
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              <span>{location}</span>
            </div>
          )}
          {duration && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{duration}</span>
            </div>
          )}
        </div>

        <Button 
          size="sm" 
          variant="ghost" 
          className="gap-1 text-primary hover:text-primary hover:bg-primary-soft group-hover:gap-2 transition-all"
        >
          Learn More
          <ArrowRight className="w-3 h-3" />
        </Button>
      </div>
    </motion.div>
  );
};