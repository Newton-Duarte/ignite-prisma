import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesTags.findMany({
    include: {
      course: true,
      tag: true,
    }
  });

  console.log(result);
}

main();