import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();


// create user 
const user = await prisma.user.create({
  data: {email: 'test@test.com', name: 't', username: "t"}
})

// Create a post
const post = await prisma.post.create({
  data: {title: 'example', body: 'more details', userId: user.id, tags: {create: [ {tag: {create: {name: 'off-topic'}}}, {tag: {create: {name: 'software industry'}}} ]}},
  include: {tags: {include: {tag: true}}, author: true}
})

console.log(post)