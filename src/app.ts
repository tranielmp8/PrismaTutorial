import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

const user = (await prisma.user.findFirst())!;

const post = await prisma.post.create({
  data: {
    title: 'Changed the db',
    body: 'switched to implicit many to many',
    userId: user.id,
    tags: {create: [{name: 'meta'}, {name: 'prisma'}]}
  }
});

console.log(post)