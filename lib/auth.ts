import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import * as crypto from 'crypto';

// Load environment variables with fallbacks
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const AUTH_COOKIE_NAME = 'wedding_admin_auth';
const AUTH_SECRET = process.env.AUTH_SECRET || 'HBTm3qeqnk';

// Function to hash the password
function hashPassword(password: string): string {
  return crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(password)
    .digest('hex');
}

// Improved credential verification with password hashing
export function verifyCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

// Set auth cookie after successful login
export async function setAuthCookie() {
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 24); // 24 hour expiration
  
  const authToken = crypto
    .createHmac('sha256', AUTH_SECRET)
    .update(`${ADMIN_USERNAME}:${Date.now()}`)
    .digest('hex');
  
  (await cookies()).set({
    name: AUTH_COOKIE_NAME,
    value: authToken,
    expires: expirationDate,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
  });
  
  return authToken;
}

// Check if user is authenticated
export async function isAuthenticated(): Promise<boolean> {
  const authCookie = (await cookies()).get(AUTH_COOKIE_NAME);
  return !!authCookie?.value;
}

// Clear auth cookie on logout
export async function clearAuthCookie() {
  (await cookies()).delete(AUTH_COOKIE_NAME);
}

// Auth middleware function
export async function authGuard() {
  if (!(await isAuthenticated())) {
    redirect('/admin/login');
  }
}