<template>
  <div class="container">
    <div class="row">
      <div v-if="loaded" class="col mt-5">
        <h1 v-html="post.title.rendered"></h1>
        <span v-html="post.content.rendered"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      post: {},
      loaded: false,
    }
  },
  mounted() {
    const slug = this.$route.params.slug
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      this.post = (await this.$api.getPostBySlug(slug)).data[0]
      this.$nuxt.$loading.finish()
      this.loaded = true
    })
  },
}
</script>
<style lang="scss"></style>
