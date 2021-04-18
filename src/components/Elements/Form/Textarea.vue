<template>
	<textarea class="neomorphism__inset"
        :placeholder="placeholder" 
        v-model="value" 
        @keyup="test" />
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
	methods: {
		test() {
			console.log(this.value);
		},
	},
};
</script>

<style lang="scss" scoped>
    textarea {
        border: none;
        outline: none;
        background: none;
        width: 100%;
        height: 100%;
        padding: 20px;
        font-size: 21px;
    }
</style>
