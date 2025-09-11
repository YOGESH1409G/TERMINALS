import { motion } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";
import heroImage from "@/assets/dashboard-hero.jpg";

interface WelcomeBannerProps {
  studentName: string;
}

export const WelcomeBanner = ({ studentName }: WelcomeBannerProps) => {
  const firstName = studentName.split(' ')[0];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl lg:rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-6 md:p-8 lg:p-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Students learning" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-6 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 mb-3"
          >
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-sm font-medium text-primary">Welcome back!</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3"
          >
            Hi, {firstName}! 👋
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl"
          >
            Ready to explore new opportunities? Your personalized recommendations are waiting.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="hidden sm:flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card/80 backdrop-blur-sm rounded-xl lg:rounded-2xl border border-border/50"
        >
          <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-accent/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 lg:w-6 lg:h-6 text-accent" />
          </div>
          <div>
            <p className="text-xs lg:text-sm font-medium text-foreground">Growth This Week</p>
            <p className="text-base lg:text-lg font-bold text-accent">+23%</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
      >
        <div className="w-10 h-10 rounded-full bg-primary/20" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [-10, 10, -10],
          x: [-5, 5, -5]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute bottom-4 left-4 w-16 h-16 rounded-2xl bg-secondary/10 rotate-12"
      />
    </motion.div>
  );
};