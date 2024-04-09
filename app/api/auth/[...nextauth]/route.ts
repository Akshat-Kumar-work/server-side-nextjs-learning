
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import GoogleProvider from "next-auth/providers/google";


//authentication by email and password
const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: 'email', type: 'text', placeholder: 'Email' },
                password: { label: 'password', type: 'password', placeholder: 'Password' },
              },
              async authorize(credentials:any){
                //fetching credentials
                const username = credentials.username;
                const password = credentials.password;
                //db validations

                return{
                  id:"user1", name:username,password:password,email:"akshat@gmai.com"
                };
              }
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_ID || "",
          clientSecret:process.env.GOOGLE_SECRET || ""
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    //call backs are used to do some changes after the authorization 
    callbacks:{
    //jwt callbacks are used to add something into token etc
          jwt:({token,user})=>{
            console.log(token);
            token.userId="changed user id"
            return token;
          },
          //session call backs to add extra info to session
          session:({session,token,user}:any)=>{
            session.user.id = token.sub;
            return session;
          }
    },
    //making custom sigin page as default page
    pages:{
      signIn:"/signin"
    }
})

export const GET = handler;
export const POST = handler;