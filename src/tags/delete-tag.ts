import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.tags.delete({
    where: {
      id: '3241923b-4dd5-4366-a04c-a4437fb92229'
    }
  });

  console.log(result);
}

main();