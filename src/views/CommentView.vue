<template>
    <div>
      <h1>Comment</h1>
      <p>{{ comment.body }}</p>
      <p><span class="bold">Name: </span>{{ comment.name }}</p>
      <p><span class="bold">EMail: </span>{{ comment.email }}</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        comment: {}
      }
    },
    created() {
      // Get the post id from the route params
      const commentId = this.$route.params.id
  
      // Fetch the post from the JSON Placeholder API
      fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
        .then(response => response.json())
        .then(comment => {
          this.comment = comment
        })
    }
  }
</script>
  

<style scoped>

    .bold {
        font-weight: bold;
    }

</style>