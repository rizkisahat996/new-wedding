import { NextRequest, NextResponse } from 'next/server';
import { createInvitation, getAllInvitations } from '@/lib/db';
import { isAuthenticated } from '@/lib/auth';

export async function POST(request: NextRequest) {
  // Check if user is authenticated
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const { guestName } = await request.json();
    
    if (!guestName || typeof guestName !== 'string' || guestName.trim() === '') {
      return NextResponse.json(
        { error: 'Guest name is required' }, 
        { status: 400 }
      );
    }
    
    const invitation = await createInvitation(guestName.trim());
    
    return NextResponse.json(invitation, { status: 201 });
  } catch (error) {
    console.error('Error creating invitation:', error);
    return NextResponse.json(
      { error: 'Failed to create invitation' }, 
      { status: 500 }
    );
  }
}

export async function GET() {
  // Check if user is authenticated
  if (!isAuthenticated()) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const invitations = await getAllInvitations();
    return NextResponse.json(invitations);
  } catch (error) {
    console.error('Error fetching invitations:', error);
    return NextResponse.json(
      { error: 'Failed to fetch invitations' }, 
      { status: 500 }
    );
  }
}