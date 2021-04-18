<template>
	<div class="buttons">
		<Button>В корзину</Button>
		<Button :activeButton="questionButton" @click="$emit('questionButton')">Задать вопрос</Button>
		<Button :activeButton="detailsButton" @click="$emit('detailsButton')">Подробнее</Button>
	</div>
</template>

<script>
import Button from '../../Elements/Buttons/Button.vue';
export default {
	components: { Button },
	name: "Buttons",
	props: ["detailsButton", "questionButton"],
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
