const broadcast = function (eventName, params) {
  this.$children.forEach(child => {
    child._events[eventName] && child.$emit(eventName, params)
    if (child.$children.length) {
      broadcast.call(child, eventName, params)
    }
  })
}
export default {
  methods: {
    dispatch (eventName, params) {
      let parent = this.$parent || this.$root
      while (parent) {
        if (parent._events[eventName]) {
          parent.$emit(eventName, params)
          break
        } else {
          parent = parent.$parent
        }
      }
    },
    broadcast (eventName, params) {
      broadcast.call(this, eventName, params)
    }
  }
}
