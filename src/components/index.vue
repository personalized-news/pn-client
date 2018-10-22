<template>
    <header>
        <h1>{{title}}</h1>
    </header>

</template>

<script>
export default {
  name: 'index',
  data: function(){
     return {
         title: 'Look what you like',
         landApi: 'http://rap2.taobao.org/account'
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
