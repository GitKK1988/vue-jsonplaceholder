<template>
    <div class="comments">
        <h1>Comments</h1>

        <div v-for="comment in comments" :key="comment.id">
                {{ trimString(comment.body) }} <router-link :to="{ name: 'comment', params: { id: comment.id } }"><font-awesome-icon icon="fa-solid fa-eye" /></router-link>
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
        name: 'CommentsView',
        data()
        {
            return {
                comments: []
            }
        },
        created()
        {
            this.getComments();
        },
        methods:
        {
            getComments()
            {
                fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(json => {
                    this.comments = json;
                })

            },
            trimString
        }
    }

</script>