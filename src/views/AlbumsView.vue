<template>
    <div class="albums">
        <h1>albums</h1>

        <div v-for="album in albums" :key="album.id">
                {{ trimString(album.title) }} <router-link :to="{ name: 'album', params: { id: album.id } }"><font-awesome-icon icon="fa-solid fa-eye" /></router-link>
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
        name: 'albumsView',
        data()
        {
            return {
                albums: []
            }
        },
        created()
        {
            this.getalbums();
        },
        methods:
        {
            getalbums()
            {
                fetch('https://jsonplaceholder.typicode.com/albums')
                .then(response => response.json())
                .then(json => {
                    this.albums = json;
                })

            },
            trimString
        }
    }

</script>