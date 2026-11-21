const backendOrigin =
  process.env.BACKEND_INTERNAL_URL ||
  (process.env.VERCEL
    ? 'https://hryaar-posh-dashboard-xpd1.onrender.com'
    : 'http://127.0.0.1:8001');

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/static/:path*',
        destination: `${backendOrigin}/static/:path*`,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
