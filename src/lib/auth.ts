import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { getMongoClient } from './mongodb'
import bcrypt from 'bcryptjs'

const hasMongo = !!process.env.MONGODB_URI

export const authOptions: NextAuthOptions = {
    ...(hasMongo ? { adapter: MongoDBAdapter(getMongoClient()) } : {}),
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials')
                }

                const client = await getMongoClient()
                const db = client.db()
                const user = await db.collection('users').findOne({ email: credentials.email })

                if (!user || !user.password) {
                    throw new Error('User not found')
                }

                const isPasswordCorrect = await bcrypt.compare(
                    credentials.password,
                    user.password
                )

                if (!isPasswordCorrect) {
                    throw new Error('Invalid password')
                }

                return {
                    id: user._id.toString(),
                    email: user.email,
                    name: user.name,
                }
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/signin',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (token && session.user) {
                (session.user as any).id = token.id
            }
            return session
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
}
