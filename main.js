const { createApp } = Vue;

createApp({
    data() {
        return {
          isLoggedIN: true,
            person: {
              name: 'Selim',
                Age: 26
            },
            posts: [
                {
                    title: 'Titel One',
                    description: 'Post Description One'
                },{
                    title: 'Titel Two',
                    description: 'Post Description Two'
                },
                {
                    title: 'Titel Three',
                    description: 'Post Description Three'
                },
                {
                    title: 'Titel Four',
                    description: 'Post Description Four'
                },
                {
                    title: 'Titel Five',
                    description: 'Post Description Five'
                }
            ]
        }
    },
    methods: {
        checkLoggedIn() {
            console.log('true');
            this.isLoggedIN = !this.isLoggedIN;
        }

    }
}).mount('#app')
