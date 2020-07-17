<template>
    <div class = 'sign-up'>
        <h1>Crie uma nova conta</h1>
        <div class = "input">
            <input 
                type="text" 
                placeholder='Email'
                v-model="email"
            >
            <br>
        </div>
        <div class = "input">
            <input 
                type="text" 
                placeholder='Nome'
            >
            <br>
        </div>
        <div class = "input">
            <input 
                type="number" 
                placeholder='Idade'
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
        <div class = "input">
            <input 
                type="password" 
                placeholder='Confirme sua senha'
            >
            <br>
        </div>
        <div class="btn-registrar">
            <button class="btn-registrar" @click="signUp">Registrar</button>
        </div>
        <span>
            Ou retorne a tela de 
            <router-link to='/login'>login.</router-link>
        </span>
    </div>
</template>
<script>
import firebase from 'firebase';
export default {
    name: 'signUp',
    data(){
        return {
            email: '',
            senha: '',
        }
    },
    methods:{
        signUp(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
                (user) => {
                    this.$router.replace('home')
                    console.log(user)
                    alert('seu usuario foi registrado com sucesso')
                },
                (err) => {
                    alert('Aconteceu algo inesperado.' +err.message)
                }
            )
        }
    }
}
</script>
<style scoped>
*{
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

.sign-up{
    width: 360px;
    background: #f1f1f1;
    height: 720px;
    padding: 80px 40px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.login-part h1{
    text-align: center;
    margin-bottom: 100px;
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

.btn-registrar{
    display: block;
    width: 100%;
    height: 50px;
    border: none;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 87, 153));;
    font-size: 18px;
    color: #f1f1f1;
}
</style>