<template>
  <div class="container">
    <div class="row mt-2">
      <div
        v-for="post in posts"
        :key="post.id"
        class="col-12 col-md-4 card-container"
      >
        <b-card class="card" :img-src="getThumbnail(post)">
          <b-card-title>
            <nuxt-link :to="`post/${post.slug}`">
              <span v-html="post.title.rendered"></span>
            </nuxt-link>
          </b-card-title>
          <b-card-sub-title>
            <div class="subtitle" v-html="post.excerpt.rendered"></div>
          </b-card-sub-title>
        </b-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.$nextTick(async () => {
      this.$nuxt.$loading.start()
      this.posts = (await this.$api.getPosts()).data
      this.$nuxt.$loading.finish()
    })
  },
  methods: {
    getThumbnail(post) {
      return post._embedded['wp:featuredmedia'][0].media_details.sizes.medium
        .source_url
    },
  },
}
</script>

<style lang="scss" scoped>
.card-container {
  margin-bottom: 1rem;
  .card ::v-deep {
    height: 100%;
    a {
      color: $text-color;
      margin-bottom: 1rem;
    }
  }
}
</style>
