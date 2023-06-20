import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { type NextAuthOptions } from 'next-auth';
import prisma from 'src/lib/prisma';

export const authOptions: NextAuthOptions = {
	providers: [
		{
			id: 'vipps',
			name: 'Vipps',
			type: 'oauth',
			wellKnown:
				'https://apitest.vipps.no/access-management-1.0/access/.well-known/openid-configuration',
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
			clientId: process.env.VIPPS_CLIENT_ID,
			clientSecret: process.env.VIPPS_CLIENT_SECRET,
		},
	],
	// @ts-ignore
	adapter: PrismaAdapter(prisma),
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
