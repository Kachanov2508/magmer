<template>
	<div class="questions neomorphism">
		<Textarea placeholder="Ваш вопрос или комментарий" />
		<div class="topSecret">
			<img src="../../assets/icon/top-secret.svg" alt="top-secret icon" />
			<div class="text">
				<p>Конфиденциальность</p>
				<p>Мы обязуемся не передавать полученную информацию и контактные данные третьим лицам</p>
			</div>
		</div>
	</div>
</template>

<script>
import Textarea from "../Elements/Form/Textarea.vue";
export default {
	components: { Textarea },
	name: "Questions",
};
</script>

<style lang="scss" scoped>
.questions {
	display: grid;
	grid-template-rows: 418px 1fr;
	row-gap: 20px;
    
	& .topSecret {
		display: grid;
		grid-template-columns: max-content 1fr;
		column-gap: 20px;

		& img {
			transform: rotate(-15deg);
		}

		& .text {
			opacity: 0.5;
		}

		& .text p:nth-child(1) {
			font-size: 26px;
		}
	}
}
</style>
