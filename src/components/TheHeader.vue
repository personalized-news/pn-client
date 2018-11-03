<template>
  <header class="">
    <p>Personalized News</p>
    <nav>
      <router-link to="/user/login">登录</router-link>
      <router-link to="/user/signup">注册</router-link>
    </nav>
  </header>
</template>
<style scoped>

header {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

nav a {
  padding: 5px;
}

nav a:hover {
  border: 1px solid #000;
}

</style>
