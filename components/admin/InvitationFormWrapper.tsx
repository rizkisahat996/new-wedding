'use client';

import { useState } from 'react';
import InvitationForm from '@/components/admin/InvitationForm';
import InvitationList from '@/components/admin/InvitationList';

export default function InvitationFormWrapper() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  
  const handleInvitationCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };
  
  return (
    <>
      <InvitationForm onInvitationCreated={handleInvitationCreated} />
      <InvitationList refreshTrigger={refreshTrigger} />
    </>
  );
}