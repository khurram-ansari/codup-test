<template>
  <div class="product-card flex">
    <div class="img-container">
      <NuxtImg :src="product.image" />
    </div>

    <div class="content flex justify-between">
      <h3>{{ product.title }}</h3>
      <div>{{ product.price }}</div>
    </div>

    <ProductAddToCart @add-to-cart="handleAddToCart($event)" />
  </div>
</template>

<script setup lang="ts">
type TProductCardProps = {
  product: TProduct;
};

const props = defineProps<TProductCardProps>();

const cartStore = useCartStore();

const handleAddToCart = (quantity: number) => {
  const payload = { ...props.product, quantity };
  cartStore.addToCart(payload);
};
</script>

<style scoped></style>
