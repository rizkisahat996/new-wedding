'use client';

import React, { useState, useEffect } from 'react';
import { generateInvitationUrl } from '@/lib/utils';

interface Invitation {
  id: string;
  slug: string;
  guestName: string;
  createdAt: string;
}

interface ApiError extends Error {
  message: string;
}

export default function InvitationList({ refreshTrigger }: { refreshTrigger: number }) {
  const [invitations, setInvitations] = useState<Invitation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Fetch invitations when component mounts or refreshTrigger changes
  useEffect(() => {
    const fetchInvitations = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        const response = await fetch('/api/invitations');
        
        if (!response.ok) {
          throw new Error('Failed to fetch invitations');
        }
        
        const data = await response.json();
        setInvitations(data);
      } catch (err: unknown) {
        const error = err as ApiError;
        setError(error.message || 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchInvitations();
  }, [refreshTrigger]);

  // Copy invitation URL to clipboard
  const copyToClipboard = (slug: string, id: string) => {
    const url = generateInvitationUrl(slug);
    navigator.clipboard.writeText(url)
      .then(() => {
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
      })
      .catch(() => {
        setError('Failed to copy to clipboard');
      });
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading invitations...</div>;
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-md">
        Error: {error}
      </div>
    );
  }

  if (invitations.length === 0) {
    return (
      <div className="bg-gray-100 p-6 rounded-lg text-center">
        No invitations created yet. Create your first invitation above.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <h2 className="text-xl font-semibold p-6 border-b">All Invitations</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Guest Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Invitation Link
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {invitations.map((invitation) => (
              <tr key={invitation.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  {invitation.guestName}
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-500 break-all">
                    {generateInvitationUrl(invitation.slug)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(invitation.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => copyToClipboard(invitation.slug, invitation.id)}
                    className="text-gold hover:text-opacity-80 focus:outline-none"
                  >
                    {copiedId === invitation.id ? 'Copied!' : 'Copy Link'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}