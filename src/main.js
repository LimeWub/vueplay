// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import * as firebase from 'firebase';
import router from './router';
import Vuetify from 'vuetify';
import { store } from './store';
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'
 
Vue.use(Vuetify);
import('../node_modules/vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;
Vue.filter('date', DateFilter);
Vue.component('app-alert', AlertCmp);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  store,
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: "AIzaSyBkUJJuojQoz_-ufHUyN2Gw9sWP0mzCTSI",
      authDomain: "vueplay-b4361.firebaseapp.com",
      databaseURL: "https://vueplay-b4361.firebaseio.com",
      projectId: "vueplay-b4361",
      storageBucket: "gs://vueplay-b4361.appspot.com"
    });
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        store.dispatch('autoSignIn', user);
      } else {
        console.log('No user is signed in.');
      }
    });
    this.$store.dispatch('loadMeetups');
  }
});
