import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss()
    ]
  },
  app: {
    head: {
      title: 'bidly - Phần mềm CRM Doanh Nghiệp Tích Hợp AI Số 1 Châu Á',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Hợp nhất bán hàng, dịch vụ, marketing và dữ liệu với phần mềm CRM bidly. Xây dựng mối quan hệ khách hàng bền chặt và bứt phá doanh số.' },
        { property: 'og:title', content: 'bidly - Phần mềm CRM Doanh Nghiệp Tích Hợp AI Số 1 Châu Á' },
        { property: 'og:description', content: 'Thu hút thêm khách hàng tiềm năng, chốt nhiều hợp đồng hơn với nền tảng Agentic CRM thông minh.' },
        { property: 'og:type', content: 'website' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap' }
      ]
    }
  }
})
