import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.users.create({
    data: {
      email: 'newton@test.com',
      profile_id: '1e202601-6552-43b4-9ddc-bff9f6c3a31e',
    }
  });

  console.log(result);
}

main();