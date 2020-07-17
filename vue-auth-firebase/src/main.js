import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false
// Your web app's Firebase configuration
var config = {
  apiKey: "AIzaSyCWgQYqRggb0lzWHIu8oEO0nQ8orjgOtQM",
  authDomain: "vue-auth-firebase-42d10.firebaseapp.com",
  databaseURL: "https://vue-auth-firebase-42d10.firebaseio.com",
  projectId: "vue-auth-firebase-42d10",
  storageBucket: "vue-auth-firebase-42d10.appspot.com",
  messagingSenderId: "644504545705",
  appId: "1:644504545705:web:bb0f08ce13e5eb47573cb8",
  measurementId: "G-0PFHYNGSML"
};
// Initialize Firebase
firebase.initializeApp(config);
firebase.analytics();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
