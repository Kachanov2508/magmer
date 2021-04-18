<template>
	<div class="question">
		<Input type="text" placeholder="Имя" />
		<Input type="text" placeholder="+7(999)999-99-99" />
		<Input type="text" placeholder="Email" />
		<Textarea placeholder="Ваш вопрос по данному аттракциону" />
		<div>
			<p>Конфиденциальность</p>
			<p>Мы обязуемся не передавать полученную информацию третьим лицам.</p>
		</div>
		<div class="buttons">
			<Button>Отправить</Button>
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
	</div>
</template>

<script>
import Button from "../../../Elements/Buttons/Button.vue";
import RoundButton from "../../../Elements/Buttons/RoundButton.vue";
import Input from "../../../Elements/Form/Input.vue";
import Textarea from "../../../Elements/Form/Textarea.vue";
export default {
	components: { Input, Textarea, Button, RoundButton },
	name: "Question",
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
.question {
	display: grid;
	grid-template-rows: max-content max-content max-content 246px max-content max-content;
	padding: 20px;
	row-gap: 20px;

	& div {
		& p:nth-child(1) {
			font-size: 21px;
			font-weight: 300;
			margin-bottom: 5px;
		}

		& p:nth-child(2) {
			font-weight: 300;
		}
	}
}

.buttons {
	display: grid;
	grid-template-columns: 190px max-content max-content;
	column-gap: 20px;
}

.phone,
.email {
	display: grid;
	grid-template-columns: repeat(2, max-content);
	align-items: center;
	column-gap: 10px;
	font-size: 21px;

	& span {
		cursor: default;
	}
}
</style>
