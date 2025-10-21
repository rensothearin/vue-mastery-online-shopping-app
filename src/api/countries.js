import { ref } from 'vue';
import axios from 'axios';

export function useCountriesApi() {
  const countries = ref([]);
  const loading = ref(true);
  const error = ref(null);

  const fetchCountries = async () => {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.get('https://countriesnow.space/api/v0.1/countries/flag/unicode');

      console.log('Fetched countries:', typeof (response))
      // Sort by common name for better UX
      countries.value = response.data.data.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    } catch (err) {
      error.value = 'Failed to fetch countries.'
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  // Automatically fetch countries when the composable is used
  fetchCountries();

  return { countries, loading, error, fetchCountries };
}