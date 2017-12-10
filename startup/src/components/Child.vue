<template>
  <div>
    {{ msg }}
    <input v-model="msg" type="text" />
  </div>
</template>

<script>
export default {
  props: ['msg'],

  data () {
    return {
    }
  }
}
</script>