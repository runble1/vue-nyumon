<template>
  <p class="message">メッセージ : {{ msg }}</p>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return { msg: 'こんにちは！' }
  }
}
</script>

<style>
.message { color: #42b983; }
</style>