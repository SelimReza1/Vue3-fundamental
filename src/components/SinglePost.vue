<template>
<div>
  <h4> {{ post.title }} </h4>
  <h6> {{ post.description }} </h6>
  <h6> {{ isActive }} </h6>
</div>
  <hr>
</template>

<script>
export default {
  data() {

  },
  props: ['post', 'isActive']
}
</script>

<style>

</style>
