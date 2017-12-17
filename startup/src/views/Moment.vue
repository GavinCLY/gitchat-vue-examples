<template>
  <div>
    {{ date | moment('YYYY-MM-DD HH:mm:ss') }}
    <br>
    {{ date | moment("from", new Date('1987-11-04')) }}
    <br>
    {{ date | moment("add", "7 days") }}
    <br>
    {{ [ dateStr, "MM.DD.YYYY" ] | moment("YYYY-MM-DD HH:mm:ss") }}
  </div>
</template>

<script>

export default {

  data () {
    return {
      date: new Date(),
      dateStr: '12.10.2017'
    }
  }
}
</script>
