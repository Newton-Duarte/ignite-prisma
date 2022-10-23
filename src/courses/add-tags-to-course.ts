import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.update({
    where: {
      id: '3cf13f04-7f6e-4abf-a84c-0577c17698ff'
    },
    data: {
      courses_tags: {
        createMany: {
          data: [
            {
              tag_id: 'c9ae2a9e-be90-45f4-a97a-8e7c89bd879b'
            },
            {
              tag_id: 'c53945d1-a45a-447f-b2bb-c3806503cf98'
            }
          ]
        }
      }
    }
  });

  const result = await prisma.courses.findMany({
    where: {
      id: '3cf13f04-7f6e-4abf-a84c-0577c17698ff'
    },
    include: {
      courses_tags: true,
    }
  });

  console.log(result);
}

main();