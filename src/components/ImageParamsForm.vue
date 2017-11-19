<template>
  <div class="image-params-form">
    <QCard>
      <QCardTitle>Options</QCardTitle>
      <QCardMain>
        <QInput
          type="number"
          float-label="Width"
          v-model="width"
          @change="updateImage()"
        />
        <QInput
          type="number"
          float-label="Height"
          v-model="height"
          @change="updateImage()"
        />
        <QInputColor
          type="color"
          float-label="Text color"
          v-model="textColor"
          @change="updateImage()"
        />
        <QInputColor
          type="color"
          float-label="Background color"
          v-model="backgroundColor"
          @change="updateImage()"
        />
        <QInput
          type="text"
          float-label="Caption"
          v-model="caption"
          @change="updateImage()"
        />
        <QSelect
          radio
          float-label="Filetype"
          v-model="filetype"
          :options="[
            {label: 'SVG', value: 'svg'},
            {label: 'PNG', value: 'png'}
          ]"
          @change="updateImage()"
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
import QInputColor from './QInputColor'
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
    QSelect,
    QInputColor
  },
  data () {
    return {
      width: 600,
      height: 400,
      textColor: '#ffffff',
      backgroundColor: '#cccccc',
      caption: '',
      filetype: 'png',
      dataURI: ''
    }
  },
  methods: {
    updateImage: debounce(function updateImageDebounced () {
      this.dataURI = renderers[this.filetype].render({
        width: this.width,
        height: this.height,
        textColor: this.textColor,
        backgroundColor: this.backgroundColor,
        caption: this.caption !== '' ? this.caption : `${this.width} x ${this.height}`,
        filetype: this.filetype
      })
    }, 400),
    selectDataURI (event) {
      event.target.setSelectionRange(0, event.target.value.length)
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
