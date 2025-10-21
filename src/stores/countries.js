import { defineStore } from 'pinia'
import axios from 'axios'

export const useCountriesStore = defineStore('countries', {
  state: () => ({
    countries: [],
    loading: false,
    error: null,
    lastFetched: null,
  }),
  actions: {
    async fetchCountries() {
      if (this.loading) return
      // If already have data, skip fetch
      if (this.countries && this.countries.length) return
      this.loading = true
      this.error = null
      try {
        const res = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/unicode')
        const list = Array.isArray(res?.data?.data) ? res.data.data : []
        this.countries = list.sort((a, b) => {
          const A = (a.name || '').toLowerCase()
          const B = (b.name || '').toLowerCase()
          if (A < B) return -1
          if (A > B) return 1
          return 0
        })
        this.lastFetched = Date.now()
      } catch (e) {
        this.error = 'Failed to fetch countries.'
        // keep any previous data
        // console.error(e)
      } finally {
        this.loading = false
      }
    },
    // convenience init used by main.js
    async init() {
      await this.fetchCountries()
    },
  },
  // allow pinia-plugin-persistedstate to persist this store
  // plugin-specific config varies; boolean enabled works for common plugins
  persist: true,
})
