<template>
  <div>
    <TransitionRoot as="template" :show="open">
      <Dialog class="relative z-10" @close="$emit('close')">
        <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="" leave="ease-in-out duration-500" leave-from="" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div class="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                        <div class="ml-3 flex h-7 items-center">
                          <button type="button" class="relative -m-2 p-2 text-gray-400 hover:text-gray-500" @click="$emit('close')">
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="size-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div class="mt-8">
                        <div class="flow-root">
                          <div v-if="state.items.length === 0" class="text-sm text-gray-500">Your cart is empty</div>
                          <ul v-else role="list" class="-my-6 divide-y divide-gray-200">
                            <li v-for="(it, i) in state.items" :key="i"class="flex py-6">
                              <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img :src="it.image" alt="" class="size-full object-cover" />
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div class="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a >{{ it.name }}</a>
                                    </h3>
                                    <p class="ml-4">{{ it.price }}</p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">{{ it.color }}</p>
                                </div>
                                <div class="flex flex-1 items-end justify-between text-sm">
                                  <p class="text-gray-500">Qty {{ it.qty }}</p>

                                  <div class="flex">
                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="removeItem(i)">Remove</button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div class="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>{{ subtotal }}</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div class="mt-6">
                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
                      </div>
                      <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{{ ' ' }}
                          <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" @click="$emit('close')">
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'

import { useCart } from '../stores/cart'

// Access the cart store from the parent component 
// to manage cart state and actions
// If using Pinia, ensure the store is properly initialized
// and imported in the parent component
// then passed down as needed.
// **Here we directly use the store for simplicity. If it's to use as function, then do not need to destructure.**
const { state, removeItem } = useCart()

defineProps({ open: Boolean })
defineEmits(['close'])

const tax = ref(0.07) // 7% tax for example

const subtotal = computed(() => {
  if (!state.items || state.items.length === 0) return '$0.00'
  const total = state.items.reduce((sum, it) => {
    // handle prices like "$192"
    const n = parseFloat(String(it.price).replace(/[^0-9.]/g, '')) || 0
    return sum + n * (it.qty || 1) * (1 + tax.value)
  }, 0)
  // format as USD
  return total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
})

</script>