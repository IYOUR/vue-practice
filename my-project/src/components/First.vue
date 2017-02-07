<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>First</h2>
  </div>
</template>

<script>
export default {
  name: 'First',
  data () {
    return {
      msg: 'Welcome to Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
