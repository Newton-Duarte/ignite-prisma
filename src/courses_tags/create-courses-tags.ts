import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesTags.create({
    data: {
      course_id: '42b145c6-4809-4832-a746-f96d04518973',
      tag_id: 'c9ae2a9e-be90-45f4-a97a-8e7c89bd879b',
    }
  });

  console.log(result);
}

main();