<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6>
        <h1 class="primary--text">Create a new Meetup</h1>
      </v-flex>
    </v-layout>
    <v-layout row="">
      <v-flex xs12="">
        <form action="" @submit.prevent="onCreateMeetup">

          <v-layout row="">
            <v-flex xs12="" sm6="">
              <v-text-field name="title" label="Title" id="title" required="required" v-model="title"></v-text-field>
            </v-flex>
          </v-layout>


          <v-layout row="">
            <v-flex xs12="" sm6="">
              <v-text-field name="location" label="Location" id="location" required="required" v-model="location"></v-text-field>
            </v-flex>
          </v-layout>


          <v-layout row="">
            <v-flex xs12="" sm6="">
              <v-text-field name="imageUrl" label="Image Url" id="image-url" required="required" v-model="imageUrl"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row="">
            <v-flex xs12="" sm6="">
              <img :src="imageUrl" alt="" width="100%">
            </v-flex>
          </v-layout>

          <v-layout row="">
            <v-flex xs12="" sm6="">
              <v-text-field name="description" label="Description" id="description" required="required" multi-line="" v-model="description"></v-text-field>
            </v-flex>
          </v-layout>

           <v-layout row="">
            <v-flex xs12="" sm6="">
              <h4>Change date and time</h4>
              <v-date-picker name="date" label="Date" id="date" required="required" v-model="date"></v-date-picker>
            </v-flex>
          </v-layout>

          <v-layout row="">
            <v-flex xs12="" sm6="">
              <v-time-picker name="time" label="Time" id="time" required="required" v-model="time" format="24hr"></v-time-picker>
            </v-flex>
          </v-layout>

          <v-layout row="">
            <v-flex xs12="" sm6="">
              <v-btn class="primary" :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
            </v-flex>
          </v-layout>

        </form>
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: '',
      date: new Date().toISOString(),
      time: new Date()
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== '';
    },
    submittableDateTime () {
      const date = new Date(this.date);
      if (typeof this.time === 'string') {
        const hours = this.time.match(/(\d+)/g)[0];
        const mins = this.time.match(/(\d+)/g)[1];
        date.setHours(hours);
        date.setMinutes(mins);
      }
      return date;
    }
  },
  methods: {
    onCreateMeetup(){
      if (!this.formIsValid){
        return false;
      }
      const meetupData = {
        title: this.title,
        location: this.location,
        imageUrl: this.imageUrl,
        description: this.description,
        date: this.submittableDateTime
      };
      this.$store.dispatch('createMeetup', meetupData);
      this.$router.push('/meetups');
    }
  }
}
</script>