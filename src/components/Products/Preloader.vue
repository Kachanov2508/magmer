<template>
	<div class="preloader">
		<div class="photo"></div>
		<div class="description"></div>
		<div class="price"></div>
		<div class="provider"></div>
		<div class="buttons"></div>
	</div>
</template>

<script>
export default {
	name: "Preloader",
};
</script>

<style scoped>
.preloader {
	margin-bottom: 60px;
	display: grid;
	grid-template-columns: 230px 385px 135px 230px;
	grid-template-rows: 75px 135px;
	gap: 20px;
	grid-template-areas:
		"photo description price buttons"
		"photo description provider buttons";
}

.photo {
	grid-area: photo;
}

.description {
	grid-area: description;
}

.price {
	grid-area: price;
}

.provider {
	grid-area: provider;
}

.buttons {
	grid-area: buttons;
}

.photo,
.description,
.price,
.provider,
.buttons {
    border-radius: 8px;
	background-image: linear-gradient(
		-45deg,
		#e1e1e1 0%,
		#e1e1e1 45%,
		#e9e9e9 50%,
		#e1e1e1 55%,
		#e1e1e1 100%
	);
	background-size: 400% 400%;
	animation: AnimationName 1s ease-in-out infinite;
}

@keyframes AnimationName {
    0% {
        background-position: 100%;
    }
    100% {
        background-position: 0%;
    }
}
</style>
