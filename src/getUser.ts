import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getUser(email: string) {
   const user = await prisma.user.findUnique({
      where: {
         email,
      },
   });

   console.log(user);
}

getUser('admin1@mail.com');
