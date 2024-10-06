<template>
  <button :class="variant" class="btn">
    <slot />
  </button>
</template>

<script setup lang="ts">
type TBtnProps = {
  variant?: "primary" | "ghost" | "secondary";
};

const props = withDefaults(defineProps<TBtnProps>(), {
  variant: "primary",
});
</script>

<style scoped></style>
