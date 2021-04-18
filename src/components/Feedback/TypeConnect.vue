<template>
	<div class="typeConnect neomorphism">
		<p class="heading">Вид связи</p>
		<p>Как вы хотите получить ответ на обращение</p>
		<div class="buttons">
			<div class="phone">
				<button
					:class="[{ active: $store.state.feedback.phone }, 'btnType']"
					@click="activePhone"
				>
					<img src="../../assets/icon/phone.svg" alt="icon phone" />
				</button>
				<span @click="activePhone">Позвонить</span>
			</div>
			<div class="email">
				<button
					:class="[{ active: $store.state.feedback.email }, 'btnType']"
					@click="activeEmail"
				>
					<img src="../../assets/icon/email.svg" alt="icon email" />
				</button>
				<span @click="activeEmail">Написать</span>
			</div>
		</div>
		<Button>Задать вопрос</Button>
	</div>
</template>

<script>
import Button from '../Elements/Buttons/Button.vue';
export default {
	components: { Button },
	name: "TypeConnect",
	methods: {
		activePhone() {
			this.$store.state.feedback.phone = true;
			this.$store.state.feedback.email = false;
		},
		activeEmail() {
			this.$store.state.feedback.email = true;
			this.$store.state.feedback.phone = false;
		},
	},
};
</script>

<style scoped>
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
}

.btnType {
	width: 40px;
	height: 40px;
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;
	padding: 10px;
	border-radius: 50%;
	border: none;
	outline: none;
	cursor: pointer;
}

img {
	width: 100%;
	height: 100%;
	object-fit: contain;
	display: block;
}

span {
	font-size: 21px;
	cursor: default;
}

.active {
	box-shadow: inset -3px -3px 5px 0 #ffffff, inset 3px 3px 5px 0 #c6c6c6;
}
</style>
