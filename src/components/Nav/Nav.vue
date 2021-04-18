<template>
	<div class="nav">
		<router-link to="/">
			<i class="fas fa-search"></i>
		</router-link>
		<router-link to="/categories">
			<i class="fas fa-align-left"></i>
		</router-link>
		<router-link to="/cart">
			<i class="fas fa-shopping-cart"></i>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "Nav",
};
</script>

<style lang="scss" scoped>
.nav {
	display: grid;
	grid-template-columns: repeat(3, max-content);
	justify-content: right;
	column-gap: 40px;
	margin-top: 40px;
	margin-right: 40px;

	& a {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		width: 40px;
		height: 40px;
		padding: 10px;
		border-radius: 50%;
		color: #999999;
		text-decoration: none;
		background-color: #e9e9e9;
		box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;

		&.router-link-exact-active {
			box-shadow: inset -3px -3px 5px 0 #ffffff, inset 3px 3px 5px 0 #c6c6c6;
			font-size: 15px;
		}
	}
}
</style>
