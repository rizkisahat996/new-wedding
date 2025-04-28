import { PrismaClient } from '@prisma/client';
import { slugify } from './utils';


const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// Access global using var notation instead of globalThis
// This is compatible with both Node.js and browsers

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function createInvitation(guestName: string) {
  // Create a slug from the guest name
  const baseSlug = slugify(guestName);
  
  // Check if slug already exists, if so, append a number
  let slug = baseSlug;
  let counter = 1;
  
  while (await prisma.invitation.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  
  // Create the invitation
  const invitation = await prisma.invitation.create({
    data: {
      guestName,
      slug,
    },
  });
  
  return invitation;
}

export async function getInvitationBySlug(slug: string) {
  return prisma.invitation.findUnique({
    where: { slug },
  });
}

export async function getAllInvitations() {
  return prisma.invitation.findMany({
    orderBy: { createdAt: 'desc' },
  });
}