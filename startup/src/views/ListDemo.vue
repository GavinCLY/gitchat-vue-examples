<template>
  <div>
    <list :items="items">
      <template slot-scope="props" slot="item">
        <li>{{ props.item.text }}</li>
      </template>
    </list>
    <!-- 2.5.0 + -->
    <list :items="items">
      <li slot-scope="props" slot="item">{{ props.item.text }}</li>
    </list>
  </div>
</template>

<script>
import List from '../components/List'

export default {
  components: { List },

  data () {
    return {
      items: [
        { text: '1' },
        { text: '2' },
        { text: '3' },
        { text: '4' }
      ]
    }
  }
}
</script>
