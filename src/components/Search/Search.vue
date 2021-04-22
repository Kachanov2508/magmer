<template>
	<div class="search">
		<Input />
		<Logo />
		<Example />
	</div>
</template>

<script>
import Logo from "./Logo.vue";
import Input from "./Input.vue";
import Example from "./Example.vue";

export default {
	components: { Logo, Input, Example },
	name: "Search",
};
</script>

<style scoped>
.search {
	display: grid;
	grid-template-columns: 790px 1fr;
	align-items: center;
	column-gap: 20px;
	margin-top: 50px;
}
</style>
