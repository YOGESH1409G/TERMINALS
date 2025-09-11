import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  // Auto-redirect to dashboard after 3 seconds for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <motion.div
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-16 h-16 rounded-2xl primary-gradient flex items-center justify-center"
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl xl:text-6xl font-bold text-foreground"
            >
              StudyGuide
            </motion.h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl xl:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Your Digital Guidance Platform for Academic Success and Career Growth
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 mb-12"
          >
            <div className="flex items-center gap-3 text-foreground">
              <BookOpen className="w-6 h-6 text-primary" />
              <span className="font-medium">Course Recommendations</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <GraduationCap className="w-6 h-6 text-secondary" />
              <span className="font-medium">College Finder</span>
            </div>
            <div className="flex items-center gap-3 text-foreground">
              <TrendingUp className="w-6 h-6 text-accent" />
              <span className="font-medium">Career Pathways</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-4"
        >
          <Button
            size="lg"
            className="primary-gradient text-white px-8 py-6 text-lg font-medium hover:scale-105 transition-transform gap-3"
            onClick={() => navigate("/dashboard")}
          >
            Enter Dashboard
            <ArrowRight className="w-5 h-5" />
          </Button>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            Redirecting to dashboard in a few seconds...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
