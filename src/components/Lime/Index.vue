<template>
  <div class="lime">
	  <h1 v-bind:title="hoverTitle"> {{ title }} </h1>
	  <p> {{ introduction }} </p>
	  
	  <component1/>
	  <component2/>
	  
  </div>
</template>

<script>
export default {
  name: 'Lime',
  data() {
    return {
      title: "Lime's little playground page :)",
	  hoverTitle: "o shi! It's dat boiii Lime! (Caps work in data keys!)",
	  introduction: "Work Work Work Play Work Test...",
	  stuffDone: false,
	  listItems: [
		  {text: "Item One"},
		  {text: "Item Two"},
		  {text: "Item Three"},
		  {text: "Item Four"},
		  {text: "Item Five"},
	  ]
	  
    };
  },methods: {

  }
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
