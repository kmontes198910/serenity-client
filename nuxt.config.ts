import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: process.env.NODE_ENV !== 'production' },

  devServer: {
    host: '0.0.0.0',
  },

  experimental: {
    typedPages: true,
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          innerHTML: '(function(){if(typeof crypto!=="undefined"&&typeof crypto.randomUUID!=="function"){crypto.randomUUID=function(){var b=crypto.getRandomValues(new Uint8Array(16));b[6]=(b[6]&0x0f)|0x40;b[8]=(b[8]&0x3f)|0x80;var h=[].map.call(b,function(x){return x.toString(16).padStart(2,"0")}).join("");return h.slice(0,8)+"-"+h.slice(8,12)+"-"+h.slice(12,16)+"-"+h.slice(16,20)+"-"+h.slice(20)}}})()',
          tagPosition: 'head',
        },
        {
          innerHTML: '(function(){try{var t=localStorage.getItem("serenity-theme");if(t&&t!=="default"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})()',
          tagPosition: 'head',
        },
      ],
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: '/images/hero_doc.webp',
        },
      ],
    },
  },

  site: {
    url: 'https://serenitybhs.com',
    name: 'Serenity Behavioral Services',
    description: 'Outpatient behavioral health clinic in Las Vegas, Nevada. Trusted by courts, community partners, and individuals.',
  },

  css: ['~/assets/css/tailwind.css'],

  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'lucide-icons': ['lucide-vue-next'],
          },
        },
      },
    },
  },

  nitro: {
    compressPublicAssets: {
      gzip: true,
      brotli: true,
    },
    minify: true,
  },

  routeRules: {
    // Add prerender: true for each page as they are created
    '/': { prerender: true },
    '/images/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
    '/_nuxt/**': {
      headers: { 'cache-control': 'public, max-age=31536000, immutable' },
    },
  },

  modules: [
    'shadcn-nuxt',
    '@nuxtjs/i18n',
    '@nuxt/fonts',
    '@nuxt/a11y',
    '@nuxtjs/html-validator',
    'nuxt-og-image',
  ],

  fonts: {
    families: [
      { name: 'Outfit', weights: [400, 600, 700, 800], preload: true, global: true },
      { name: 'Plus Jakarta Sans', weights: [400, 500, 600, 700], preload: true, global: true },
      { name: 'Bebas Neue', weights: [400], preload: true, global: true },
    ],
  },

  a11y: {
    enabled: process.env.NODE_ENV !== 'production',
  },

  htmlValidator: {
    failOnError: false,
    logLevel: 'warning',
    options: {
      rules: {
        'no-dup-class': 'off',
        'tel-non-breaking': 'off',
      },
    },
  },

  ogImage: {
    enabled: process.env.NODE_ENV === 'production',
    defaults: {
      component: 'OgImageDefault',
    },
  },

  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Espa\u00f1ol', file: 'es.json' },
    ],
    defaultLocale: 'en',
    strategy: 'no_prefix',
    lazy: true,
    langDir: '../locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'serenity_locale',
    },
  },

  sourcemap: {
    server: process.env.NODE_ENV !== 'production',
    client: false,
  },

  shadcn: {
    prefix: '',
    componentDir: './app/components/ui',
  },
})
