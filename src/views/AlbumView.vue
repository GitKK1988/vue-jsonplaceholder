<template>
    <div>
      <h1>album</h1>

      <p><span class="bold">Title: </span>{{ album.title }}</p>
      <p><span class="bold">UserId: </span>{{ album.userId }}</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        album: {}
      }
    },
    created() {
      // Get the post id from the route params
      const albumId = this.$route.params.id
  
      // Fetch the post from the JSON Placeholder API
      fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
        .then(response => response.json())
        .then(album => {
          this.album = album
        })
    }
  }
</script>
  

<style scoped>

    .bold {
        font-weight: bold;
    }

</style>