<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-fundamentals
      </h1>
      <h2 class="subtitle">
        My gnarly Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :to="{name: 'posts-id', params: {id: post.id}}"
          :key="post.id"
          class="button--grey"
        >
          {{post.title}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
// import axios from 'axios'

export default {
  components: {
    Logo
  },
  head () {
    return {
      title: 'Home Page 🍕',
      meta: [
        { name: 'twitter:title', content: 'Nuxt Fundamentals by Vue School'},
        { name: 'twitter:description', content: 'Nuxt + Vue School = 🍕'},
        { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png'},
        { name: 'twitter:card', content: 'summary_large_image'}
      ]
    }
  },
  // data () {
  //   return {
  //     posts: []
  //   }
  // },
   async fetch ({store}) {
    // dispatch action fetchAllPosts
    await store.dispatch('posts/fetchAllPosts')
  },
   computed: {
    posts () {
      return this.$store.state.posts.all
    }
  },
  // async asyncData ({$axios}) {
  //    let posts = await $axios.$get('posts')
  //     return {posts}
  //   //  let userResponse = await axios.get('https://jsonplaceholder.typicode.com/users/1')
  //   //  return {posts: response.data, user: userResponse.data}
  //   // .then(response => {
  //   //   return {posts : response.data}
  //   // })
  //   // return {
  //   //   name: 'Jane',
  //   //   food: 'pizza'
  //   // }
  // },
  // mounted () {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //     this.posts = response.data
  //   })
  //   // fetch('https://jsonplaceholder.typicode.com/posts')
  //   // .then(response => {
  //   //   response.json().then(posts => {
  //   //     this.posts = posts
  //   //   })
  //   // })
  // }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
}
.links {
  padding-top: 15px;
}
.links > .button--grey {
  margin: 5px;
}
</style>

