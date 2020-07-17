<template>
    <div class = 'login'>      
        <div class="login-part">
            <h1>Login</h1>
            <div class = "input">
                <input 
                    type="text" 
                    placeholder='E-mail'
                    v-model='email'
                >
                <br>
            </div>
            <div class = "input">
                <input 
                    type="password" 
                    placeholder='Senha'
                    v-model='senha'
                >
                <br>
            </div>
            <div class="btn-login">
                <button class="btn-login" @click="login">Entrar</button>
            </div>
            <p>
                Não possui conta?
                <router-link to = '/registrar'>Crie uma agora</router-link>
            </p>
        </div>

    </div>

</template>
<script>
import firebase from 'firebase'
export default {
    name: 'login',
    data() {
        return {
            email: '',
            senha: ''
        }
    },
    methods:{
        login: function(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
                (user) => {
                    this.$router.replace('home')
                    alert(`Bem vindo`)
                    console.log(user)
                },
                (err) => {
                    alert('Não foi possível realizar o login' +err.message)
                }
            )
        }
    }
};
</script>

<style scoped>
*{
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

.login-part{
    width: 360px;
    background: #f1f1f1;
    height: 580px;
    padding: 80px 40px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.login-part h1{
    text-align: center;
    margin-bottom: 60px;
}

.input{
    border-bottom: 2px solid green;
    position: relative;
    margin: 30px 0;

}

.input input {
    font-size: 15px;
    color: #333;
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 5px;
    height: 40px;
}

.btn-login{
    display: block;
    width: 100%;
    height: 50px;
    border: none;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));;
    font-size: 18px;
    color: #f1f1f1;
}
</style>