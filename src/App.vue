<template>
  <v-app >
    <v-navigation-drawer fixed v-model="siteNav">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>code</v-icon> 
          </v-list-tile-action>
          <v-list-tile-content> 
            <v-list-tile-title> Link 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar>
      <v-toolbar-title> 
        Hello Vue
      </v-toolbar-title>
      <v-toolbar-side-icon @click="siteNav = !siteNav"></v-toolbar-side-icon>
      <v-spacer> </v-spacer>
      <v-toolbar-items>
        <v-btn flat><v-icon left>code</v-icon> Link 1 </v-btn>
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
      siteNav: false
    }
  }
};
</script>

<style>
#app {

}
</style>
