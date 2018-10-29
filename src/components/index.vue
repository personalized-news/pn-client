<template>
  <header>
    <p>这里用放个logo</p>
    <nav v-show="isLogin === false">
      <router-link to="/user/login">登陆</router-link>
      <router-link to="/user/signup">注册</router-link>
    </nav>
    <div v-show="isLogin  === true">欢迎您！{{$route.query.userId}}</div>
  </header>
</template>

<script>
export default {
  name: 'index',
  props: {
    userId: {
      default: ''
    }
  },
  computed: {
    isLogin: function () {
      // 在没有参数传过来时，this.$route.query是空对象
      // 用isLogin决定顶层的导航显示
      if (this.$route.query.userId === undefined) { return false } else return this.$route.query.userId.length > 0
    }
  }
}
</script>

<style scoped>
  *{
    padding: 0;
    margin: 0;
    text-decoration: none;
    color: #000;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  nav a{
    padding: 5px;
  }

  nav a:hover{
    border: 1px solid #000;
  }
</style>
