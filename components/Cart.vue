<template>
  <BaseButton @click="handleCartOpenState(true)" variant="ghost">
    <Icon name="uil:cart" />
  </BaseButton>

  <Teleport to="body">
    <ClientOnly fallback-tag="span" fallback="Loading drawer component...">
      <CartDrawer
        :open="cartDrawer"
        @on-close="handleCartOpenState(false)"
        :cart-items="cartItems"
      />
    </ClientOnly>
  </Teleport>
</template>

<script setup lang="ts">
const cartStore = useCartStore();
const { cartDrawer, cartItems } = storeToRefs(cartStore);

const handleCartOpenState = (value: boolean) => {
  cartStore.toggleCartDrawer(value);
};
</script>

<style scoped></style>
