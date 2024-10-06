<template>
  <BaseHeader />
  <main>
    <slot />
  </main>
  <ClientOnly fallback-tag="span" fallback="Loading drawer component...">
    <CartDrawer />
  </ClientOnly>
</template>
