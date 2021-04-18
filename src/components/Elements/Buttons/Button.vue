<template>
	<button :class="['neomorphism', {active: activeButton}]" :activeButton="activeButton">
		<slot>Кнопка</slot>
	</button>
</template>

<script>
export default {
	props: ["activeButton"]
};
</script>

<style lang="scss" scoped>
button {
	border: none;
	outline: none;
	cursor: pointer;

	width: 100%;
	font-size: 21px;
	border-radius: 8px;
	padding: 12px 20px;
	color: #555555;
	background-color: #e9e9e9;
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;

	&:active {
		box-shadow: inset 3px 3px 5px 0 #c6c6c6, inset -3px -3px 5px 0 #ffffff;
	}

	&.active {
		box-shadow: inset 3px 3px 5px 0 #c6c6c6, inset -3px -3px 5px 0 #ffffff;
	}
}
</style>
