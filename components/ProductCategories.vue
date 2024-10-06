<template>
  <div class="container">
    <div class="flex items-center product-categories">
      <a href="#" v-for="item in items">
        <span :key="item">
          {{ item }}
        </span>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
type TProductCategoriesProps = {
  items: string[];
};
defineProps<TProductCategoriesProps>();
</script>

<style scoped></style>
