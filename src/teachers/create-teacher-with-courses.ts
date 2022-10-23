import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  await prisma.teachers.create({
    data: {
      name: 'Katia Maria',
      courses: {
        createMany: {
          data: [
            {
              name: 'Curso de História',
              description: 'Aprenda sobre a histório do Brasil',
              duration: 100,
            },
            {
              name: 'Curso de Geografia',
              description: 'Saiba tudo sobre placas tectônicas',
              duration: 60,
            }
          ]
        }
      }
    }
  });

  const result2 = await prisma.teachers.findFirst({
    take: -1,
    include: {
      courses: true
    }
  });

  console.log(result2);
}

main();