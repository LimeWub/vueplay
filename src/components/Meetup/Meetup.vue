<template>
    <v-contatainer>
        <v-layout row wrap>
            <v-flex xs-12>
                <v-card>
                    <v-card-title>
                        <h1 class="primary--text">{{ meetup.title }} </h1>
                    </v-card-title>
                    <v-card-media :src="meetup.imageUrl"
                      height="400px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text">{{ meetup.date | date }} - {{ meetup.location }}</div>
                        <div>{{ meetup.description }}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="primary">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-contatainer>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      meetup () {
        return this.$store.getters.loadedMeetup(this.id);
      }
    }
  }
</script>