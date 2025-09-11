import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  TrendingUp, 
  Calendar,
  User,
  Settings,
  HelpCircle,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "courses", label: "Courses", icon: BookOpen },
  { id: "colleges", label: "Colleges", icon: GraduationCap },
  { id: "careers", label: "Career Paths", icon: TrendingUp },
  { id: "timeline", label: "Timeline", icon: Calendar },
];

const bottomItems = [
  { id: "profile", label: "Profile", icon: User },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "help", label: "Help", icon: HelpCircle },
];

export const Sidebar = ({ activeTab, onTabChange, isOpen, onClose }: SidebarProps) => {
  return (
    <AnimatePresence>
      {/* Mobile Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}

      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        exit={{ x: -280 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed left-0 top-0 z-40 h-screen w-70 bg-card border-r border-border lg:translate-x-0"
      >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl primary-gradient flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-foreground">StudyGuide</h1>
                <p className="text-sm text-muted-foreground">Digital Platform</p>
              </div>
            </div>
            {/* Close button for mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="lg:hidden"
            >
              <X className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className={cn(
                      "w-full justify-start gap-3 h-12 text-left font-medium transition-all duration-200",
                      isActive && "primary-gradient text-white shadow-lg"
                    )}
                    onClick={() => onTabChange(item.id)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Button>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Navigation */}
        <div className="p-4 border-t border-border">
          <nav className="space-y-2">
            {bottomItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                >
                  <Button
                    variant={isActive ? "secondary" : "ghost"}
                    className="w-full justify-start gap-3 h-10 text-left"
                    onClick={() => onTabChange(item.id)}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Button>
                </motion.div>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.aside>
    </AnimatePresence>
  );
};