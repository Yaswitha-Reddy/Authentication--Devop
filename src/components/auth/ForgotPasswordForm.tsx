import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ForgotPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const validateEmail = () => {
    if (!email) {
      setError('Email is required');
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email is invalid');
      return false;
    }
    
    setError('');
    return true;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };
  
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center"
      >
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
            <Mail size={32} className="text-green-600 dark:text-green-400" />
          </div>
        </div>
        
        <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-2">Check your email</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          We've sent a password reset link to <span className="font-medium">{email}</span>
        </p>
        
        <Link to="/login">
          <Button variant="outline" fullWidth>
            Back to Sign In
          </Button>
        </Link>
      </motion.div>
    );
  }
  
  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Enter your email address and we'll send you a link to reset your password.
      </p>
      
      {error && (
        <motion.div 
          className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {error}
        </motion.div>
      )}
      
      <div className="space-y-4">
        <Input
          id="email"
          name="email"
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          icon={<Mail size={18} className="text-gray-500 dark:text-gray-400" />}
          value={email}
          onChange={handleChange}
          error={error}
          required
        />
        
        <Button
          type="submit"
          variant="primary"
          fullWidth
          isLoading={isSubmitting}
          icon={<KeyRound size={18} />}
        >
          Reset Password
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Remember your password?{' '}
            <Link to="/login" className="font-medium text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </motion.form>
  );
};

export default ForgotPasswordForm;