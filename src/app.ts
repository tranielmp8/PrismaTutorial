import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();
// top level await
const user = await prisma.user.findFirst();
console.log(user)

// await prisma.user.deleteMany();


// async function main() {
//   const user = await prisma.user.findFirst();
//   console.log(user);

//   // const user = await prisma.user.create({
//   //   data: {
//   //     email: 'super@gmail.com',
//   //     name: 'Super Mario',
//   //     username: 'SMario'
//   //   },
//   // })

//   console.log(user);
// }

// main() 
//   .then(async () => {
//     await prisma.$disconnect();

//   })
//   .catch(async (e) => {
//     console.log(e)
//     await prisma.$disconnect();
//     process.exit(1);
//   })
