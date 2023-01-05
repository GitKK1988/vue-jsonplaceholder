<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        post: {}
      }
    },
    created() {
      // Get the post id from the route params
      const postId = this.$route.params.id
  
      // Fetch the post from the JSON Placeholder API
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
          this.post = post
        })
    }
  }
</script>
  