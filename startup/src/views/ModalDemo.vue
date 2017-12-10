<template>
  <div>
    <!-- <modal>
      <p>modal内容</p>
    </modal> -->

    <modal>
      <p slot="title">标题</p>
      <p>内容</p>
      <p slot="footer">底部信息</p>
    </modal>
  </div>
</template>

<script>
import Modal from '../components/Modal'

export default {
  components: { Modal },

  data () {
    return {
    }
  }
}
</script>
