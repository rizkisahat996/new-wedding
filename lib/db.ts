import { PrismaClient } from '@prisma/client';
import { slugify } from './utils';


const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function createInvitation(guestName: string) {
  const baseSlug = slugify(guestName);
  
  let slug = baseSlug;
  let counter = 1;
  
  while (await prisma.invitation.findUnique({ where: { slug } })) {
    slug = `${baseSlug}-${counter}`;
    counter++;
  }
  
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