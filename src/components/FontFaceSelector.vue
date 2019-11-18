<template>
<QInput
  type="text"
  stack-label="Font family"
  v-model="fontFamily"
>
  <QAutocomplete
    :filter="autocompleteFilter"
    :debounce="0"
    :static-data="{
      field: 'value',
      list: [
        {label: 'Arial', value: 'Arial'},
        {label: 'Arial Black', value: 'Arial Black'},
        {label: 'Bookman', value: 'Bookman'},
        {label: 'Comic Sans MS', value: 'Comic Sans MS'},
        {label: 'Courier', value: 'Courier'},
        {label: 'Courier New', value: 'Courier new'},
        {label: 'cursive', value: 'cursive'},
        {label: 'fantasy', value: 'fantasy'},
        {label: 'Garamond', value: 'Garamond'},
        {label: 'Georgia', value: 'Georgia'},
        {label: 'Helvetica', value: 'Helvetica'},
        {label: 'Impact', value: 'Impact'},
        {label: 'Material Icons', value: 'Material Icons', sublabel: 'https://material.io/icons'},
        {label: 'monospace', value: 'monospace'},
        {label: 'Open Sans', value: 'Open Sans'},
        {label: 'Palatino', value: 'Palatino'},
        {label: 'Roboto', value: 'Roboto'},
        {label: 'serif', value: 'serif'},
        {label: 'sans-serif', value: 'sans-serif'},
        {label: 'system-ui', value: 'system-ui'},
        {label: 'Times', value: 'Times'},
        {label: 'Times New Roman', value: 'Times New Roman'},
        {label: 'Trebuchet MS', value: 'Trebuchet MS'},
        {label: 'Ubuntu', value: 'Ubuntu'},
        {label: 'Verdana', value: 'Verdana'}
      ]
    }"
  />
</QInput>
</template>

<script>
import {
  QAutocomplete,
  QInput
} from 'quasar'
import fuzzysearch from 'fuzzysearch'

export default {
  components: {
    QAutocomplete,
    QInput
  },
  data () {
    return {
      fontFamily: 'sans-serif'
    }
  },
  methods: {
    autocompleteFilter (terms, { field, list }) {
      const token = terms.toLowerCase()
      return list.filter(item => fuzzysearch(token, item[field].toLowerCase()))
    }
  },
  watch: {
    fontFamily (val) {
      this.$emit('input', val)
    }
  }
}
</script>

