<template>
  <header class="">
    <p>Personalized News</p>
    <nav v-show="isLogin === false">
      <router-link to="/user/login">登录</router-link>
      <router-link to="/user/signup">注册</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    isLogin: {
      default: false
    }
  }
}
</script>
<style scoped>

header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

nav a {
  padding: 5px;
  color: #000;
}

nav a:hover {
  border: 1px solid #000;
}

</style>
