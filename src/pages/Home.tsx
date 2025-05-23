import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Key, Lock, UserCheck, Server, Zap, User as UserIcon } from 'lucide-react';
import Button from '../components/ui/Button';
import Navbar from '../components/layout/Navbar';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Shield size={24} className="text-purple-600 dark:text-purple-400" />,
      title: 'Secure Authentication',
      description: 'Industry-standard security protocols to protect user data and prevent unauthorized access.',
    },
    {
      icon: <Key size={24} className="text-purple-600 dark:text-purple-400" />,
      title: 'Password Recovery',
      description: 'Simple and secure password reset process to help users regain access to their accounts.',
    },
    {
      icon: <Lock size={24} className="text-purple-600 dark:text-purple-400" />,
      title: 'Data Encryption',
      description: 'End-to-end encryption ensures your sensitive information remains private and secure.',
    },
    {
      icon: <UserCheck size={24} className="text-purple-600 dark:text-purple-400" />,
      title: 'User Profiles',
      description: 'Customizable user profiles with personal information and preferences.',
    },
    {
      icon: <Server size={24} className="text-purple-600 dark:text-purple-400" />,
      title: 'Minimal Backend',
      description: 'Lightweight backend implementation focused on essential functionality.',
    },
    {
      icon: <Zap size={24} className="text-purple-600 dark:text-purple-400" />,
      title: 'Fast Performance',
      description: 'Optimized for speed with minimal loading times and responsive design.',
    },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-300/30 to-pink-300/30 dark:from-purple-900/20 dark:to-pink-800/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-300/30 to-teal-300/30 dark:from-blue-900/20 dark:to-teal-800/20 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Modern <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">Authentication</span> System
            </motion.h1>
            
            <motion.p 
              className="mt-6 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              A beautiful, secure, and minimal authentication system with a stunning user interface
              designed for modern web applications.
            </motion.p>
            
            <motion.div 
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/register">
                <Button size="lg" variant="primary">
                  Get Started
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline">
                  Sign In
                </Button>
              </Link>
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <motion.div 
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative max-w-5xl w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-indigo-400/10 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl transform rotate-1"></div>
              <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700">
                <img 
                  src="https://images.pexels.com/photos/4050319/pexels-photo-4050319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Authentication Dashboard" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl font-bold text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Key Features
            </motion.h2>
            <motion.p 
              className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Everything you need in a modern authentication system
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="h-12 w-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to get started?
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-purple-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Create your account now and experience our modern authentication system.
          </motion.p>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/register">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Sign Up Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center">
                <UserIcon size={16} className="text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-white">AuthFlow</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            &copy; {new Date().getFullYear()} AuthFlow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;