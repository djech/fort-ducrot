import prisma from '@/lib/prisma';

async function main() {
  await prisma.user.create({
    data: {
      name: `djech`,
      email: `jerome.roessler@gmail.com`,
      role: 'ADMIN',
    },
  });

  await prisma.member.create({
    data: {
      name: `Lefevbre`,
      firstname: `Yves`,
      description: `"Impossible n'est pas français" - Napoléon 1er`,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
