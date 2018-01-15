import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Lime from '@/components/Lime';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
	{
      path: '/lime',
      name: 'Lime',
      component: Lime,
    },
  ],
});
