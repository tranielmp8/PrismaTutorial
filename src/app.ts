import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();
// top level await

// const users = await prisma.user.findMany({orderBy: {name: 'asc'}});
// const users = await prisma.user.findMany({where: {email: {endsWith: 'gmail.com'}}});

const user = await prisma.user.update({
  where: {id: 5},
  data: {name: 'BigBowser'}
})

console.log(user)

// const users = await prisma.user.createMany({
//   data: [
//     {
//       email: "mario@gmail.com",
//       name: "Super Mario",
//       username: "smario",
//     },
//     {
//       email: "luigi@gmail.com",
//       name: "Luigi",
//       username: "luigi123",
//     },
//     {
//       email: "peach@gmail.com",
//       name: "Princess Peach",
//       username: "peachy",
//     },
//     {
//       email: "bowser@gmail.com",
//       name: "Bowser",
//       username: "kingkoopa",
//     },
//     {
//       email: "toad@gmail.com",
//       name: "Toad",
//       username: "toadstool",
//     },
//     {
//       email: "yoshi@gmail.com",
//       name: "Yoshi",
//       username: "yoshifan",
//     },
//     {
//       email: "donkeykong@gmail.com",
//       name: "Donkey Kong",
//       username: "dkong",
//     },
//     {
//       email: "wario@gmail.com",
//       name: "Wario",
//       username: "Wbadmario",
//     },
//     {
//       email: "waluigi@gmail.com",
//       name: "Waluigi",
//       username: "waluigism",
//     },
//   ],
// });

// console.log(users)