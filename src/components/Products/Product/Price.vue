<template>
	<div class="price">{{ number }} ₽</div>
</template>

<script>
export default {
	data() {
		return {
			// number: this.price.toLocaleString("ru-RU", {style: "currency", currency: "RUB"})
			number: this.price.toLocaleString()
		}
	},
	name: "Price",
	props: ["price"],
};
</script>

<style scoped>
.price {
	grid-area: price;

	font-size: 21px;
	color: #009688;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
}
</style>
