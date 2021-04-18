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
import Product from "./Product/Product.vue";
import Preloader from "./Preloader.vue";
import ShowMore from "./ShowMore.vue";
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
