"use client";
import React, { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";
import { motion } from "framer-motion";
import { 
  FiGithub, 
  FiEye, 
  FiHeart, 
  FiStar, 
  FiGitPullRequest, 
  FiUsers, 
  FiMapPin, 
  FiBriefcase,
  FiActivity,
  FiCode,
  FiTrendingUp
} from "react-icons/fi";
import { useTheme } from "next-themes";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

interface GithubStats {
  username: string;
  name: string;
  avatar: string;
  bio: string;
  location: string;
  company: string;
  repos: number;
  followers: number;
  following: number;
  stars: number;
  hireable: boolean;
  topRepo: {
    name: string;
    stars: number;
    url: string;
  } | null;
}

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export default function StatsPage() {
  const [githubData, setGithubData] = useState<GithubStats | null>(null);
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Fetch GitHub stats from our API
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/github");
        const data = await res.json();
        setGithubData(data);
        
        // Fetch contributions calendar (fetching enough to cover Jan 2025)
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${data.username}?last=600`);
        const contribData = await contribRes.json();
        
        // Filter only from Jan 2025 onwards
        const filteredContribs = contribData.contributions.filter((d: ContributionDay) => {
          const date = new Date(d.date);
          return date >= new Date("2025-01-01");
        });

        const sortedContribs = filteredContribs.sort(
          (a: ContributionDay, b: ContributionDay) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        setContributions(sortedContribs);


      } catch (err) {
        console.error("Failed to fetch stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();

    // Mock views and likes logic (in a real app, this would be a DB call)
    const storedViews = localStorage.getItem("portfolio_views") || "0";
    const newViews = parseInt(storedViews) + 1;
    localStorage.setItem("portfolio_views", newViews.toString());
    setViews(newViews + 1200); // Adding base to look real-time

    const storedLikes = localStorage.getItem("portfolio_likes") || "84";
    setLikes(parseInt(storedLikes));
  }, []);

  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem("portfolio_likes", newLikes.toString());
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        <header className="mb-12">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4"
          >
            Stats & <span className="text-primary italic">Metrics</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-foreground/60 text-lg max-w-2xl"
          >
            Real-time updates of my digital presence, project metrics, and GitHub activity.
          </motion.p>
        </header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Portfolio Stats */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FiActivity className="text-primary" /> About This Portfolio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <StatCard 
                icon={<FiEye />} 
                title="Total Views" 
                value={views.toLocaleString()} 
                subtitle="Page interactions"
              />
              <StatCard 
                icon={<FiHeart />} 
                title="Appreciation" 
                value={likes.toLocaleString()} 
                subtitle="Likes from visits"
                action={
                  <button 
                    onClick={handleLike}
                    className="mt-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95"
                  >
                    Love this portfolio?
                  </button>
                }
              />
              <StatCard 
                icon={<FiTrendingUp />} 
                title="Uptime" 
                value="99.9%" 
                subtitle="Live status"
              />
            </div>
          </motion.div>

          {/* GitHub Detail Section */}
          <motion.div variants={itemVariants} className="md:col-span-3 mt-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <FiGithub className="text-primary" /> GitHub Activity
            </h2>
            
            <div className="bg-white/10 dark:bg-white/5 border border-border rounded-3xl p-6 md:p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-8">
                {githubData?.avatar && (
                  <Image 
                    src={githubData.avatar} 
                    alt={githubData.name} 
                    width={96}
                    height={96}
                    className="rounded-3xl border-4 border-primary/20" 
                  />
                )}
                <div>
                  <h3 className="text-2xl font-bold">{githubData?.name}</h3>
                  <p className="text-foreground/60">@{githubData?.username}</p>
                  <div className="flex flex-wrap gap-4 mt-4 text-sm">
                    {githubData?.location && <span className="flex items-center gap-1"><FiMapPin /> {githubData.location}</span>}
                    {githubData?.company && <span className="flex items-center gap-1"><FiBriefcase /> {githubData.company}</span>}
                    {githubData?.hireable && <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-500 text-xs font-bold">HIREABLE</span>}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <MiniStat icon={<FiStar />} label="Total Stars" value={githubData?.stars || 0} />
                <MiniStat icon={<FiCode />} label="Public Repos" value={githubData?.repos || 0} />
                <MiniStat icon={<FiUsers />} label="Followers" value={githubData?.followers || 0} />
                <MiniStat icon={<FiUsers />} label="Following" value={githubData?.following || 0} />
              </div>

              {contributions.length > 0 && (
                <div className="mt-8 pt-8 border-t border-border overflow-hidden">
                  <h4 className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-6">Contributions Calendar</h4>
                  <div className="overflow-x-auto pb-4 custom-scrollbar">
                    <ActivityCalendar 
                      data={contributions} 
                      theme={{
                        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
                      }}
                      colorScheme={theme === 'dark' ? 'dark' : 'light'}
                      fontSize={12}
                    />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Top Repo Card */}
          {githubData?.topRepo && (
             <motion.div variants={itemVariants} className="md:col-span-1 mt-6">
                <div className="h-full bg-primary/5 border border-primary/20 rounded-3xl p-6">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">Top Repository</span>
                  <h3 className="text-xl font-extrabold mt-2 mb-4">{githubData.topRepo.name}</h3>
                  <div className="flex items-center gap-4 text-sm mb-6">
                    <span className="flex items-center gap-1 font-bold text-yellow-500"><FiStar /> {githubData.topRepo.stars}</span>
                    <span className="flex items-center gap-1"><FiGitPullRequest /> Open Source</span>
                  </div>
                  <a 
                    href={githubData.topRepo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-extrabold hover:underline"
                  >
                    View Project <FiGithub />
                  </a>
                </div>
             </motion.div>
          )}

          {/* More stats placeholder/Additional Metrics */}
          <motion.div variants={itemVariants} className="md:col-span-2 mt-6">
            <div className="h-full bg-white/5 border border-border rounded-3xl p-6 flex flex-col justify-center">
              <p className="text-foreground/40 text-center italic">
                &quot;Code is like humor. When you have to explain it, it’s bad.&quot; – Cory House
              </p>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  subtitle: string;
  action?: React.ReactNode;
}

function StatCard({ icon, title, value, subtitle, action }: StatCardProps) {
  return (
    <div className="bg-white/10 dark:bg-white/5 border border-border rounded-3xl p-8 flex flex-col items-center text-center backdrop-blur-sm group hover:border-primary/50 transition-all">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-foreground/40 uppercase tracking-widest">{title}</h3>
      <p className="text-4xl font-black mt-2 mb-1">{value}</p>
      <p className="text-sm text-foreground/60">{subtitle}</p>
      {action}
    </div>
  );
}

interface MiniStatProps {
  icon: React.ReactNode;
  label: string;
  value: number | string;
}

function MiniStat({ icon, label, value }: MiniStatProps) {
  return (
    <div className="bg-white/5 p-4 rounded-2xl flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-primary">{icon}</span>
        <span className="text-xs font-bold text-foreground/60 uppercase">{label}</span>
      </div>
      <span className="text-lg font-black">{value}</span>
    </div>
  );
}

