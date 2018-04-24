import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: "https://cdn.cnn.com/cnnnext/dam/assets/170606110126-tokyo-skyline.jpg",
        title: "Tokyo Meetup",
        id: 0,
        date: new Date(),
        location: "Tokyo",
        description: "Some description for Tokyo"
      },
      {
        imageUrl: "https://www.clydeco.com/images/made/uploads/Images/New_sector_images/Pages/Offices/glasgow_800_560_90_s_c1_c_c.jpg",
        title: "Glasgow Meetup",
        id: 1,
        date: new Date(),
        location: "Glasgow",
        description: "Some description for Glasgow"
      }
    ],
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
    }
  },
  actions: {
    createMeetup ({commit}, payload){
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      };
      //Reach out to firebase and store it
      commit('createMeetup', meetup);
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
          return meetup.id === parseInt(meetupId);
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
