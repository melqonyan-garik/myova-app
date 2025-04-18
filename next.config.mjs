const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Remove basePath or set it to empty for custom domain
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  trailingSlash: true,
};

export default nextConfig;