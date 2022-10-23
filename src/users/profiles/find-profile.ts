import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.profiles.findMany({
    include: {
      user: true
    }
  });

  console.log(result);
}

main();