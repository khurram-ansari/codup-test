<template>
  <div>
    <BaseButton
      @click="handleAddToCart"
      variant="secondary"
      class="cart-add-btn flex items-center justify-center"
    >
      <Icon name="mdi:plus" />
      <span>Add to Cart</span>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  addToCart: [quantity: number];
}>();

const handleAddToCart = () => {
  emit("addToCart", 1);
};
</script>

<style scoped></style>
