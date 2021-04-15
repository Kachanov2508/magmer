<template>
	<div class="question">
		<input class="neomorphismInset" type="text" placeholder="Имя" />
		<input class="neomorphismInset" type="text" placeholder="+7(999)999-99-99" />
		<input class="neomorphismInset" type="text" placeholder="Email" />
		<textarea class="neomorphismInset" placeholder="Ваш вопрос по данному аттракциону" />
		<div>
			<p>Конфиденциальность</p>
			<p>Мы обязуемся не передавать полученную информацию третьим лицам.</p>
		</div>
		<div class="buttons">
			<button class="btn">Отправить</button>
			<div class="phone">
				<button class="roundButton">
					<img src="../../../../assets/icon/phone.svg" alt="icon phone" />
				</button>
				<span>Позвонить</span>
			</div>
			<div class="email">
				<button class="roundButton">
					<img src="../../../../assets/icon/email.svg" alt="icon email" />
				</button>
				<span>Написать</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Question",
};
</script>

<style scoped>
.question {
	padding: 20px;
	display: grid;
	row-gap: 20px;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    column-gap: 20px;
}

.phone, .email {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    align-items: center;
    column-gap: 10px;
    font-size: 21px;
}

input,
textarea {
	border: none;
	background: none;
	outline: none;
	padding: 12px 20px;
	font-weight: 300;
	font-size: 21px;
	color: #555555;
	font-family: inherit;
}

textarea {
	resize: none;
	height: 246px;
}

.question div p:nth-child(1) {
	font-size: 21px;
	font-weight: 300;
	margin-bottom: 5px;
}
.question div p:nth-child(2) {
	font-weight: 300;
}
</style>
