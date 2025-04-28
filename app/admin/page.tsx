import { authGuard } from '@/lib/auth';
import { Metadata } from 'next';
import InvitationFormWrapper from '@/components/admin/InvitationFormWrapper';

export const metadata: Metadata = {
  title: 'Admin Dashboard - Wedding Invitation',
  description: 'Create and manage wedding invitations',
};

export default function AdminPage() {
  // Server component - check authentication
  authGuard();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Wedding Invitation Admin
          </h1>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        <InvitationFormWrapper />
      </main>
    </div>
  );
}