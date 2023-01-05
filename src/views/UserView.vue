<template>
    <div>
      <h1>user</h1>
      <p><span class="bold">Name: </span>{{ user.name }}</p>
      <p><span class="bold">EMail: </span>{{ user.email }}</p>
      <p><span class="bold">Id: </span>{{ user.id }}</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        user: {}
      }
    },
    created() {
      // Get the post id from the route params
      const userId = this.$route.params.id
  
      // Fetch the post from the JSON Placeholder API
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
          this.user = user
        })
    }
  }
</script>
  

<style scoped>

    .bold {
        font-weight: bold;
    }

</style>