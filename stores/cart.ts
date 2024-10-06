import { defineStore } from "pinia";

import type { TCartProduct } from "~/types";

export const useCartStore = defineStore("cart", () => {
  const cartItems = ref<TCartProduct[]>([]);
  const cartDrawer = ref(false);

  function addToCart(product: TCartProduct) {
    const existingItem = cartItems.value.find(
      (cartItem) => cartItem.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      cartItems.value.push(product);
    }

    cartDrawer.value = true;
  }
  function toggleCartDrawer(value: boolean) {
    cartDrawer.value = value;
  }

  return { addToCart, cartItems, toggleCartDrawer, cartDrawer };
});
