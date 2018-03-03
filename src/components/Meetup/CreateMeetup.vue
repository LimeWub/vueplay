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
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' && this.location !== '' && this.imageUrl !== '' && this.description !== '';
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
        date: new Date()
      };
      this.$store.dispatch('createMeetup', meetupData);
      this.$router.push('/meetups');
    }
  }
}
</script>