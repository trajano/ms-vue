<template>
  <div class="login">
    <ou-text-field v-model='text' type='placeholder' label='Username' />
    <ou-password-field v-model='text' type='placeholder' label='Password' />
  </div>
</template>

<script lang="ts">
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
