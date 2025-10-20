import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('product', () => {

  const womenTees = ref([
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
    "https://www.stormtechusa.com/cdn/shop/products/CT-1W_BLACK.jpg?v=1755643022&width=1200",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
    "https://www.american-giant.com/cdn/shop/products/W2-2P-1-WH_0605.jpg?v=1653598909",
  ]);

  const menTees = ref([
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
    "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
  ]);

  const menProduct = ref({
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Men', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: menTees.value[0],
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: menTees.value[1],
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: menTees.value[2],
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: menTees.value[3],
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { id : 'mixed', name: 'Mixed', classes: 'bg-gradient-to-r from-white via-gray-200 to-gray-900 checked:outline-gray-600' },
      { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
      { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  })

  const womenProduct = ref({
    name: 'Women Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Women', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
      {
        src: womenTees.value[0],
        alt: 'Two each of gray, white, and black shirts laying flat.',
      },
      {
        src: womenTees.value[1],
        alt: 'Model wearing plain black basic tee.',
      },
      {
        src: womenTees.value[2],
        alt: 'Model wearing plain gray basic tee.',
      },
      {
        src: womenTees.value[3],
        alt: 'Model wearing plain white basic tee.',
      },
    ],
    colors: [
      { id : 'mixed', name: 'Mixed', classes: 'bg-gradient-to-r from-white via-gray-200 to-gray-900 checked:outline-gray-600' },
      { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
      { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
      { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [
      { name: 'XXS', inStock: false },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: true },
      { name: '2XL', inStock: true },
      { name: '3XL', inStock: true },
    ],
    description:
      'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
      'Hand cut and sewn locally',
      'Dyed with our proprietary colors',
      'Pre-washed & pre-shrunk',
      'Ultra-soft 100% cotton',
    ],
    details:
      'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
  })

  const reviews = ref({ href: '#', average: 4, totalCount: 117 })

  return {
    menProduct,
    womenProduct,
    reviews,
  }
})
