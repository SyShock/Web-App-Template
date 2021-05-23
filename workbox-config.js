const globDirectory = 'build'
const serviceWorker = 'service-worker.js'

module.exports = {
    globDirectory: globDirectory,
    globPatterns: [
      "**/*.{html,js,css,png,svg,jpg,gif,json,woff,woff2,eot,ico,webmanifest,map}"
    ],
    swDest: `${globDirectory}/${serviceWorker}`,
    clientsClaim: true,
    skipWaiting: true,
    sourcemap: false
  };