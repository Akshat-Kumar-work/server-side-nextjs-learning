import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
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
    //in token sub is type of id of user
        //   jwt:({token,user})=>{
        //     console.log(token)
        //     //console.log("token from next auth",token);
        //     token.userId="changed user id"
        //     return token;
        //   },
          //session call backs to add extra info to session
          session:({session,token,user}:any)=>{
            //console.log("session from next auth",session)
            session.user.id = "id hai bhai for session";
            return session;
          }
    },
    //making custom sigin page as default page
    pages:{
      signIn:"/signin"
    }
}