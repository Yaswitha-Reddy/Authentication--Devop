import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import ForgotPasswordForm from '../components/auth/ForgotPasswordForm';
import { useAuth } from '../hooks/useAuth';

const ForgotPassword: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <AuthLayout
      title="Reset password"
      subtitle="Recover access to your account"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
};

export default ForgotPassword;