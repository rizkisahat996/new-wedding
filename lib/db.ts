import { PrismaClient } from '@prisma/client';
import { slugify } from './utils';

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  let prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;

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