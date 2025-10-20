<template>
  <div class="bg-gray-50 min-h-screen py-6">
    <div class="mx-auto max-w-6xl px-4">
      <div class="rounded-lg bg-white border border-gray-200 p-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Left: form -->
          <div class="lg:col-span-2 space-y-8">
            <!-- Contact information -->
            <section>
              <h2 class="text-sm font-semibold text-gray-900 mb-4">Contact information</h2>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm text-gray-700 mb-1">Email address</label>
                  <input v-model="form.email" type="email" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
                </div>
              </div>
            </section>

            <!-- Shipping information -->
            <section>
              <h2 class="text-sm font-semibold text-gray-900 mb-4">Shipping information</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm text-gray-700 mb-1">First name</label>
                  <input v-model="form.firstName" type="text" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-1">Last name</label>
                  <input v-model="form.lastName" type="text" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm text-gray-700 mb-1">Company</label>
                  <input v-model="form.company" type="text" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm text-gray-700 mb-1">Address</label>
                  <input v-model="form.address" type="text" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm text-gray-700 mb-1">Apartment, suite, etc.</label>
                  <input v-model="form.address2" type="text" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-1">City</label>
                  <input v-model="form.city" type="text" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-1">Country</label>
                  <select v-model="form.country" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-1">State / Province</label>
                  <input v-model="form.state" type="text" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div>
                  <label class="block text-sm text-gray-700 mb-1">Postal code</label>
                  <input v-model="form.zip" type="text" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
                <div class="sm:col-span-2">
                  <label class="block text-sm text-gray-700 mb-1">Phone</label>
                  <input v-model="form.phone" type="tel" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
              </div>
            </section>

            <!-- Delivery method -->
            <section>
              <h2 class="text-sm font-semibold text-gray-900 mb-4">Delivery method</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label
                  class="relative cursor-pointer rounded-md border p-4 flex justify-between items-start"
                  :class="delivery === 'standard' ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300 hover:border-gray-400'"
                >
                  <div>
                    <p class="font-medium text-gray-900">Standard</p>
                    <p class="text-xs text-gray-500">4–10 business days</p>
                    <p class="mt-2 text-sm text-gray-900">{{ formatCurrency(5) }}</p>
                  </div>
                  <input class="sr-only peer" type="radio" name="delivery" value="standard" v-model="delivery" />
                  <span class="mt-1 inline-flex h-4 w-4 rounded-full border"
                        :class="delivery === 'standard' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'"></span>
                </label>

                <label
                  class="relative cursor-pointer rounded-md border p-4 flex justify-between items-start"
                  :class="delivery === 'express' ? 'border-indigo-600 ring-2 ring-indigo-600' : 'border-gray-300 hover:border-gray-400'"
                >
                  <div>
                    <p class="font-medium text-gray-900">Express</p>
                    <p class="text-xs text-gray-500">2–5 business days</p>
                    <p class="mt-2 text-sm text-gray-900">{{ formatCurrency(16) }}</p>
                  </div>
                  <input class="sr-only peer" type="radio" name="delivery" value="express" v-model="delivery" />
                  <span class="mt-1 inline-flex h-4 w-4 rounded-full border"
                        :class="delivery === 'express' ? 'border-indigo-600 bg-indigo-600' : 'border-gray-300'"></span>
                </label>
              </div>
            </section>

            <!-- Payment -->
            <section>
              <h2 class="text-sm font-semibold text-gray-900 mb-4">Payment</h2>
              <div class="space-y-4">
                <div class="flex gap-6">
                  <label class="inline-flex items-center gap-2">
                    <input type="radio" class="text-indigo-600 focus:ring-indigo-500" value="card" v-model="payment" />
                    <span class="text-sm text-gray-900">Credit card</span>
                  </label>
                  <label class="inline-flex items-center gap-2">
                    <input type="radio" class="text-indigo-600 focus:ring-indigo-500" value="paypal" v-model="payment" />
                    <span class="text-sm text-gray-900">PayPal</span>
                  </label>
                  <label class="inline-flex items-center gap-2">
                    <input type="radio" class="text-indigo-600 focus:ring-indigo-500" value="etransfer" v-model="payment" />
                    <span class="text-sm text-gray-900">eTransfer</span>
                  </label>
                </div>

                <div v-if="payment === 'card'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="sm:col-span-2">
                    <label class="block text-sm text-gray-700 mb-1">Card number</label>
                    <input v-model="card.number" inputmode="numeric" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="4242 4242 4242 4242" />
                  </div>
                  <div class="sm:col-span-2">
                    <label class="block text-sm text-gray-700 mb-1">Name on card</label>
                    <input v-model="card.name" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label class="block text-sm text-gray-700 mb-1">Expiration date (MM/YY)</label>
                    <input v-model="card.exp" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="12/29" />
                  </div>
                  <div>
                    <label class="block text-sm text-gray-700 mb-1">CVC</label>
                    <input v-model="card.cvc" inputmode="numeric" class="w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="123" />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <!-- Right: order summary -->
          <aside class="lg:col-span-1">
            <div class="rounded-lg border border-gray-200">
              <div class="p-4">
                <h3 class="text-sm font-semibold text-gray-900">Order summary</h3>
              </div>
              <div class="border-t border-gray-200 divide-y">
                <div v-for="(it, idx) in state.items" :key="idx" class="flex gap-4 p-4">
                  <img :src="it.image" :alt="it.name" class="h-16 w-16 rounded-md object-cover border border-gray-200" />
                  <div class="flex-1">
                    <p class="text-sm text-gray-900 font-medium">{{ it.name }}</p>
                    <p class="text-xs text-gray-500">{{ it.color }}</p>
                    <p class="text-xs text-gray-500">{{ it.size }}</p>
                    <p class="mt-2 text-sm text-gray-900">{{ it.price }}</p>
                  </div>
                  <div class="flex flex-col items-end gap-2 qty-root">
                    <button @click="removeItem(idx)" class="text-gray-400 hover:text-gray-600" aria-label="Remove item">
                      <TrashIcon class="size-5" aria-hidden="true" />
                    </button>
                    <div class="relative">
                      <button type="button" @click="openQty = openQty === idx ? -1 : idx" class="inline-flex items-center justify-between w-16 rounded-md border border-gray-300 bg-white px-2 py-1 text-sm">
                        {{ it.qty }}
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" clip-rule="evenodd"/></svg>
                      </button>
                      <div class="absolute right-0 mt-1 w-24 rounded-md border border-gray-200 bg-white shadow focus:outline-none z-10" v-if="openQty === idx">
                        <ul class="py-1 text-sm">
                          <li v-for="n in 10" :key="n">
                            <button class="w-full text-left px-3 py-1 hover:bg-gray-50" @click="setQty(idx, n)">{{ n }}</button>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="p-4 space-y-2 text-sm">
                  <div class="flex justify-between">
                    <span class="text-gray-600">Subtotal</span>
                    <span class="text-gray-900">{{ subTotal }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Shipping</span>
                    <span class="text-gray-900">{{ formatCurrency(shippingCost) }}</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-600">Taxes</span>
                    <span class="text-gray-900">{{ formatCurrency(taxes) }}</span>
                  </div>
                  <div class="border-t pt-2 flex justify-between font-semibold">
                    <span class="text-gray-900">Total</span>
                    <span class="text-gray-900">{{ formatCurrency(total) }}</span>
                  </div>
                </div>

                <div class="p-4">
                  <button
                    @click="submit"
                    class="w-full rounded-md bg-indigo-600 py-2.5 text-white text-sm font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Confirm order
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>

    <!-- Tiny popover handler for qty (click outside to close) -->
    <button class="hidden" ref="outsideBtn" @click="openQty = -1"></button>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onBeforeUnmount } from 'vue'
