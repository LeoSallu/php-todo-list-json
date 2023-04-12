const { createApp } = Vue;

createApp({
    data() {
        return {
            todo: []
        }
    },
    created() {
        //Chiamata axios al file json
        axios.get('todo.json')
            .then((response) =>{
                this.todo=response.data;
            })
    }



}).mount('#app');