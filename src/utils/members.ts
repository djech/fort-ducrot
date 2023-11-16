import { cache } from 'react';
import prisma from '@/lib/prisma';

export const revalidate = 3600; // revalidate the data at most every hour

export const getMembers = cache(async () => {
  const members = await prisma.member.findMany({
    where: { activated: true },
  });
  return {
    props: { members },
    revalidate: 1,
  };
});
