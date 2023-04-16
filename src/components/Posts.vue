<template>
  <h2>Posts Data</h2>
   <single-post v-for="post in posts" :key="post.title" :post="post" isActive="1"></single-post>
</template>

<script>
import SinglePost from './SinglePost.vue'
export default {
  components: {
    SinglePost
  },
  data() {
    return {
      posts: [
        {title: 'Hello Bangladesh', description: 'Hello Bandladesh Description'},
        {title: 'Hello USA', description: 'Hello USA Description'}

      ]
    }
  }
}
</script>

<style>

</style>
