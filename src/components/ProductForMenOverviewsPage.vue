
<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li v-for="breadcrumb in menProduct.breadcrumbs" :key="breadcrumb.id">
            <div class="flex items-center">
              <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">{{ breadcrumb.name }}</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a :href="menProduct.href" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{ menProduct.name }}</a>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
        <img :src="displayedImages[0]?.src" :alt="displayedImages[0]?.alt" class="row-span-2 aspect-[3/4] size-full rounded-lg object-cover max-lg:hidden" />
        <img :src="displayedImages[1]?.src" :alt="displayedImages[1]?.alt" class="col-start-2 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden" />
        <img :src="displayedImages[2]?.src" :alt="displayedImages[2]?.alt" class="col-start-2 row-start-2 aspect-[3/2] size-full rounded-lg object-cover max-lg:hidden" />
        <img :src="displayedImages[3]?.src" :alt="displayedImages[3]?.alt" class="row-span-2 aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]" />
      </div>

      <!-- Product info -->
      <div class="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{{ menProduct.name }}</h1>
        </div>

        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">{{ menProduct.price }}</p>

          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[reviews.average > rating ? 'text-gray-900' : 'text-gray-200', 'size-5 shrink-0']" aria-hidden="true" />
              </div>
              <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
              <a :href="reviews.href" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">{{ reviews.totalCount }} reviews</a>
            </div>
          </div>

          <form class="mt-10" @submit.prevent="addToCart">
            <!-- Colors -->
            <div>
              <h3 class="text-sm font-medium text-gray-900">Color</h3>

              <fieldset aria-label="Choose a color" class="mt-4">
                <div class="flex items-center gap-x-3">
                  <div v-for="color in menProduct.colors" :key="color.id" class="flex rounded-full outline outline-1 -outline-offset-1 outline-black/10">
                    <input 
                        :aria-label="color.name" 
                        type="radio" 
                        name="color" 
                        :value="color.id" 
                        :class="[color.classes, 'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline checked:outline-1 checked:outline-offset-2 focus-visible:outline focus-visible:outline-[1px] focus-visible:outline-offset-[1px]']" 
                        v-model="selectedColor"/>
                  </div>
                </div>
              </fieldset>
            </div>

            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
              </div>

              <!-- <fieldset aria-label="Choose a size" class="mt-4">
                <div class="grid grid-cols-4 gap-3">
                  <label v-for="size in product.sizes" :key="size.name" :aria-label="size.name" class="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 has-[:checked]:border-indigo-600 has-[:disabled]:border-gray-400 has-[:checked]:bg-indigo-600 has-[:disabled]:bg-gray-200 has-[:disabled]:opacity-25 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-indigo-600">
                    <input 
                        type="radio" 
                        name="size" 
                        :value="size.name" 
                        :disabled="!size.inStock" 
                        v-model="selectedSize"
                        class="absolute inset-0 appearance-none rounded-md focus:outline focus:outline-0 disabled:cursor-not-allowed" />
                    <span class="text-sm font-medium uppercase text-gray-900 group-has-[:checked]:text-white">{{ size.name }}</span>
                  </label>
                </div>
              </fieldset> -->
              <fieldset aria-label="Choose a size" class="mt-4">
                <div class="grid grid-cols-4 gap-3">
                  <label
                    v-for="size in menProduct.sizes"
                    :key="size.name"
                    :aria-label="size.name"
                    class="relative cursor-pointer rounded-md border border-gray-300 bg-white p-3 text-center
                          flex items-center justify-center"
                  >
                    <input
                      type="radio"
                      name="size"
                      :value="size.name"
                      :disabled="!size.inStock"
                      v-model="selectedSize"
                      class="peer sr-only"
                    />
                    <span
                      class="z-10 text-sm font-medium uppercase text-gray-900 peer-checked:text-white peer-disabled:opacity-50"
                    >
                      {{ size.name }}
                    </span>
                    <div
                      class="absolute inset-0 rounded-md border transition
                            peer-checked:bg-indigo-600 peer-checked:border-indigo-600
                            peer-disabled:opacity-25"
                    ></div>
                  </label>
                </div>
              </fieldset>


            </div>

            <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Add to bag
            </button>
          </form>
        </div>

        <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-6">
              <p class="text-base text-gray-900">{{ menProduct.description }}</p>
            </div>
          </div>

          <div class="mt-10">
            <h3 class="text-sm font-medium text-gray-900">Highlights</h3>

            <div class="mt-4">
              <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                <li v-for="highlight in menProduct.highlights" :key="highlight" class="text-gray-400">
                  <span class="text-gray-600">{{ highlight }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <p class="text-sm text-gray-600">{{ menProduct.details }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { storeToRefs } from 'pinia'
import { useCartStore } from '../stores/cart'
import { useProductStore } from '../stores/product'

const cartStore = useCartStore()
const { addItem } = cartStore
const productStore = useProductStore()
const { menProduct, reviews } = storeToRefs(productStore)

const selectedColor = ref(menProduct.value.colors[0].id)
const colorImages = {
    mixed: menProduct.value.images[0],
    black: menProduct.value.images[1],
    gray: menProduct.value.images[2],
    white: menProduct.value.images[3],
}
const displayedImages = computed(() => {
  const mainImage = colorImages[selectedColor.value];
  if (!mainImage) {
    return menProduct.value.images; // Fallback to default images
  }
  // Return the selected color's image first, followed by other images, ensuring no duplicates.
  return [mainImage, ...menProduct.value.images.filter(img => img.src !== mainImage.src)];
})

const firstInStock = menProduct.value.sizes.find(size => size.inStock)
const selectedSize = ref(firstInStock ? firstInStock.name : menProduct.value.sizes[0].name)

function addToCart() {
  const p = menProduct.value
  if (!p) return
    addItem({
        name: menProduct.value.name,
        price: menProduct.value.price,
        color: selectedColor.value,
        size: selectedSize.value,
        image: displayedImages.value[0]?.src,
        qty: 1,
    })
}
</script>