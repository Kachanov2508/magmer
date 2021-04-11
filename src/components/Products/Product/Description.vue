<template>
	<div class="description">
		<h2>{{ sliceText(title, 20) }}</h2>
		<p>{{ sliceText(description, 280) }}</p>
	</div>
</template>

<script>
export default {
	name: "Description",
	props: ["title", "description"],
	methods: {
		sliceText(text, num) {
			if (text.length > num) {
				return text.slice(0, num) + "...";
			} else {
				return text;
			}
		},
	},
};
</script>

<style scoped>
.description {
	grid-area: description;
}

.description h2 {
	text-align: center;
	margin-bottom: 10px;
	font-size: 26px;
	font-weight: 400;
}

.description p {
	overflow: hidden;
	-webkit-line-clamp: 8;
	display: -webkit-box;
	-webkit-box-orient: vertical;
}
</style>
