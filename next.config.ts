import type { NextConfig } from 'next';
const config: NextConfig = { output: 'export', allowedDevOrigins: ['terminal.local'], experimental: { globalNotFound: true }, trailingSlash: true, images: { unoptimized: true } };
export default config;
