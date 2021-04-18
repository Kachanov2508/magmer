<template>
	<div class="typeConnect neomorphism">
		<p class="heading">Вид связи</p>
		<p>Как вы хотите получить ответ на обращение</p>
		<div class="buttons">
			<div class="phone">
				<RoundButton :activeButton="phone" @click="activePhone">
					<i class="fas fa-phone"></i>
				</RoundButton>
				<span @click="activePhone">Позвонить</span>
			</div>
			<div class="email">
				<RoundButton :activeButton="email" @click="activeEmail">
					<i class="fas fa-envelope"></i>
				</RoundButton>
				<span @click="activeEmail">Написать</span>
			</div>
		</div>
		<Button>Задать вопрос</Button>
	</div>
</template>

<script>
import Button from "../Elements/Buttons/Button.vue";
import RoundButton from "../Elements/Buttons/RoundButton.vue";
export default {
	components: { Button, RoundButton },
	name: "TypeConnect",
	data() {
		return {
			phone: false,
			email: true,
		};
	},
	methods: {
		activePhone() {
			this.phone = true;
			this.email = false;
		},
		activeEmail() {
			this.email = true;
			this.phone = false;
		},
	},
};
</script>

<style lang="scss" scoped>
.heading {
	font-size: 26px;
	font-weight: 500;
}

.buttons {
	margin: 20px 0;
	display: grid;
	grid-template-columns: repeat(2, max-content);
	column-gap: 20px;
}

.phone,
.email {
	display: grid;
	grid-template-columns: repeat(2, max-content);
	column-gap: 10px;
	align-items: center;

	& span {
		font-size: 21px;
		cursor: default;
	}
}
</style>
