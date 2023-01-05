<template>
    <div class="posts">
        <h1>Posts</h1>

        <div v-for="post in posts" :key="post.id">
                {{ trimString(post.title) }} <router-link :to="{ name: 'post', params: { id: post.id } }"><font-awesome-icon icon="fa-solid fa-eye" /></router-link>
        </div>
    </div>
</template>

<script>

    function trimString(string) {
    if (string.length > 40) {
        return string.substring(0, 40) + "...";
    }
    return string;
    }


    export default
    {
        name: 'PostsView',
        data()
        {
            return {
                posts: []
            }
        },
        created()
        {
            this.getPosts();
        },
        methods:
        {
            getPosts()
            {
                fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => {
                    this.posts = json;
                })
            },
            trimString
        }
    }

</script>