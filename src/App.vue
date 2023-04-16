
<template>
  <header>

    <div class="wrapper">
      <posts></posts>
    </div>
  </header>

  <RouterView />
</template>

<script>
import Posts from "./components/Posts.vue";
export default {
  components: {
    Posts

  }
}
</script>

<style>

</style>
