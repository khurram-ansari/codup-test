<template>
  <section>
    <div class="container">
      <div class="product-grid">
        <ProductCard v-for="p in products" :key="p.id" :product="p" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { TProduct } from "~/types";
type TProductGridProps = {
  products: TProduct[];
};

defineProps<TProductGridProps>();
</script>

<style scoped></style>
