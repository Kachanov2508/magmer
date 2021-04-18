<template>
	<div>
		<button :class="{active: activeButton}" :activeButton="activeButton">
			<slot>
				<i class="fab fa-vuejs"></i>
			</slot>
		</button>
	</div>
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

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
	width: 40px;
	height: 40px;
	padding: 10px;
	border-radius: 50%;
	color: #999999;
	background-color: #e9e9e9;
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;

	&:active,
	&.active {
		box-shadow: inset 3px 3px 5px 0 #c6c6c6, inset -3px -3px 5px 0 #ffffff;
        font-size: 17px;
	}
}
</style>
