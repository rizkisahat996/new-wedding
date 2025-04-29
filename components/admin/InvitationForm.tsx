'use client';

import React, { useState } from 'react';

interface InvitationFormProps {
  onInvitationCreated: () => void;
}

export default function InvitationForm({ onInvitationCreated }: InvitationFormProps) {
  const [guestName, setGuestName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!guestName.trim()) {
      setError('Guest name is required');
      return;
    }
    
    setIsLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const response = await fetch('/api/invitations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guestName: guestName.trim() }),
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to create invitation');
      }
      
      setSuccess(`Invitation for "${guestName}" created successfully!`);
      setGuestName('');
      
      onInvitationCreated();
      
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">Create New Invitation</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          {success}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="guestName" className="block text-gray-700 mb-1">
            Guest Name (e.g., "John's Family")
          </label>
          <input
            type="text"
            id="guestName"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
            placeholder="Enter guest name"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={isLoading}
          className="py-2 px-4 bg-gold text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold disabled:opacity-70"
        >
          {isLoading ? 'Creating...' : 'Create Invitation'}
        </button>
      </form>
    </div>
  );
}