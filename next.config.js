const withPWA = require('next-pwa')({
    dest: "public",
    register: true,
    skipWaiting: true
});

module.exports = withPWA({
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
          },
        ],
    }
})
