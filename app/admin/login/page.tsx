import LoginForm from '@/components/admin/LoginForm';
import { isAuthenticated } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Login - Wedding Invitation',
  description: 'Login to manage wedding invitations',
};

export default function LoginPage() {
  // If already authenticated, redirect to admin dashboard
  if (isAuthenticated()) {
    redirect('/admin');
  }
  
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-800">
            Wedding Admin
          </h1>
          <p className="mt-2 text-gray-600">
            Sign in to manage invitations
          </p>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
}