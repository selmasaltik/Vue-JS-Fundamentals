<template>
  <div class="container">
    <article>
      <h1 class="title">{{post.title}}</h1>
      <p>{{post.body}}</p>
    </article>
  </div>
</template>

<script>
// import axios from 'axios'

  export default {
     head () {
      return {
        title: this.post.title,
        meta: [
          { name: 'twitter:title', content: this.post.title},
          { name: 'twitter:description', content: this.post.body},
          { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png'},
          { name: 'twitter:card', content: 'summary_large_image'}
        ]
      }
    },
    data () {
      return {
          id: this.$route.params.id,
          // post: {}
      }
    },
     async fetch ({store, params}) {
      await store.dispatch('posts/fetchPost', params.id)
    },
    computed: {
      post () {
        return this.$store.state.posts.all.find(post => post.id === Number(this.id))
      }
    },
    // async asyncData ({params, $axios}) {
    //   // console.log(context)
    //   // let response = axios.get(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    //   let post = await $axios.$get(`posts/${params.id}`)
    //   return {post}
    // },
    // mounted () {
    //   axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    //   .then(response => {
    //     this.post = response.data
    //   })
    //   // fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
    //   // .then(response => {
    //   //   response.json().then(post => {
    //   //     this.post = post
    //   //   })
    //   // })
    // }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }
  article * {
    margin-bottom: 1rem;
  }
  aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
  }
  .title {
    font-size: 2rem;
  }
</style>
