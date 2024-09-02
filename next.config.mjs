/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "ardent-jaguar-182.convex.cloud" },
			{ hostname: "oaidalleapiprodscus.blob.core.windows.net" }
			
		],
	},
};

export default nextConfig;

