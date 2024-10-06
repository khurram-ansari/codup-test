<template>
  <div class="container">
    <div class="flex items-center product-categories">
      <a href="#" @click="handleClick($event, item)" v-for="item in items">
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

const emit = defineEmits<{
  onItemClick: [item: string];
}>();

const handleClick = (e, item) => {
  e.preventDefault();

  emit("onItemClick", item);
};
</script>

<style scoped></style>
