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
              location: obj[key].location,
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
        description: payload.description,
        date: payload.date.toISOString(),
        creatorId: getters.user.id
      };
      let imageUrl;
      let key;
      //Reach out to firebase and store it
      firebase.database().ref('meetups').push(meetup)
      .then((data) => {
        key = data.key;
        return key;
      }).then(key => {
        const filename = payload.image.name;
        const ext = filename.slice(filename.lastIndexOf('.'));
        return firebase.storage().ref('meetups/' + key + ext).put(payload.image);
      }).then(fileData => {
        imageUrl = fileData.metadata.downloadURLs[0];
        console.log(imageUrl);
        return firebase.database().ref('meetups').child(key).update({imageUrl: imageUrl});
      })
      .then(() => {         //commit to local store
        commit('createMeetup', {
          ...meetup,
          imageUrl: imageUrl,
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
