<template>
  <div class="drawer" :class="{ open }">
    <div class="close">
      <BaseButton @click="handleCLose">
        <Icon name="mdi:close" />
      </BaseButton>
    </div>
    <div class="flex items-list">
      {{ JSON.stringify(cartItems) }}
    </div>
  </div>
</template>

<script setup lang="ts">
type TCartDrawerProps = {
  open: boolean;
  cartItems: TCartProduct[];
};
defineProps<TCartDrawerProps>();

const emit = defineEmits<{
  onClose: [];
}>();

const handleCLose = () => {
  emit("onClose");
};
</script>

<style scoped></style>
