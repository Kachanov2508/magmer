<template>
	<div class="information">
		<div>
			<h2>{{ title }}</h2>
			<p>{{ description }}</p>
		</div>
		<div class="specifications" v-if="activeDetails">
			<h3>Технические характеристики</h3>
			<ul v-if="Object.keys(specifications).length > 0">
				<li v-for="(key, value) in specifications" :key="key">
					<span>{{ value }}:</span><span>{{ key }}</span>
				</li>
			</ul>
			<p v-else>Информация отсутствует</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "Information",
	props: ["title", "description", "specifications", "activeDetails"],
};
</script>

<style scoped>

.information {
    height: 100%;
    padding: 30px;
	overflow: auto;
}

.information h2,
h3 {
	margin-bottom: 20px;
}

.information h2,
.specifications h3 {
	text-align: center;
	margin-bottom: 20px;
	font-size: 26px;
	font-weight: 400;
}

.specifications {
    margin-top: 35px;
}
.specifications ul {
	list-style: none;
}

.specifications ul li {
	margin-top: 30px;
	padding-bottom: 10px;
	display: flex;
	justify-content: space-between;
	text-align: center;
	border-bottom: 1px solid rgba(85, 85, 85, 0.5);
}

.specifications p {
	text-align: center;
}

/* Scrollbar */
.information {
	scrollbar-width: thin;
	scrollbar-color: #c7c7c7 #e9e9e9;
}

.information::-webkit-scrollbar {
	width: 8px;
	height: 12px;
	padding: 5px;
}

.information::-webkit-scrollbar-thumb {
	background-color: #c7c7c7;
	border: 1px solid #e9e9e9;
}
</style>
