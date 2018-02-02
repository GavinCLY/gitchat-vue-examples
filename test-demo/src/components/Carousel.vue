<template>
  <div class="carousel" :style="{ width: width + 'px' }">
    <div class="carousel-inner" :class="[transition && 'smooth']" :style="innerStyle"
         @mousedown="mousedown"
         @mousemove="mousemove"
         @mouseup="mouseup">
      <div class="carousel-item" v-for="item in items">
        <img :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    props: {
      width: {
        type: Number,
        default: 300
      },
      items: {
        type: Array,
        default: () => []
      },
      init: {
        type: Number,
        default: 0,
        validator (val) {
          return val > -1
        }
      },
      interval: {
        type: Number,
        default: 3000
      }
    },

    data () {
      return {
        index: this.init,
        mouse: {
          isDown: false,
          startX: 0,
          disX: 0
        },
        transition: true,
        intervalId: null
      }
    },

    computed: {
      innerStyle () {
        return {
          width: this.items.length * this.width + 'px',
          transform: 'translateX(' + (-this.index * this.width + this.mouse.disX) + 'px)'
        }
      }
    },

    watch: {
      index (val) {  // index为当前展示图片的序号
        this.$emit('change', val)
      }
    },

    methods: {
      mousedown (e) {
        this.mouse.isDown = true
        this.mouse.startX = e.clientX
        this.transition = false
        this.stop()
      },

      mousemove (e) {
        if (!this.mouse.isDown) return
        var disX = e.clientX - this.mouse.startX
        if (Math.abs(disX) < 10) return
        this.mouse.disX = disX
      },

      mouseup (e) {
        const { mouse: { disX, isDown }, index, width } = this
        if (!isDown) return
        if (disX > width / 4 && index !== 0) this.index -= 1
        if (disX < -width / 4 && index !== this.items.length - 1) this.index += 1
        this.mouse = {
          isDown: false,
          startX: 0,
          disX: 0
        }
        this.transition = true
        this.start()
      },

      start () {
        if (!this.interval) return
        this.intervalId && clearInterval(this.intervalId)
        this.intervalId = setInterval(() => {
          if (this.index >= this.items.length - 1) {
            this.index = 0
          } else {
            this.index += 1
          }
        }, this.interval)
      },

      stop () {
        this.intervalId && clearInterval(this.intervalId)
      },

      fetch () {
        return axios.get('http://www.baidu.com')
      },

      receive () {
        this.fetch().then(rep => {
          this.received = rep.body
        })
      }
    },

    mounted () {
      this.start()
    }
  }
</script>

<style scoped>
  .carousel {
    overflow: hidden;
    background: grey;
    color: white;
  }
  .carousel-inner {
    display: flex;
  }
  .carousel-item {
    flex: 1;
    border: 1px solid red;
    height: 300px;
  }
  .smooth {
    transition: all 0.5s;
  }
</style>
