<template>
	<div class="feedback">
		<div class="header">
			<img src="../../assets/icon/questions.svg" alt="questions icon" />
			<h2>Появились вопросы</h2>
		</div>
		<div class="form">
			<Contacts />
			<TypeConnect />
			<Questions />
		</div>
	</div>
</template>

<script>
import Contacts from "./Contacts";
import TypeConnect from "./TypeConnect";
import Questions from "./Questions";
export default {
	name: "Feedback",
	components: { Contacts, TypeConnect, Questions },
};
</script>

<style scoped>
.feedback {
	margin-top: 120px;
}

.feedback .header {
	text-align: center;
}

.feedback .header h2 {
	margin-top: 20px;
	font-size: 40px;
	font-weight: 300;
}

.form {
	margin-top: 80px;
	display: grid;
	grid-template-columns: 385px 635px;
	grid-template-rows: 318px 220px;
	gap: 20px;
	grid-template-areas:
		"contacts questions"
		"typeConnect questions";
}

.typeConnect {
	grid-area: typeConnect;
	padding: 20px;
}

.questions {
	grid-area: questions;
	padding: 20px;
}
</style>
