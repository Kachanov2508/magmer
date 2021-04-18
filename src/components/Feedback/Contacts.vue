<template>
	<div class="contacts neomorphism">
		<p>Обратная связь</p>
		<p>Заполните форму и мы обязательно свяжемся с вами</p>
		<div>
			<Input type="text" placeholder="Имя" />
			<Input type="tel" placeholder="+7(999)999-99-99" />
			<Input type="email" placeholder="Email" />
		</div>
	</div>
</template>

<script>
import Input from "@/components/Elements/Form/Input.vue";
export default {
	components: { Input },
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

.contacts div {
	margin-top: 20px;
	display: grid;
	row-gap: 20px;
}
</style>
