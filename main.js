const {createApp} = Vue;

createApp({
    data() {
        return {
            colors: [],
            color: 'red'
        }
    },

    beforeCreate() {
        console.log('before create');
        console.log(this.color);
        console.log(document.getElementById('color'));
    },

    created() {
        console.log('created');
        console.log(this.color);
        console.log(document.getElementById('color'));
    },

    beforeMount() {
        console.log('before mount');
        console.log(this.color);
        console.log(document.getElementById('color'));
    },

    mounted() {
        console.log('mounted');
        console.log(this.color);
        console.log(document.getElementById('color'));
    },

    beforeUpdate() {
        console.log('before update');
    },

    updated() {
        console.log('updated');
    },

    beforeUnMount() {
        console.log('before unmounted');
    },

    unMounted() {
        console.log('unmounted');

    },


    methods: {
        addItem() {
            if (this.color) {
                this.colors.push(this.color);
                this.color = '';
            } else {
                console.log('empty');
            }

        },
        deleteItem(index) {
            this.colors.pop(index);
        }
    }

}).mount('#app')
