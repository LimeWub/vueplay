import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: "https://cdn.cnn.com/cnnnext/dam/assets/170606110126-tokyo-skyline.jpg",
        title: "Tokyo Meetup",
        id: 0,
        date: 0
      },
      {
        imageUrl: "https://www.clydeco.com/images/made/uploads/Images/New_sector_images/Pages/Offices/glasgow_800_560_90_s_c1_c_c.jpg",
        title: "Glasgow Meetup",
        id: 1,
        date: 2
      }
    ],
    user: {
      id:0,
      registeredMeetups: []
    }
  },
  mutations: {},
  actions: {},
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
  }
})
