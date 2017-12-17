<template>
  <div>
    mixin demo
    <button @click="broad">broadcast</button>
    <child-one></child-one>
  </div>
</template>

<script>
import Mixin from './mixin.js'
import Emitter from './emitter.js'

export default {
  mixins: [Mixin, Emitter],
  components: {
    childOne: {
      template: '<div> \
          <button @click="toParent">dispatch</button> \
          child component one \
        </div>',
      mixins: [Emitter],
      created () {
        this.$on('msg', msg => {
          console.log('msg received: ' + msg)
        })
      },
      methods: {
        toParent () {
          this.dispatch('parent', 'hello, from Child')
        }
      }
    }
  },
  data () {
    return {
      name: 'component mixin demo'
    }
  },
  computed: {
    fullname () {
      return 'from component: ' + this.name
    }
  },
  watch: {
    name (val) {
      console.log('component', val)
    }
  },
  methods: {
    broad () {
      this.broadcast('msg', 'from parent')
    }
  },
  created () {
    this.$on('parent', msg => {
      console.log('msg from child: ' + msg)
    })
  }
}
</script>