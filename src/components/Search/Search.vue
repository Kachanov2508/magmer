<template>
	<div class="search">
		<Input />
		<Logo />
		<Example />
	</div>
</template>

<script>
import Logo from "./Logo";
import Input from "./Input";
import Example from "./Example";

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
