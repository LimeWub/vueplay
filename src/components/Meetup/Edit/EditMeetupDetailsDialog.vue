<template>
  <v-dialog width="350px" persistent="">
      <v-btn fab="" accent="" slot="activator">
          <v-icon>edit</v-icon>
      </v-btn>
      <v-card>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12="">
                    <v-card-title>Edit Meetup</v-card-title>
                </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout row wrap>
                <v-flex xs12="">
                    <v-card-text>
                        <v-text-field name="title" label="Title" id="title" required="required" ></v-text-field>
                        <v-text-field name="description" label="Description" id="description" required="required" multi-line="" ></v-text-field>
                    </v-card-text>
                </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
                <v-flex xs12="">
                    <v-card-actions>
                        <v-btn flat class="blue--text darken-1">Close</v-btn>
                        <v-btn flat class="blue--text darken-1">Save</v-btn>
                    </v-card-actions>
                </v-flex>
            </v-layout>
        </v-container>
      </v-card>
  </v-dialog>
</template>
