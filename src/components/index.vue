<template>
    <header>
        <p>这里用放个logo</p>
        <nav>
            <router-link to="/login">登陆</router-link>
            <router-link to="/register">注册</router-link>
        </nav>
    </header>

</template>

<script>
export default {
  name: 'index',
  data: function(){
     return {
         landApi: 'http://rap2.taobao.org/account'
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
