<template>
  <v-app >
    <v-navigation-drawer temporary fixed v-model="siteNav">
      <v-list class="pt-0">
        <v-list-tile @click="" v-for="item in items" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon> 
          </v-list-tile-action>
          <v-list-tile-content> 
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar dark class="grey darken-2">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="siteNav = !siteNav"></v-toolbar-side-icon>
      <v-toolbar-title> 
        <router-link to="/"> Vue </router-link>
      </v-toolbar-title>
      <v-spacer> </v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="item in items" :key="item.title" router :to="item.link"><v-icon left> {{ item.icon }} </v-icon> {{ item.title }} </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
       <router-view/>
    </main> 
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      siteNav: false,
      items: [
          { title: 'View Meetups', icon: 'supervisor_account', link: '/meetups' },
          { title: 'Organise Meetup', icon: 'room', link: '/meetups/new' },
          { title: 'Profile', icon: 'person', link: '/profile' },
          { title: 'Sign Up', icon: 'face', link: '/signup' },
          { title: 'Sign In', icon: 'lock_open', link: '/signin' }
        ]
    }
  }
};
</script>

<style>
#app {

}
</style>
