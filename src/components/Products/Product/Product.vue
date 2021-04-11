<template>
	<div class="product">
		<Photo :photo="product.images[0]" :alt="product.title" />
		<Description
			:title="product.title"
			:description="product.description"
		/>
		<Price :price="product.price" />
		<Provider :provider="product.producer.name" />
		<Buttons />
	</div>
</template>

<script>
import Photo from "./Photo";
import Description from "./Description";
import Price from "./Price";
import Provider from "./Provider";
import Buttons from "./Buttons";
import Preloader from '../Preloader.vue';

export default {
	name: "Product",
	props: ["product"],
	components: { Photo, Description, Price, Provider, Buttons, Preloader },
};
</script>

<style scoped>
.product {
	margin-bottom: 60px;
	display: grid;
	grid-template-columns: 230px 385px 135px 230px;
	grid-template-rows: 75px 135px;
	gap: 20px;
	grid-template-areas:
		"photo description price buttons"
		"photo description provider buttons";
}

.photo,
.description,
.price,
.provider,
.buttons {
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;
	border-radius: 8px;
	padding: 20px;
}
</style>
