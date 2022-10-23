import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.users.create({
    data: {
      email: 'newton2@test.com',
      profile: {
        create: {
          firstName: 'Newton 2',
          lastName: 'Duarte 2'
        }
      }
    }
  });

  console.log(result);
}

main();