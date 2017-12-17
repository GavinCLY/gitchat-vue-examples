export default {
  data () {
    return {
      name: 'from mixin',
      fromMixin: true
    }
  },
  computed: {
    fullname () {
      return 'from mixin: ' + this.name
    }
  },
  watch: {
    name (val) {
      console.log('mixin', val)
    }
  },
  created () {
    console.log('created from mixin')
    console.log(this.name)
  }
}
