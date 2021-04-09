<template>
	<Nav />
	<router-view />
</template>

<script>
import Nav from "./components/Nav/Nav";

  export default {
    components: {
      Nav
    }
  }
</script>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
	background-image: url("./assets/design.png");
	background-image: url("./assets/design.png");
	font-family: "Roboto", sans-serif;

  background-color: #e9e9e9;
  color: #555555;
}

.container {
  max-width: 1040px;
  margin: 0 auto;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}
</style>
