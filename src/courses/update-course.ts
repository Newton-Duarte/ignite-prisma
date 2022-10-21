import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.update({
    where: {
      id: '7c661ba2-b09a-467b-a3cd-4d7852016a59',
    },
    data: {
      description: 'O melhor curso de React.js, construa 15 projetos.'
    }
  })

  console.log(result);
}

main();