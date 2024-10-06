<template>
  <HeroBanner
    title="Welcome to Voxel"
    description="Discover our wide range of products"
  />

  <ProductCategories :items="data.categories" />
  <ProductGrid :products="data.products" />
</template>

<script setup lang="ts">
import { TProduct } from "~/types";
type ResponseData = {
  categories: string[];
  products: TProduct[];
};
const { data, status } = await useAsyncData<ResponseData>(
  "products-categories",
  async () => {
    const baseUrl = "https://fakestoreapi.com/products";
    const [categories, products] = await Promise.all([
      $fetch(`${baseUrl}/categories`),
      $fetch(`${baseUrl}/`),
    ]);

    return { categories, products };
  }
);
</script>
<style scoped></style>
