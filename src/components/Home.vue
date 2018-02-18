<<template>
  <v-container>
    <v-layout row wrap class="mb-2">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right"> 
        <v-btn large router to="/meetups" class="primary"> Explore Meetups </v-btn>
      </v-flex>
      <v-flex xs12 sm6  class="text-xs-center text-sm-left"> 
        <v-btn large router to="/meetups/new" class="primary"> New Meetup </v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm6> 
        <v-carousel>
         <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id">
           <div class="title">
             {{ meetup.title }}
            </div>
         </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-2">
      <v-flex xs12 class="text-xs-center"> 
        <p> Join our Meetups! Woohoo! </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        meetups: [
          {
            imageUrl: "https://cdn.cnn.com/cnnnext/dam/assets/170606110126-tokyo-skyline.jpg",
            title: "Tokyo Meetup",
            id: 0
          },
          {
            imageUrl: "https://www.clydeco.com/images/made/uploads/Images/New_sector_images/Pages/Offices/glasgow_800_560_90_s_c1_c_c.jpg",
            title: "Glasgow Meetup",
            id: 1
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .title{
    color: white;
  }
</style>
