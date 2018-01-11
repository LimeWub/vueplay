<template>
  <div class="lime__component2">
	  <input v-model="inputStr" v-on:keyup="aestheticString"> <label>{{ inputStrAesthetic }} </label> </input>
  </div>
</template>

<script>
export default {
  name: 'component2',
  data() {
    return {
	  inputStr: '',
	  inputStrAesthetic: ''
	  
    };
  },methods: {
	aestheticString: function () {
      this.inputStrAE = this.inputStr.toUpperCase().replace(/\s/g,'').split('').join(' ');
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
