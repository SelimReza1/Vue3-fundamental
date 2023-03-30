const { createApp } = Vue;

createApp({
    data() {
        return {
          isLoggedIN: true
        }
    },
    methods: {
        checkLoggedIn() {
            console.log('true');
            this.isLoggedIN = !this.isLoggedIN;
        }

    }
}).mount('#app')
