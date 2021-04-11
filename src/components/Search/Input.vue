<template>
	<div class="box">
		<img src="../../assets/icon/search.svg" alt="search icon" />
		<input type="text" placeholder="Что вы хотите найти?" />
	</div>
</template>

<script>
export default {
	name: "Input",
};
</script>

<style scoped>
.box {
	position: relative;
}

.box input {
	width: 100%;
	height: 75px;
	background: none;
	font-size: 31px;
	border: none;
	outline: none;
	box-shadow: inset -5px -5px 15px 0 #ffffff, inset 5px 5px 15px 0 #c6c6c6;
	border-radius: 8px;
	padding: 20px 20px 20px 65px;
	color: #999999;
}

.box img {
	position: absolute;
	top: 25px;
	left: 30px;
	width: 27px;
	height: 27px;
}

.box input::placeholder {
	color: #999999;
}
</style>
