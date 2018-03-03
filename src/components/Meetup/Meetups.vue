<<template>
  <v-container>
    <v-layout>
      <v-flex class="mx-auto" xs12 sm10 md8 >
        <v-card class="info">
          <v-container fluid>
            <v-layout>
              <v-flex xs5 sm4 md3> 
                <v-card-media
                      src="https://cdn.cnn.com/cnnnext/dam/assets/170606110126-tokyo-skyline.jpg"
                      height="130px" >
                </v-card-media>
              </v-flex>
              <v-flex>
                <v-card-title primary-title>
                  <h1 class="headline white--text">My Meetup</h1>
                  <div>7th/July</div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat to="/meetups/1">
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
