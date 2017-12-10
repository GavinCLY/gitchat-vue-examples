<template>
  <ul>
    <slot name="item" v-for="item in items" :item="item"></slot>
  </ul> 
</template>

<script>
export default {
  props: ['items'],
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>