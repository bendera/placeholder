<template>
  <div class="image-params-form">
    <QInput
      type="number"
      stack-label="Width"
      v-model="width"
    />
    <QInput
      type="number"
      stack-label="Height"
      v-model="height"
    />
    <QInput
      type="text"
      stack-label="Text color"
      v-model="textColor"
    />
    <QInput
      type="text"
      stack-label="Background color"
      v-model="backgroundColor"
    />
    <QBtn
      :small="true"
      icon="color_lens"
      color="secondary"
      @click="randomColors()"
    >Random color</QBtn>
    <QInput
      type="text"
      stack-label="Caption"
      v-model="caption"
    />
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
    <QInput
      type="number"
      stack-label="Font size"
      v-model="fontSize"
    />
    <QSelect
      radio
      stack-label="Font weight"
      v-model="fontWeight"
      :options="[
        {label: '100', value: '100'},
        {label: '200', value: '200'},
        {label: '300', value: '300'},
        {label: '400', value: '400'},
        {label: '500', value: '500'},
        {label: '600', value: '600'},
        {label: '700', value: '700'},
        {label: '800', value: '800'},
        {label: '900', value: '900'}
      ]"
    />
    <QSelect
      radio
      stack-label="Filetype"
      v-model="filetype"
      :options="[
        {label: 'SVG', value: 'svg'},
        {label: 'PNG', value: 'png'}
      ]"
    />
    <div class="image-preview">
      <img :src="dataURI" alt="preview image">
    </div>
    <QInput
      prefix="&amp;lt;img&nbsp;src=&quot;"
      suffix="&quot;&gt;"
      stack-label="Data URI"
      v-model="dataURI"
      readonly
      @focus="selectDataURI($event)"
      @click="selectDataURI($event)"
    />
    <a
    :href="dataURI"
    class="
      q-btn
      row
      inline
      flex-center
      q-focusable
      q-hoverable
      relative-position
      q-btn-rectangle
      q-btn-big
      bg-primary
      text-white
      full-width
      btn-download
    "
    :download="friendlyFilename"
    >
      <div class="desktop-only q-focus-helper"></div>
      <span class="q-btn-inner row col flex-center">Download image</span>
    </a>
  </div>
</template>

<script>
import {
  QAutocomplete,
  QBtn,
  QCard,
  QCardMain,
  QCardTitle,
  QInput,
  QOptionGroup,
  QSelect,
  debounce
} from 'quasar'
import fuzzysearch from 'fuzzysearch'
import randomColor from 'randomcolor'
import Color from 'color'
import PNGRenderer from '../lib/PNGRenderer'
import SVGREnderer from '../lib/SVGRenderer'

const renderers = {
  svg: new SVGREnderer(),
  png: new PNGRenderer()
}

export default {
  components: {
    QAutocomplete,
    QBtn,
    QCard,
    QCardMain,
    QCardTitle,
    QInput,
    QOptionGroup,
    QSelect
  },
  data () {
    return {
      width: 600,
      height: 400,
      textColor: '#ffffff',
      backgroundColor: '#cccccc',
      caption: '',
      fontFamily: 'Helvetica',
      fontSize: 40,
      fontWeight: '400',
      fontAlign: 'center',
      filetype: 'png',
      dataURI: ''
    }
  },
  computed: {
    friendlyFilename () {
      const fg = this.textColor.replace(/#/, '')
      const bg = this.backgroundColor.replace(/#/, '')

      let retval = `dummy_${this.width}x${this.height}_${fg}_${bg}`

      if (this.caption !== '') {
        let sanitizedCaption = this.caption.replace(/\s/g, '-')
        sanitizedCaption = sanitizedCaption.replace(/[^A-Za-z0-9-]/g, '')
        sanitizedCaption = sanitizedCaption.toLowerCase()

        retval = `${retval}_${sanitizedCaption}`
      }

      retval = `${retval}.${this.filetype}`

      return retval
    },
    rendererParams () {
      return {
        width: this.width,
        height: this.height,
        textColor: this.textColor,
        backgroundColor: this.backgroundColor,
        caption: this.caption !== '' ? this.caption : `${this.width} x ${this.height}`,
        fontFamily: this.fontFamily,
        fontSize: this.fontSize,
        fontWeight: this.fontWeight,
        filetype: this.filetype
      }
    }
  },
  watch: {
    rendererParams () {
      this.updateImage()
    }
  },
  methods: {
    updateImage: debounce(function updateImageDebounced () {
      this.updateDataURI()
    }, 400),
    updateDataURI () {
      this.dataURI = renderers[this.filetype].render(this.rendererParams)
    },
    selectDataURI (event) {
      event.target.setSelectionRange(0, event.target.value.length)
    },
    randomColors () {
      this.backgroundColor = randomColor()

      if (Color(this.backgroundColor).light()) {
        this.textColor = '#000000'
      }
      else {
        this.textColor = '#ffffff'
      }

      this.updateDataURI()
    },
    autocompleteFilter (terms, { field, list }) {
      const token = terms.toLowerCase()
      return list.filter(item => fuzzysearch(token, item[field].toLowerCase()))
    }
  },
  mounted () {
    this.updateImage()
  }
}
</script>

<style scoped>
.image-params-form {
  margin: 0 auto;
  max-width: 90vw;
  padding-bottom: 50px;
  width: 500px;
}

.button-wrapper{
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.image-preview {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 200px;
  margin-top: 50px;
}

.image-preview img {
  display: block;
  max-height: 100%;
  max-width: 100%;
}

.btn-download {
  appearance: none;
}
</style>
