import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  Clock,
  Plus,
  Filter,
  Sparkles,
  School,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  // Organize recommendations by category
  const courseRecommendations = [
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
      title: "B.Tech Artificial Intelligence",
      subtitle: "Tech Institute",
      description: "Cutting-edge program focusing on AI, machine learning, and data science with industry partnerships.",
      category: "Technology",
      rating: 4.7,
      location: "5.1 km away",
      duration: "4 years"
    }
  ];

  const collegeRecommendations = [
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
      title: "Modern Arts & Science College",
      subtitle: "Private Institution",
      description: "Well-equipped college with modern facilities, industry exposure, and excellent placement records.",
      category: "Education",
      rating: 4.6,
      location: "3.8 km away",
      duration: "3-4 years"
    }
  ];

  const careerRecommendations = [
    {
      title: "Software Developer Career Path",
      subtitle: "Technology Field",
      description: "High-growth career with average salary of ₹8,00,000/year. Perfect match for your technical interests and skills.",
      category: "Career",
      rating: 4.8,
      location: "Remote + Office",
      duration: "Career Path"
    },
    {
      title: "Data Scientist Career Path",
      subtitle: "Analytics Field",
      description: "Emerging field with excellent growth prospects. Average salary ₹12,00,000/year with high demand.",
      category: "Career",
      rating: 4.9,
      location: "Hybrid",
      duration: "Career Path"
    }
  ];

  if (activeTab !== "dashboard") {
    return (
      <div className="min-h-screen w-full bg-background flex">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
        <div className="flex-1 w-full lg:ml-70">
          <TopNavigation 
            studentName={studentName}
            onMenuClick={() => setSidebarOpen(true)}
          />
          <main className="w-full max-w-none p-4 lg:p-6">
            <div className="dashboard-card p-6 lg:p-8 text-center">
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
    <div className="min-h-screen w-full bg-background flex">
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="flex-1 w-full lg:ml-70">
        <TopNavigation 
          studentName={studentName}
          onMenuClick={() => setSidebarOpen(true)}
        />
        
        <main className="w-full max-w-none p-4 lg:p-6 space-y-6 lg:space-y-8">
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Left Column - Recommendations with Tabs */}
            <div className="lg:col-span-2 space-y-4 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-between"
              >
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Recommendations for You
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="dashboard-card p-2"
              >
                <Tabs defaultValue="courses" className="w-full">
                  <TabsList className="grid w-full grid-cols-3 mb-6">
                    <TabsTrigger value="courses" className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      <span className="hidden sm:inline">Courses</span>
                    </TabsTrigger>
                    <TabsTrigger value="colleges" className="flex items-center gap-2">
                      <School className="w-4 h-4" />
                      <span className="hidden sm:inline">Colleges</span>
                    </TabsTrigger>
                    <TabsTrigger value="careers" className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span className="hidden sm:inline">Careers</span>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="courses" className="space-y-4 mt-0">
                    {courseRecommendations.map((rec, index) => (
                      <RecommendationCard
                        key={index}
                        {...rec}
                        delay={0.2 + index * 0.1}
                      />
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="colleges" className="space-y-4 mt-0">
                    {collegeRecommendations.map((rec, index) => (
                      <RecommendationCard
                        key={index}
                        {...rec}
                        delay={0.2 + index * 0.1}
                      />
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="careers" className="space-y-4 mt-0">
                    {careerRecommendations.map((rec, index) => (
                      <RecommendationCard
                        key={index}
                        {...rec}
                        delay={0.2 + index * 0.1}
                      />
                    ))}
                  </TabsContent>
                </Tabs>
              </motion.div>
            </div>

            {/* Right Column - Deadlines */}
            <div className="space-y-4 lg:space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between"
              >
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <Clock className="w-5 h-5 text-destructive" />
                  Upcoming Deadlines
                </h2>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="dashboard-card p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Career Path Preview</h2>
            </div>
            <CareerChart />
          </motion.div>
        </main>
      </div>
    </div>
  );
};