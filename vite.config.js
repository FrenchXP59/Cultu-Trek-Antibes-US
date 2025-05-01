import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'robots.txt',
        // toutes tes images statiques de la racine public
      ],
      manifest: {
        name: 'Cultu Trek Antibes',
        short_name: 'CultuTrek',
        start_url: '.',
        display: 'standalone',
        background_color: '#FDF3E7',
        icons: [
          {
            src: 'favicon.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          }
        ]
      },
      workbox: {
        // Précache automatique de ton bundle Vite et de toutes les routes
        // + runtime caching pour OpenStreetMap
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/[abc]\.tile\.openstreetmap\.org\/.*\.png$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'osm-tiles',
              expiration: { maxEntries: 200 }
            }
          }
        ]
      }
    })
  ]
})
