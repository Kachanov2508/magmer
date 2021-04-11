<template>
	<div class="photo">
		<img :src="img" :alt="alt" @error="noPhoto" />
	</div>
</template>

<script>
import noPhoto from "../../../assets/no-photo.jpg";
export default {
	data() {
		return {
			img: this.photo,
		};
	},

	name: "Photo",

	props: ["photo", "alt"],

	methods: {
		noPhoto() {
			this.img = noPhoto;
		},
	},
};
</script>

<style scopes>
.photo {
	grid-area: photo;
}

.photo img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	border-radius: 5px;
}
</style>
