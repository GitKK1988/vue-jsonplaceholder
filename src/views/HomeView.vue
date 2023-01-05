<script setup>

</script>

<template>
  <main>
    
    <h1>welcome to jsonplaceholder</h1>

    <div>

      <div class="card">
        <h2>Posts</h2>
        <router-link to="/posts">see all posts</router-link>
      </div>

      <div class="card">
        <h2>Comments</h2>
        <router-link to="/comments">see all comments</router-link>
      </div>

      <div class="card">
        <h2>Albums</h2>
        <router-link to="/albums">see all albums</router-link>
      </div>

      <div class="card">
        <h2>Todos</h2>
        <router-link to="/posts">see all todos</router-link>
      </div>

      <div class="card">
        <h2>Users</h2>
        <router-link to="/posts">see all users</router-link>
      </div>

    </div>


  </main>
</template>


<style scoped>

.card {
  background: #f3f3f3;
  border-radius: 3px;
  display: inline-block;
  margin: 1rem;
  padding: 1rem;
  position: relative;
  width: 300px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

</style>