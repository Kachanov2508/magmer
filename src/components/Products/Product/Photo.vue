<template>
	<div class="photo">
		<img :src="showImg" :alt="alt" @error="noPhoto" />
		<div class="buttons" v-if="showSlider && photo.length > 1">
			<button :class="[{ disable: counter === 0 }, 'prev']" @click="prevPhoto">
				<i class="fas fa-chevron-left"></i>
			</button>
			<button :class="[{ disable: counter === photo.length - 1 }, 'next']" @click="nextPhoto">
				<i class="fas fa-chevron-right"></i>
			</button>
		</div>
	</div>
</template>

<script>
import noPhoto from "../../../assets/no-photo.jpg";
export default {
	data() {
		return {
			counter: 0,
			img: this.photo[0],
		};
	},

	name: "Photo",

	props: ["photo", "alt", "showSlider"],

	methods: {
		noPhoto() {
			this.img = noPhoto;
		},
		prevPhoto() {
			if (this.counter !== 0) this.counter--;
		},
		nextPhoto() {
			if (this.counter < this.photo.length - 1) this.counter++;
		},
	},
	computed: {
		showImg() {
			return this.img !== undefined ? this.photo[this.counter] : (this.img = noPhoto);
		},
	},
};
</script>

<style scoped lang="scss">
.photo {
	grid-area: photo;
	position: relative;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
		border-radius: 5px;
	}

	&:hover .buttons {
		display: block;
	}
}

.buttons {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: none;

	& button {
		color: #f7f7f7;
		background: rgba(0, 0, 0, 0.3);
		border-radius: 4px;
		border: none;
		outline: none;
		cursor: pointer;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		padding: 5px 10px;
	}

	& .prev {
		font-size: 25px;
		left: 25px;

		&:active {
			font-size: 23px;
		}
	}

	& .next {
		font-size: 25px;
		right: 25px;

		&:active {
			font-size: 23px;
		}
	}

	& .disable {
		color: #777777;

		&:active {
			font-size: 25px;
		}
	}
}
</style>
