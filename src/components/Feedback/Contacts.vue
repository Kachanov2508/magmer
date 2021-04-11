<template>
	<div class="contacts neomorphism">
		<p>Обратная связь</p>
		<p>Заполните форму и мы обязательно свяжемся с вами</p>
		<form>
			<input class="neomorphismInset" type="text" placeholder="Имя" />
			<input
				class="neomorphismInset"
				type="tel"
				placeholder="+7(999)999-99-99"
			/>
			<input class="neomorphismInset" type="email" placeholder="Email" />
		</form>
	</div>
</template>

<script>
export default {
	name: "Contacts",
};
</script>

<style scoped>
.contacts {
	grid-area: contacts;
	padding: 20px;
}

.contacts p:nth-child(1) {
	font-size: 26px;
	font-weight: 500;
}

.contacts form {
	margin-top: 20px;
	display: grid;
	row-gap: 20px;
}

.contacts form input {
	background: none;
	border: none;
	outline: none;
	padding: 12px 20px;
	font-size: 21px;
	color: #555555;
}

.contacts form input:placeholder {
	color: #999999;
}
</style>
