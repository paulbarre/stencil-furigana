<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>
      <wc-furigana :value="text" />
    </h1>
    <div>
      <button @click="changeText">Change text</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      text: '秋[あき]の 田[た]の　　かりほの 庵[いほ]の　　苫[とま]をあらみ',
      alt: 'わが 衣手[ころもで]は　　露[つゆ]にぬれつつ'
    }
  },
  methods: {
    changeText () {
      const temp = this.text
      this.text = this.alt
      this.alt = temp
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
