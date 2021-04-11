<template>
  <div class="showMore">
      <button class="btn" @click="showMore">Показать еще</button>
  </div>
</template>

<script>
export default {
    name: "ShowMore",
    methods: {
        showMore() {
            this.$store.state.ofset = this.$store.state.limit.length;
            this.$store.dispatch('getProductsFromApi');
        }
    }
}
</script>

<style scoped>
    .showMore {
        margin-top: 120px;
        text-align: center;
    }
</style>