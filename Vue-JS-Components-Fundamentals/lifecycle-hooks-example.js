let BlogPostComponent = {
  props: ['id'],
  date () {
    return {
      blogPost: null
    }
  },
  created () {
    axios.get('api/posts/' + this.id).then(response => {
      this.blogPost= response.data
    })
  }
}