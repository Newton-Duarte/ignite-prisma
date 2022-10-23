import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: 'Curso de Kubernetes',
      description: 'Aprenda a gerenciar seus containers',
      duration: 50,
      teacher_id: '89cf5581-bfce-4845-8aff-0067a06e3d16'
    }
  });

  const result2 = await prisma.courses.findFirst({
    take: -1,
    include: {
      teacher: true
    }
  });

  console.log(result2);
}

main();