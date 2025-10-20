// src/stores/cart.js

import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";

export const useCart = defineStore('cart', () => {
    const state = reactive({
        items: [], // { name, price, color, size, image, qty }
    })

    const tax = ref(0.07) // 7% tax for example

    function addItem(item) {
        const match = state.items.find(
            (i) => i.name === item.name && i.color === item.color && i.size === item.size
        )
        if (match) {
            match.qty = (match.qty || 1) + (item.qty || 1)
        } else {
            state.items.push({ ...item, qty: item.qty || 1 })
        }
    }

    function removeItem(i) {
        state.items.splice(i, 1);
    }

    function clearCart() {
        state.items.splice();
    }

    const itemCount = computed(() => state.items.reduce((s, i) => s + (i.qty || 0), 0))

    const rawSubTotal = computed(() => {
        if (!state.items || state.items.length === 0) return 0
        return state.items.reduce((sum, it) => {
            const n = parseFloat(String(it.price).replace(/[^0-9.]/g, '')) || 0
            return sum + n * (it.qty || 1)
        }, 0)
    })

    const subTotal = computed(() => {
        return rawSubTotal.value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    })

    return { state, addItem, clearCart, itemCount, removeItem, subTotal, tax, rawSubTotal };
});