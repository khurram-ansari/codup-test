<template>
  <NuxtLoadingIndicator />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
const cartStore = useCartStore();

cartStore.$subscribe((_, state) => {
  // persist the whole state to the local storage whenever it changes
  localStorage.setItem("cart", JSON.stringify(state));
});
</script>
