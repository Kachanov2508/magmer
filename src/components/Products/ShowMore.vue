<template>
	<div class="showMore">
		<Button @click="showMore">Показать еще</Button>
	</div>
</template>

<script>
import Button from "../Elements/Buttons/Button.vue";
export default {
	components: { Button },
	name: "ShowMore",
	methods: {
		showMore() {
			this.$store.dispatch("getProductsFromApi");
		},
	},
};
</script>

<style scoped>
.showMore {
	width: 190px;
	margin: 120px auto 0 auto;
}
</style>
