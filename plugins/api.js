const WP_API_URL = 'http://www.thepurringtonpost.com/wp-json/wp/v2'

const apiFactory = ($axios) => {
  const axios = $axios.create({ baseURL: WP_API_URL })

  return {
    getPosts() {
      return axios.get('/posts?_embed')
    },
    getPostBySlug(slug) {
      return axios.get(`/posts?slug=${slug}&_embed`)
    },
  }
}

export default ({ $axios }, inject) => {
  const api = apiFactory($axios)
  inject('api', api)
}
