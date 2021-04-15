<template>
	<div class="products">
		<div class="preloaders" v-if="$store.state.isFetching">
			<Preloader v-for="(item, index) in 7" :key="index" />
		</div>
		<Product
			v-for="product in $store.state.products"
			:key="product.id"
			:product="product"
		/>
	</div>
	<ShowMore />
</template>

<script>
import Product from "./Product/Product";
import Preloader from "./Preloader";
import ShowMore from "./ShowMore";
export default {
	name: "Products",
	components: { Product, Preloader, ShowMore },

	mounted() {
		this.$store.dispatch("getProductsFromApi");
		
	},
};
</script>

<style>
.products {
	margin-top: 40px;
}
</style>
