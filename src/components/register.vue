<template>
    <div class="re">
        <form action="#" @submit.prevent="submit">
            <p><input type="text" placeholder="账号" required></p>
            <p><input type="password" placeholder="密码" required minlength="8"></p>
            <p><input type="password" placeholder="再次输入密码" required minlength="8"></p>
            <p><input type="submit" value="注册"></p>
        </form>
    </div>
</template>

<script>
    import axios  from 'axios'
    export default {
        name: "register",
        methods: {
            submit: function(){
                let id =  document.querySelector('[type="text"]').value;
                let ps = document.querySelectorAll('[type="password"]')[0].value;
                let psAgain =  document.querySelector('[type="password"]')[1].value;
                if(ps != psAgain){
                    alert('两次密码不一致');
                }else{
                    axios({
                        post: '',
                        url: '',
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
    }
</script>

<style scoped>
    .re{
        width: 350px;
        height: 350px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -175px;
        margin-top: -175px;
        border: 1px solid #aeacac;
    }

    .re form{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
</style>