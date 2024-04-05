"use server"

import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient();

export async function createUser(username:string,password:string) {
    const result = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    console.log(result);
    return ({
      mess: "user created",
      result: result,
    });
  }