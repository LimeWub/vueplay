import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup (state, payload){
      state.loadedMeetups.push(payload);
    },
    setUser (state, payload){
      state.user = payload;
    },
    setLoading (state, payload){
      state.loading = payload;
    },
    setError (state, payload){
      state.error = payload;
    },
    clearError (state) {
      state.error = null;
    },
    setLoadedMeetups (state, payload){
      state.loadedMeetups = payload;
    },
  },
  actions: {
    loadMeetups ({commit}) {
      commit('setLoading', true);
      firebase.database().ref('meetups').once('value')
      .then(
        (data) => {
          const meetups = [];
          const obj = data.val();
          for (let key in obj) {
            meetups.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              creatorId: obj[key].creatorId
            });
          }
          commit('setLoadedMeetups', meetups);
          commit('setLoading', false);
        }
      )
      .catch(
        (error) => {
          console.log(error);
          commit('setLoading', false);
        }
      );
    },
    createMeetup ({commit, getters}, payload){
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      };
      //Reach out to firebase and store it
      firebase.database().ref('meetups').push(meetup)
      .then((data) => {
        const key = data.key;
        //commit to local store
        commit('createMeetup', {
          ...meetup,
          id: key
        });
      })
      .catch((error) => {
        console.log(error);
      });      
    },
    signUserUp ({commit}, payload){
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        } 
      ).catch(
        error => {
          commit('setError', error);
          commit('setLoading', false);
        }
      );
    },
    signUserIn({commit}, payload){
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(
        user => {
          commit('setLoading', false);
          const newUser = {
            id: user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        } 
      ).catch(
        error => {
          commit('setError', error);
          commit('setLoading', false);
        }
      );
    },
    setUser ({commit}, payload) {
      commit('setUser', payload)
    },
    autoSignIn ({commit}, payload){
      console.log(payload.uid);
      commit('setUser', {id: payload.uid});
      registeredMeetups: [];
    },
    logout({commit}){
      firebase.auth().signOut();
      commit('setUser', null);
    },
    clearError ({commit}) {
      commit('clearError');
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId;
        });
      }
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    user (state) {
      return state.user;
    },
    loading (state) {
      return state.loading;
    },
    error (state) {
      return state.error;
    }
  }
})
