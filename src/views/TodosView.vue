<template>
    <div class="todos">
        <h1>todos</h1>

        <div v-for="todo in todos" :key="todo.id">
                {{ trimString(todo.title) }} <router-link :to="{ name: 'todo', params: { id: todo.id } }"><font-awesome-icon icon="fa-solid fa-eye" /></router-link>
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
        name: 'todosView',
        data()
        {
            return {
                todos: []
            }
        },
        created()
        {
            this.gettodos();
        },
        methods:
        {
            gettodos()
            {
                fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(json => {
                    this.todos = json;
                })

            },
            trimString
        }
    }

</script>