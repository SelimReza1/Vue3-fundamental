const { createApp } = Vue;

createApp({
    data() {
        return {
            count: 0,
            name: ''
        }
    },
    methods: {
        onIncrementCounter(event, name) {
            this.count = this.count + 1;
            this.name = name;
            console.log(event);
        }

    }
}).mount('#app')
