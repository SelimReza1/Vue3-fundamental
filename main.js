const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Hello Selim',
            link: 'https://vuejs.org/guide/essentials/template-syntax.html#attribute-bindings',
            htmlContent: '<h1>From Heading One</h1>',
            objectOfAttrs: {
                id: 'container',
                class: 'wrapper'
            }
        }
    }
}).mount('#app')
