<template>
  <header>
    <nuxt-link to="/">
      <img v-if="$platform.styles('header.showLogo')" src="/header-logo.jpg" />
    </nuxt-link>
  </header>
</template>
<script>
export default {}
</script>
<style lang="scss">
header {
  position: fixed;
  height: 4rem;
  background-color: var(--secondary-color);
  width: 100%;
  z-index: 99;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  align-items: center;
  a {
    display: block;
  }
  img {
    height: 50px;
  }
}
</style>
