<template>
	<RoundButton class="closeButton" @click="$emit('closeButton')">
		<i class="fas fa-times"></i>
	</RoundButton>
</template>

<script>
import RoundButton from '../../Elements/Buttons/RoundButton.vue';
export default {
	components: { RoundButton },
	name: "CloseButton",
};
</script>

<style scoped lang="scss">
.closeButton {
	position: absolute;
	top: -20px;
	right: -20px;
}
</style>
