export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://img.notionusercontent.com/ext/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F2dfbad46-1154-4a4c-8053-e16c8bd33a3a%2Fmy-notion-face-transparent.png/size/w=120?exp=1761607528&sig=_Hz8j9qfEGcunF6iff1zSD3A9HY_kc8fR--sJ4hAkRY&userId=b37249b4-5dac-4b50-94e7-9882d0b64761',
      light: 'https://img.notionusercontent.com/ext/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fpublic.notion-static.com%2F2dfbad46-1154-4a4c-8053-e16c8bd33a3a%2Fmy-notion-face-transparent.png/size/w=120?exp=1761607528&sig=_Hz8j9qfEGcunF6iff1zSD3A9HY_kc8fR--sJ4hAkRY&userId=b37249b4-5dac-4b50-94e7-9882d0b64761',
      alt: 'My profile picture'
    },
    meetingLink: 'https://cal.com/',
    email: 'diego.salinas.dev@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      
    }, {
      
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/diegoOG09',
      'target': '_blank',
      'aria-label': 'Diego Salinas on GitHub'
    }]
  }
})
