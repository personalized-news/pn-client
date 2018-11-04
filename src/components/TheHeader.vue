<template>
  <header>
    <p>Personalized News</p>
    <div>
      <nav v-show="isLogin === false">
        <router-link to="/user/login">登录</router-link>
        <router-link to="/user/signup">注册</router-link>
      </nav>
      <div v-show="isLogin  === true">欢迎您！{{username}}</div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    isLogin: {
      default: false
    },
    username: {
      default: ''
    }
  }
}
</script>
<style scoped>

header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
}
nav a {
  padding: 5px;
  color: #000;
}

nav a:hover {
  border: 1px solid #000;
}

</style>
