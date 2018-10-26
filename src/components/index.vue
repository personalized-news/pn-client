<template>
  <header>
    <p>这里用放个logo</p>
    <nav>
      <router-link to="/user/login">登陆</router-link>
      <router-link to="/user/signUp">注册</router-link>
    </nav>
  </header>
</template>

<script>
    export default {
        name: "index"
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
