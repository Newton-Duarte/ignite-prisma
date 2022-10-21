import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Node.js',
      description: 'Aprenda Node.js na prática ao construir 12 projetos do absoluto zero.',
      duration: 500
    }
  });

  console.log(result);
}

main();