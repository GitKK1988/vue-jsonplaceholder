<template>
    <div class="users">
        <h1>users</h1>

        <div v-for="user in users" :key="user.id">
                {{ trimString(user.name) }} <router-link :to="{ name: 'user', params: { id: user.id } }"><font-awesome-icon icon="fa-solid fa-eye" /></router-link>
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
        name: 'usersView',
        data()
        {
            return {
                users: []
            }
        },
        created()
        {
            this.getusers();
        },
        methods:
        {
            getusers()
            {
                fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => {
                    this.users = json;
                })

            },
            trimString
        }
    }

</script>