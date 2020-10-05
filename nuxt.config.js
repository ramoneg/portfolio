export default {
    modules: [
      // Using package name
      '@nuxtjs/axios',
      ['nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['faEnvelope']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faGithub', 'faInstagram', 'faLinkedin']
          },
        ]
      }],
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