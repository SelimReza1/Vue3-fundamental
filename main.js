
var app = Vue.createApp({
    data() {
        return {
        }
    },

});

app.component('hobbies-component', {
    template: ` <h5>Hobbies</h5>
                <ul>
                    <li v-for="hobby in hobbies"> {{ hobby }}</li>
                </ul>`,

    data() {
        return {
            hobbies: ['gardening', 'writing', 'listening'],
        }
    }
});

app.mount('#app');
