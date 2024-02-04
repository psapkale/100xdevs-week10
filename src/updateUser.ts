import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface UserParams {
   firstName: string;
   lastName: string;
}

async function updateUser(email: string, { firstName, lastName }: UserParams) {
   const newUser = await prisma.user.update({
      where: { email },
      data: {
         firstName,
         lastName,
      },
   });

   console.log(newUser);
}

updateUser('admin1@mail.com', {
   firstName: 'new name',
   lastName: 'singh',
});
