<script setup lang="js">
import ShowroomsItem from "./showrooms-item.vue";

const { showrooms } = defineProps({ showrooms: { type: Array, required: true } });

</script>

<template>
  <div v-for="showroom in showrooms" :key="showroom.id()">
    <showrooms-item :showroom="showroom"/>
  </div>
</template>

<style scoped>

</style>