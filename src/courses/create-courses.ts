import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.createMany({
    data: [
      {
        name: 'Curso de React.js',
        description: 'Aprenda React.js construindo 8 projetos.',
        duration: 300
      },
      {
        name: 'Curso de React Native',
        description: 'Aprenda React Native construindo 5 projetos práticos.',
        duration: 250
      }
    ]
  });

  console.log(result);
}

main();