import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Meetups from '@/components/Meetup/Meetups';
import CreateMeetup from '@/components/Meetup/CreateMeetup';
import Meetup from '@/components/Meetup/Meetup';
import Profile from '@/components/User/Profile';
import SignUp from '@/components/User/SignUp';
import SignIn from '@/components/User/SignIn';

import Lime from '@/components/Lime';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups,
    },
    {
      path: '/meetups/new',
      name: 'CreateMeetup',
      component: CreateMeetup,
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetup,
      props: true,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp,
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/lime',
      name: 'Lime',
      component: Lime,
    },
  ],
  mode: 'history'
});
