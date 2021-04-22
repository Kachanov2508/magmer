<template>
	<Nav />
	<router-view />
</template>

<script>
import Nav from "@/components/Nav/Nav";
import RoundButton from "./components/Elements/Buttons/RoundButton.vue";
import InvalidBrowser from './components/InvalidBrowser/InvalidBrowser.vue';

export default {
	components: { Nav, RoundButton, InvalidBrowser },
	mounted() {
		this.$store.dispatch("getProducts");
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	/* background-image: url("./assets/design.png");
	background-image: url("./assets/design.png");
	background-position: top;
	min-height: 3829px; */

	font-family: "Roboto", sans-serif;

	background-color: #e9e9e9;
	color: #555555;
}

input,
textarea {
	font-family: inherit;
	font-weight: 300;
	color: #555555;
}

.container {
	max-width: 1040px;
	margin: 0 auto;
}

.btn {
	border: none;
	outline: none;
	cursor: pointer;
	padding: 12px 20px;
	font-size: 21px;
	border-radius: 8px;
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;
	color: #555555;

	&:active {
		box-shadow: inset 3px 3px 5px 0 #c6c6c6, inset -3px -3px 5px 0 #ffffff;
	}
}

.roundButton {
	border: none;
	outline: none;
	cursor: pointer;
	width: 40px;
	height: 40px;
	padding: 10px;
	font-size: 21px;
	border-radius: 50%;
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;
	color: #555555;

	& img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	&:active {
		box-shadow: inset -3px -3px 5px 0 #ffffff, inset 3px 3px 5px 0 #c6c6c6;
	}
}

.neomorphism {
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;
	border-radius: 8px;

	&__inset {
		box-shadow: inset -3px -3px 5px 0 #ffffff, inset 3px 3px 5px 0 #c6c6c6;
	}
}

.neomorphismInset {
	box-shadow: inset -3px -3px 5px 0 #ffffff, inset 3px 3px 5px 0 #c6c6c6;
	border-radius: 8px;
}
</style>
