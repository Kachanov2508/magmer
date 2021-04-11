<template>
	<div class="filter">
		<Quantity />
		<div>
			<img src="../../assets/icon/filter.svg" alt="filter icon" />
			<p>сортировать</p>
		</div>
	</div>
</template>

<script>
import Quantity from "./Quantity";
export default {
	components: { Quantity },
	name: "Filter",
};
</script>

<style scoped>
.filter {
	margin-top: 80px;
	display: flex;
	justify-content: space-between;
	font-size: 18px;
}

div {
	display: grid;
	grid-template-columns: repeat(2, max-content);
	align-items: center;
	column-gap: 10px;
}
</style>
