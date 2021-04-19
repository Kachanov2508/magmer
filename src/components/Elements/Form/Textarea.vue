<template>
	<textarea class="neomorphism__inset"
        :placeholder="placeholder" 
        v-model="value" 
	/>
</template>

<script>
export default {
	data() {
		return {
			value: "",
		};
	},
	name: "Textarea",
	props: ["placeholder"],
};
</script>

<style lang="scss" scoped>
    textarea {
        border: none;
        outline: none;
        background: none;
		resize: none;
		border-radius: 8px;
        width: 100%;
        height: 100%;
        padding: 20px;
        font-size: 21px;
    }
</style>
