<<template>
  <v-container>
    <v-layout class="mb-2" v-for="meetup in meetups" :key="meetup.id">
      <v-flex class="mx-auto" xs12 sm10 md8 >
        <v-card class="info">
          <v-container fluid>
            <v-layout>
              <v-flex xs5 sm4 md3> 
                <v-card-media
                      :src="meetup.imageUrl"
                      height="130px" >
                </v-card-media>
              </v-flex>
              <v-flex>
                <v-card-title primary-title>
                  <h1 class="headline white--text">{{ meetup.title }}</h1>
                  <div>{{ meetup.date }}</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat :to="'/meetups/' + meetup.id">
                    <v-icon left light>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    computed: {
      meetups () {
        return this.$store.getters.loadedMeetups
      }
    }
  }
</script>
