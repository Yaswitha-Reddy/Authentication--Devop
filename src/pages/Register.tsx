import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import RegisterForm from '../components/auth/RegisterForm';
import { useAuth } from '../hooks/useAuth';

const Register: React.FC = () => {
  const { isAuthenticated } = useAuth();
  
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join our platform and get started today"
    >
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;