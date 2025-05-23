import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  icon,
  fullWidth = true,
  className = '',
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const isPasswordField = props.type === 'password';
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  
  const inputType = isPasswordField && showPassword ? 'text' : props.type;
  
  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : ''}`}>
      {label && (
        <label 
          htmlFor={props.id} 
          className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <motion.div
          className={`
            absolute inset-0 rounded-md pointer-events-none
            ${focused ? 'border-2 border-purple-500 dark:border-purple-400' : ''}
            ${error ? 'border-2 border-red-500' : ''}
          `}
          initial={false}
          animate={{ 
            scale: focused ? 1.02 : 1,
            opacity: focused ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
        />
        
        <div className="relative">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          
          <input
            className={`
              block rounded-md shadow-sm w-full
              ${icon ? 'pl-10' : 'pl-4'}
              ${isPasswordField ? 'pr-10' : 'pr-4'}
              py-2 bg-white dark:bg-gray-800 
              border border-gray-300 dark:border-gray-700
              text-gray-900 dark:text-gray-100
              focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              ${error ? 'border-red-500 focus:ring-red-500 dark:focus:ring-red-400' : ''}
              ${className}
            `}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
            type={inputType}
          />
          
          {isPasswordField && (
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
              onClick={handleTogglePassword}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
      </div>
      
      {error && (
        <motion.p 
          className="mt-1 text-sm text-red-600 dark:text-red-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default Input;