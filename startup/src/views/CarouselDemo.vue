<template>
  <div>
    <!-- <carousel :items="items" init="1"></carousel> -->
    <!-- <carousel :items="items" :init="0"></carousel> -->
    <carousel :items="items" :init="0" v-on:change="change"></carousel> 
  </div>
</template>

<script>
import Carousel from '../components/Carousel'

export default {
  components: { Carousel },

  data () {
    return {
      items: [
        '',
        '',
        ''
      ],
      init: 0
    }
  },

  methods: {
    change (val) {
      console.log('carousel changed to: ' + val)
    }
  }
}
</script>
