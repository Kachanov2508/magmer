<template>
	<div class="nav">
		<router-link to="/">
			<img src="../../assets/icon/search.svg" alt="search icon" />
		</router-link>
		<router-link to="/categories">
			<img src="../../assets/icon/categories.svg" alt="categories icon" />
		</router-link>
		<router-link to="/cart">
			<img src="../../assets/icon/cart.svg" alt="cart icon" />
		</router-link>
	</div>
</template>

<script>
export default {
	name: "Nav",
};
</script>

<style scoped>
.nav {
	display: grid;
	grid-template-columns: repeat(3, max-content);
	justify-content: right;
	column-gap: 40px;
	margin-top: 40px;
	margin-right: 40px;
}

.nav a {
	width: 40px;
	height: 40px;
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;
	padding: 10px;
	border-radius: 50%;
}

.nav a.router-link-exact-active {
	box-shadow: inset -3px -3px 5px 0 #ffffff, inset 3px 3px 5px 0 #c6c6c6;
}

.nav a img {
	width: 100%;
	height: 100%;
	object-fit: contain;
	display: block;
}
</style>
