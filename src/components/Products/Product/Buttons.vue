<template>
	<div class="buttons">
		<button class="btn">В корзину</button>
		<button class="btn">Задать вопрос</button>
		<button class="btn">Подробнее</button>
	</div>
</template>

<script>
export default {
	name: "Buttons",
};
</script>

<style scoped>
.buttons {
	grid-area: buttons;
	display: grid;
	grid-template-rows: repeat(3, max-content);
	row-gap: 20px;
}
</style>
