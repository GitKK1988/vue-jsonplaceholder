<template>
    <div>
      <h1>todo</h1>

      <p><span class="bold">Title: </span>{{ todo.title }}</p>
      <p><span class="bold">completed: </span>{{ todo.completed }}</p>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        todo: {}
      }
    },
    created() {
      // Get the post id from the route params
      const todoId = this.$route.params.id
  
      // Fetch the post from the JSON Placeholder API
      fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => response.json())
        .then(todo => {
          this.todo = todo
        })
    }
  }
</script>
  

<style scoped>

    .bold {
        font-weight: bold;
    }

</style>