<template>
	<button class="closeButton" @click="$emit('closeButton')">
		<img src="../../../assets/icon/close.svg" alt="close icon" />
	</button>
</template>

<script>
export default {
	name: "CloseButton",
};
</script>

<style scoped lang="scss">
.closeButton {
	position: absolute;
	top: -20px;
	right: -16px;
	width: 40px;
	height: 40px;
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;
	padding: 10px;
	border-radius: 50%;
	border: none;
	outline: none;
	cursor: pointer;

	&:active {
    	box-shadow: inset -3px -3px 5px 0 #ffffff, inset 3px 3px 5px 0 #c6c6c6;
	}

	& img {
		width: 14px;
		height: 14px;
		object-fit: contain;
	}
}
</style>
