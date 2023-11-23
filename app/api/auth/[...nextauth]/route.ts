// import NextAuth from "next-auth";
// import GoogleProvider from 'next-auth/providers/google'

// const handler = NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: '',
//             clientSecret: ''
//         })
//     ],
//     async session({session}) {
       
//     },
//     async signIn({profile}) {

//     },
// })

// export {handler as GET, handler as POST}

import { NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions } from 'next-auth';

import GoogleProvider from 'next-auth/providers/google';

const options: NextAuthOptions & {
  session: (session: any) => Promise<any>;
  signIn: (params: { profile: any }) => Promise<boolean>;
} = {
  providers: [
    GoogleProvider({
      clientId: '',
      clientSecret: ''
    })
  ],
  session: async ({ session }) => {
    // Your session logic goes here
    return session;
  },
  signIn: async ({ profile }) => {
    // Your sign-in logic goes here
    return true;
  }
};

const handler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export {handler as GET, handler as POST}
