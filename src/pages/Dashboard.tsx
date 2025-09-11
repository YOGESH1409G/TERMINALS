import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  Clock,
  Plus,
  Filter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { TopNavigation } from "@/components/dashboard/TopNavigation";
import { WelcomeBanner } from "@/components/dashboard/WelcomeBanner";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecommendationCard } from "@/components/dashboard/RecommendationCard";
import { DeadlineCard } from "@/components/dashboard/DeadlineCard";
import { CareerChart } from "@/components/dashboard/CareerChart";

// Import dummy data
import coursesData from "@/data/courses.json";
import collegesData from "@/data/colleges.json";
import deadlinesData from "@/data/deadlines.json";
import careersData from "@/data/careers.json";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const studentName = "Alex Johnson";

  const statsData = [
    {
      title: "Courses Suggested",
      value: coursesData.length,
      change: "+12%",
      icon: BookOpen,
      trend: "up" as const,
    },
    {
      title: "Nearby Colleges",
      value: collegesData.length,
      change: "+8%",
      icon: GraduationCap,
      trend: "up" as const,
    },
    {
      title: "Saved Careers",
      value: careersData.length,
      change: "+15%",
      icon: TrendingUp,
      trend: "up" as const,
    },
    {
      title: "Pending Deadlines",
      value: deadlinesData.length,
      change: "-2",
      icon: Clock,
      trend: "down" as const,
    },
  ];

  const recommendations = [
    {
      title: "B.Sc. Computer Science",
      subtitle: "State University",
      description: "Based on your interests in technology and problem-solving, this comprehensive program covers programming, algorithms, and software development.",
      category: "Technology",
      rating: 4.5,
      location: "2.3 km away",
      duration: "3 years"
    },
    {
      title: "Government Degree College",
      subtitle: "Delhi University",
      description: "Nearby college offering excellent B.A., B.Sc., and B.Com programs with affordable fees and quality education.",
      category: "Education",
      rating: 4.4,
      location: "2.3 km away",
      duration: "3-4 years"
    },
    {
      title: "Software Developer Career Path",
      subtitle: "Technology Field",
      description: "High-growth career with average salary of ₹8,00,000/year. Perfect match for your technical interests and skills.",
      category: "Career",
      rating: 4.8,
      location: "Remote + Office",
      duration: "Career Path"
    }
  ];

  if (activeTab !== "dashboard") {
    return (
      <div className="min-h-screen bg-background flex">
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 ml-70">
          <TopNavigation studentName={studentName} />
          <main className="p-6">
            <div className="dashboard-card p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Page
              </h2>
              <p className="text-muted-foreground">
                This page is under construction. Coming soon with amazing features!
              </p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 ml-70">
        <TopNavigation studentName={studentName} />
        
        <main className="p-6 space-y-8">
          {/* Welcome Banner */}
          <WelcomeBanner studentName={studentName} />

          {/* Quick Stats */}
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-between mb-6"
            >
              <h2 className="text-2xl font-bold text-foreground">Quick Overview</h2>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {statsData.map((stat, index) => (
                <StatsCard
                  key={stat.title}
                  {...stat}
                  delay={0.1 + index * 0.1}
                />
              ))}
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Recommendations */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-between"
              >
                <h2 className="text-2xl font-bold text-foreground">Recommendations for You</h2>
                <Button variant="outline" size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  View All
                </Button>
              </motion.div>
              
              <div className="space-y-4">
                {recommendations.map((rec, index) => (
                  <RecommendationCard
                    key={index}
                    {...rec}
                    delay={0.2 + index * 0.1}
                  />
                ))}
              </div>
            </div>

            {/* Right Column - Deadlines */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between"
              >
                <h2 className="text-xl font-bold text-foreground">Upcoming Deadlines</h2>
                <Button variant="ghost" size="sm">View All</Button>
              </motion.div>
              
              <div className="space-y-4">
                {deadlinesData.slice(0, 4).map((deadline, index) => (
                  <DeadlineCard
                    key={deadline.id}
                    {...deadline}
                    delay={0.1 + index * 0.05}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Career Path Chart */}
          <CareerChart />
        </main>
      </div>
    </div>
  );
};