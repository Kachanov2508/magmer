<template>
    <input class="neomorphism__inset" 
        :type="type" 
        :placeholder="placeholder" 
        v-model="value"
    />
</template>

<script>
    export default {
        data() {
            return {
                value: ""
            }
        },
        name: "Input",
        props: ["type", "placeholder"],
    }
</script>

<style lang="scss" scoped>
    input {
        background: none;
        border: none;
        outline: none;
        padding: 12px 20px;
        font-size: 21px;
        padding: 12px 20px;
        border-radius: 8px;
    }
</style>