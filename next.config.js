const withPWA = require('next-pwa');

module.exports = withPWA({
    dest: "public",
    register: true,
    skipWaiting: true,
})
