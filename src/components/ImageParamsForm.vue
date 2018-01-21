<template>
  <div class="image-params-form">
    <QCard>
      <QCardTitle>Options</QCardTitle>
      <QCardMain>
        <QInput
          type="number"
          float-label="Width"
          v-model="width"
        />
        <QInput
          type="number"
          float-label="Height"
          v-model="height"
        />
        <QInput
          type="text"
          float-label="Text color"
          v-model="textColor"
        />
        <QInput
          type="text"
          float-label="Background color"
          v-model="backgroundColor"
        />
        <QBtn @click="randomColors()">Random color</QBtn>
        <QInput
          type="text"
          float-label="Caption"
          v-model="caption"
        />
        <QInput
          type="text"
          float-label="Font family"
          v-model="fontFamily"
        />
        <QInput
          type="number"
          float-label="Font size"
          v-model="fontSize"
        />
        <QSelect
          radio
          float-label="Font weight"
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
          float-label="Filetype"
          v-model="filetype"
          :options="[
            {label: 'SVG', value: 'svg'},
            {label: 'PNG', value: 'png'}
          ]"
        />
      </QCardMain>
    </QCard>
    <QCard>
      <QCardTitle>Output</QCardTitle>
      <QCardMain>
        <div id="canvas-demo"></div>
        <div class="image-preview">
          <img :src="dataURI" alt="preview image">
        </div>
        <QInput
          stack-label="Data URI"
          v-model="dataURI"
          readonly
          @focus="selectDataURI($event)"
        />
        <a
        :href="dataURI"
        class="q-btn row inline flex-center q-focusable q-hoverable relative-position q-btn-rectangle q-btn-big bg-primary text-white"
        :download="friendlyFilename"
        >
          <div class="desktop-only q-focus-helper"></div>
          <span class="q-btn-inner row col flex-center">Download image</span>
        </a>
      </QCardMain>
    </QCard>
  </div>
</template>

<script>
import {
  QBtn,
  QCard,
  QCardMain,
  QCardTitle,
  QField,
  QInput,
  QOptionGroup,
  QSelect,
  debounce
} from 'quasar'
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
    QBtn,
    QCard,
    QCardMain,
    QCardTitle,
    QField,
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
      fontFamily: 'Helvetica, Arial, sans-serif',
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
    }
  },
  mounted () {
    this.updateImage()
  }
}
</script>

<style scoped>
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
}

.image-preview img {
  display: block;
  max-height: 100%;
  max-width: 100%;
}
</style>
