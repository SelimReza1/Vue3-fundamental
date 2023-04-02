const { createApp } = Vue;

createApp({
    data() {
        return {
          isLoggedIN: true,
            name:'',
            country:'',
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
            ],
            isActive: true,
            background: '',
            boxStyle: {
              background: 'green',
                border: '2px dashed purple'
            }
        }
    },
    computed: {
        fullName() {
            console.log('fullname');
            return 'Full Name is'+ this.name+ ev;
        }
    },

    methods: {
        checkLoggedIn() {
            console.log('true');
            this.isLoggedIN = !this.isLoggedIN;
        },

        dummy() {
            console.log('dummy');
        },

        checkActive() {
            this.isActive = !this.isActive;
        },
        onBoxClick() {
            this.background = 'black';
        }
    },

}).mount('#app')
