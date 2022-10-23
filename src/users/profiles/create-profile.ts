import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.profiles.create({
    data: {
      firstName: 'Newton',
      lastName: 'Duarte',
    }
  });

  console.log(result);
}

main();