import { storeToRefs } from 'pinia'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon, TrashIcon } from '@heroicons/vue/24/outline'

import { useCart } from '../stores/cart'

const { state, removeItem } = useCart()
const { subTotal, rawSubTotal, tax } = storeToRefs(useCart())

const form = reactive({
  email: '',
  firstName: '',
  lastName: '',
  company: '',
  address: '',
  address2: '',
  city: '',
  country: 'United States',
  state: '',
  zip: '',
  phone: ''
})

const delivery = ref('standard') // 'standard' | 'express'
const payment = ref('card')
const card = reactive({ number: '', name: '', exp: '', cvc: '' })

/** ---- Qty dropdown logic ---- */
const openQty = ref(-1)
function setQty(idx, n) {
  state.items[idx].qty = n
  openQty.value = -1
}

/** ---- Costs & totals ---- */
const shippingCost = computed(() => (delivery.value === 'express' ? 16 : 5))
const taxes = computed(() => rawSubTotal.value * tax.value)
const total = computed(() => rawSubTotal.value + shippingCost.value + taxes.value)

function formatCurrency(n) {
  return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(n || 0)
}

/** ---- Submit (demo) ---- */
function submit() {
  // Replace with real submit
  alert(`Order placed: ${formatCurrency(total.value)}`)
}

/** ---- Click outside to close qty ---- */
const outsideBtn = ref(null)
function onDocClick(e) {
  // Close qty menu if clicking outside any qty button/menu
  const target = e.target
  const inMenu = target.closest?.('.qty-root')
  if (!inMenu) openQty.value = -1
}
onMounted(() => document.addEventListener('click', onDocClick))
onBeforeUnmount(() => document.removeEventListener('click', onDocClick))
</script>
