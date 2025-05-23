import React from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import Navbar from '../components/layout/Navbar';
import { BookOpen, Bell, Settings, Calendar, Users, Inbox, LineChart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  const statCards = [
    { id: 1, label: 'Total Projects', value: '12', icon: BookOpen, color: 'bg-blue-500' },
    { id: 2, label: 'Pending Tasks', value: '8', icon: Calendar, color: 'bg-yellow-500' },
    { id: 3, label: 'Team Members', value: '24', icon: Users, color: 'bg-green-500' },
    { id: 4, label: 'Messages', value: '6', icon: Inbox, color: 'bg-purple-500' },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Welcome back, {user?.name}!
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Here's what's happening with your projects today.
          </p>
        </motion.div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className={`rounded-full p-3 ${stat.color} bg-opacity-20 dark:bg-opacity-20`}>
                    <stat.icon className={`h-6 w-6 ${stat.color} text-opacity-80 dark:text-opacity-80`} />
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</p>
                    <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">Activity Overview</h2>
                <div className="flex space-x-2">
                  <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Bell size={18} />
                  </button>
                  <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <Settings size={18} />
                  </button>
                </div>
              </div>
              
              <div className="h-64 flex items-center justify-center">
                <LineChart className="h-16 w-16 text-gray-400" />
                <p className="ml-4 text-gray-500 dark:text-gray-400">Activity chart will appear here</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <div className="p-6">
              <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Recent Updates</h2>
              
              <div className="space-y-4">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                      <Users size={16} className="text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        New team member joined
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {index + 1} hour{index !== 0 ? 's' : ''} ago
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;