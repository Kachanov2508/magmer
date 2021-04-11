<template>
	<div class="provider">
		{{ provider }}
	</div>
</template>

<script>
export default {
	name: "Provider",
	props: ["provider"],
};
</script>

<style scoped>
.provider {
	grid-area: provider;

	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-weight: 400;
	font-size: 19px;
}
</style>
