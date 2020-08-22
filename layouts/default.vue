<template>
  <div class="root">
    <Header />
    <main>
      <Nuxt />
      <a href="https://www.vecteezy.com/free-vector/cat-logo"
        >Cat Logo Vectors by Vecteezy</a
      >
    </main>
  </div>
</template>
<script>
import Header from '~/components/Header'

export default {
  components: {
    Header,
  },
  methods: {
    getStylesheetUrl() {
      const subdomain = window.location.host.split('.')[0]
      return `/platform/${subdomain}/colors.css`
    },
  },
  head() {
    return {
      link: [
        {
          rel: 'stylesheet',
          href: this.getStylesheetUrl(),
        },
      ],
    }
  },
}
</script>
<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  body {
    background-color: var(--primary-color);
    color: var(--text-color);
  }
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
main {
  position: absolute;
  top: 4rem;
  background-color: var(--primary-color);
  width: 100%;
}
</style>
