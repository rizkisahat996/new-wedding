import { PrismaClient } from '@prisma/client';
import { slugify } from './utils';

// Create a type-safe PrismaClient singleton
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Fix the global type declaration
declare global {
  // This properly extends the globalThis interface
  var prisma: ReturnType<typeof prismaClientSingleton> | undefined;
}

// Access global using var notation instead of globalThis
// This is compatible with both Node.js and browsers
export const prisma = global.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

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