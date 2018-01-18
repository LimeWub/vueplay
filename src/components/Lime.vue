<template>
  <div class="lime-block">
	  <h1 v-bind:title="hover"> {{ title }} </h1>
	  <p> {{ introduction }} </p>

	  <div id="component1">

		<button v-on:click="doStuff">Do stuff</button>
		<p id="jsStuff" v-if="stuffDone"> Stuff done </p>

		<ul>
			<li v-for="listItem in listItems">{{ listItem.text }}</li>
		</ul>
	  </div>
	  <div id="component2">
	  <input v-model="inputStr"> <label>{{ aestheticString(inputStr) }} </label> </input>
	  </div>
	  <div id="component3"> </div>
	  <div id="component4"> </div>

  </div>
</template>

<script>
export default {
  name: 'Lime',
  data() {
	  return {
      title: "Lime's little playground page :)",
      hover: 'Hover Hover!',
      introduction: 'Learn all da vues!',

      stuffDone: false,
      listItems: [
        { text: 'Item One' },
        { text: 'Item Two' },
        { text: 'Item Three' },
        { text: 'Item Four' },
        { text: 'Item Five' },
      ],

      inputStr: '',
	  };
  },
  methods: {
    doStuff() {
      this.stuffDone = (!this.stuffDone);
    },
    aestheticString(str) {
      return str.toUpperCase().replace(/\s/g, '').split('').join(' ');
		  },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
