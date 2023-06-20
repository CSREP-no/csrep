import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		NEXTAUTH_SECRET: z.string().min(16),
		VIPPS_CLIENT_ID: z.string().min(1),
		VIPPS_CLIENT_SECRET: z.string().min(1),
	},
	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
		NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
		VIPPS_CLIENT_ID: process.env.VIPPS_CLIENT_ID,
		VIPPS_CLIENT_SECRET: process.env.VIPPS_CLIENT_SECRET,
	},
});
