<template>
  <div class="lime__component1">
	  <button v-on:click="doStuff">Do stuff</button>
	  <p id="jsStuff" v-if="stuffDone"> Stuff done </p>
	  
	  <ul>
		  <li v-for="listItem in listItems">{{ listItem.text }}</li>
	  </ul>
	  
	  
	  
  </div>
</template>

<script>
export default {
  name: 'Lime',
  data() {
    return {
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
    doStuff: function () {
      this.stuffDone = (this.stuffDone?false:true);
    }
  }
};
</script>

</style>
