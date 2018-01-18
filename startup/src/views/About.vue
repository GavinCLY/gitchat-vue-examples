<template>
  <div>
    关于我们
    {{ msg }}
    {{ index }}
    {{ data }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'gitchat',
        index: this.$route.params.index,
        data: ''
      }
    },

    mounted () {
      setTimeout(() => {
        this.data = 'server data'
      })
    }
  }
</script>