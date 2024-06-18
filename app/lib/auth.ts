
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from 'next-auth/providers/github'

type GithubProviderInput = {
    clientId: string,
    clientSecret: string
 }

export const NEXT_AUTH = {
    providers: [
      CredentialsProvider({
        name: "Email",
        credentials: {
          username: { label: "email", type: "text", placeholder: "Email" },
          password: {
            label: "password",
            type: "password",
            placeholder: "Password",
          },
        },
        async authorize(credentials: any) {
          console.log(credentials);
          return {
            id: "1",
            name: "Harbinder Singh",
            email: "harbindersingh@gmail.com"
          };
        },
      }),
      GithubProvider({
         clientId: process.env.GITHUB_CLIENT_ID,
         clientSecret: process.env.GITHUB_CLIENT_SECRET
      } as GithubProviderInput)
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      session: ({ session, token, user}: any) =>{
        if(session && session.user){
        session.user.id = token.sub;
      }
      return session;
    }
    }}