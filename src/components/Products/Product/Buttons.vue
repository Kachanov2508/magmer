<template>
	<div class="buttons">
		<button class="btn">В корзину</button>
		<button :class="[{neomorphismInset: questionButton},'btn']" @click="$emit('questionButton')">Задать вопрос</button>
		<button :class="[{neomorphismInset: activeButton},'btn']" @click="$emit('detailsButton')">Подробнее</button>
	</div>
</template>

<script>
export default {
	name: "Buttons",
	props: ["activeButton", "questionButton"],
	methods: {},
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
