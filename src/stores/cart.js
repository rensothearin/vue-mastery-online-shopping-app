import { reactive, computed } from "vue";

const state = reactive({
  items: [], // { name, price, color, size, image, qty }
})

export function useCart() {
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

    function clearCart() {
        cart.items.splice(0)
    }

    const itemCount = computed(() => state.items.reduce((s, i) => s + (i.qty || 0), 0))

    return { state, addItem, clearCart, itemCount }
}