import { env } from '@/env.mjs';
import prisma from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { type NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
	providers: [
		{
			id: 'vipps',
			name: 'Vipps',
			type: 'oauth',
			wellKnown:
				process.env.NODE_ENV === 'production'
					? 'https://api.vipps.no/access-management-1.0/access/.well-known/openid-configuration'
					: 'https://apitest.vipps.no/access-management-1.0/access/.well-known/openid-configuration',
			authorization: {
				params: {
					scope: 'openid name email phoneNumber',
				},
			},
			idToken: true,
			checks: ['pkce', 'state'],
			userinfo: {
				async request({ client, tokens }) {
					return await client.userinfo(tokens.access_token!);
				},
			},
			profile: (profile) => {
				return {
					id: profile.sub,
					name: profile.name,
					email: profile.email,
					phoneNumber: profile.phone_number,
				};
			},
			clientId: env.VIPPS_CLIENT_ID,
			clientSecret: env.VIPPS_CLIENT_SECRET,
		},
	],
	// @ts-ignore
	adapter: PrismaAdapter(prisma),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
