<template>
	<div class="logo">
		<h1>
			<span>M</span>
			<span>A</span>
			<span>G</span>
			<span>M</span>
			<span>E</span>
			<span>R</span>
		</h1>
	</div>
</template>

<script>
export default {
	name: "Logo",
};
</script>

<style scoped>
.logo {
	font-size: 25px;
	color: #4c80a4;
	font-weight: 700;
	text-transform: uppercase;
}

h1:hover span {
	cursor: default;
	position: relative;
	top: 20px;
	display: inline-block;
	-webkit-animation: bounce 0.3s ease infinite alternate;
}

h1 span:nth-child(2) {
	-webkit-animation-delay: 0.1s;
}

h1 span:nth-child(3) {
	-webkit-animation-delay: 0.2s;
}

h1 span:nth-child(4) {
	-webkit-animation-delay: 0.3s;
}

h1 span:nth-child(5) {
	-webkit-animation-delay: 0.4s;
}

h1 span:nth-child(6) {
	-webkit-animation-delay: 0.5s;
}

/* ANIMATION */
@-webkit-keyframes bounce {
	100% {
		top: -20px;
	}
}
</style>
