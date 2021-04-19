<template>
	<div :class="[{ active: activeDetails || activeQuestion }, 'product']">
		<Photo 
			:photo="product.images" 
			:activeDetails="activeDetails" 
			:activeQuestion="activeQuestion" 
			:alt="product.title" 
		/>
		<Description
			:title="product.title"
			:description="product.description"
			:specifications="product.specifications"
			:activeDetails="activeDetails"
			:activeQuestion="activeQuestion"
		/>
		<Price :price="product.price" />
		<Provider
			:provider="product.producer.name"
		/>
		<Buttons 
			@detailsButton="openDetails" 
			@questionButton="openQuestion"
			:detailsButton="activeDetails" 
			:questionButton="activeQuestion"
		/>
		<CloseButton 
			v-if="activeDetails || activeQuestion"
			@closeButton="closeCart" 
		/>
	</div>
</template>

<script>
import Photo from "./Photo.vue";
import Description from "./Description/Description.vue";
import Price from "./Price.vue";
import Provider from "./Provider.vue";
import Buttons from "./Buttons.vue";
import Preloader from "../Preloader.vue";
import CloseButton from "./CloseButton.vue";

export default {
	data() {
		return {
			activeDetails: false,
			activeQuestion: false,
		};
	},
	name: "Product",
	props: ["product", "index"],
	components: {
		Photo,
		Description,
		Price,
		Provider,
		Buttons,
		Preloader,
		CloseButton,
	},
	methods: {
		openDetails() {
			this.activeQuestion = false;
			this.activeDetails = true;
		},
		openQuestion() {
			this.activeDetails = false;
			this.activeQuestion = true;
		},
		closeCart() {
			this.activeDetails = false;
			this.activeQuestion = false;
		},
	},
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
	position: relative;
}

.active {
	grid-template-columns: 230px 135px 635px;
	grid-template-rows: 385px 75px 135px;
	grid-template-areas:
		"photo photo description"
		"buttons price description"
		"buttons provider description";
}

.photo,
.price,
.provider,
.buttons {
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;
	border-radius: 8px;
	padding: 20px;
}
</style>
