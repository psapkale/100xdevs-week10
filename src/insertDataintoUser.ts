import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function insertUser(
   email: string,
   password: string,
   firstName: string,
   lastName: string
) {
   const user = await prisma.user.create({
      data: {
         email,
         firstName,
         lastName,
         password,
      },
   });

   console.log(user);
}

insertUser('admin1@mail.com', '123456', 'harkirat', 'singh');

// Erroneous entry will fail the create but the id will still be incremented
