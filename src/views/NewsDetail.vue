<template>
  <div class="container">
    <header>{{decodeURIComponent(this.$route.query.title)}}</header>
    <span>{{decodeURIComponent(this.$route.query.pubDate)}}</span>
    <main>{{decodeURIComponent(this.$route.query.desc)}}</main>
    <span>{{decodeURIComponent(this.$route.query.channelName)}}</span>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail'
}
</script>

<style scoped>
  .container{
    display: flex;
    flex-direction: column;
  }
</style>
