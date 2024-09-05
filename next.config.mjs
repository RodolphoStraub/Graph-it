/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/graph-it',
  images: {
      unoptimized: true,
  },
};



export default nextConfig;
