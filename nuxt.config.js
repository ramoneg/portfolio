export default {
    modules: [
      // Using package name
      '@nuxtjs/axios',
    ],
    buildModules: ['@nuxtjs/tailwindcss'],
    build: {
      postcss: {
        plugins: {
          'postcss-import': {},
          'autoprefixer': {},
          'tailwindcss': {},
        }
      }
    }
  }