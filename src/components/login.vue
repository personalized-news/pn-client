<template>
  <div id="container">
    <router-link to="/">返回</router-link>
    <div class="lg">
      <form  @submit.prevent="submit">
        <p><input type="text" placeholder="账号" required></p>
        <p><input type="password" placeholder="密码" required minlength="8"></p>
        <p><input type="submit" value="登陆"></p>
      </form>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
      name: "login",
      methods: {
        submit: function(){
          let id =  document.querySelector('[type="text"]').value;
          let ps = document.querySelector('[type="password"]').value;
          console.log({
            name: id,
            password: ps
          });
          axios({
            method: 'post',
            url: 'http://localhost:8001',
            data: {
              id: id,
              ps: ps
            }
          }).then(function(response){
            console.error(response);
            if(response.data.status === 0){
              console.log('请求成功');
            }else {
              console.log('请求失败');
            }
          }).catch(function(error){
            console.log(error.toString());
          })
        }
      }
    }
</script>

<style scoped>
  *{
    text-decoration: none;
  }

  #container a{
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -175px;
    margin-top: -195px;
  }

  .lg{
    width: 350px;
    height: 350px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -175px;
    border: 1px solid #aeacac;
  }

  .lg form{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
