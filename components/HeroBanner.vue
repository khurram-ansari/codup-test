<template>
  <section class="hero-banner text-center flex items-center justify-center">
    <div>
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
type THeroBannerProps = {
  title: string;
  description: string;
};
defineProps<THeroBannerProps>();
</script>

<style scoped></style>
