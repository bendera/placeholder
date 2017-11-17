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
          prefix="#"
        />
        <QInput
          type="text"
          float-label="Background color"
          v-model="backgroundColor"
          prefix="#"
        />
        <QInput
          type="text"
          float-label="Caption"
          v-model="caption"
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
        <div class="button-wrapper">
          <QBtn
            color="primary"
            big
          >Generate</QBtn>
        </div>

      </QCardMain>
    </QCard>
    <QCard>
      <QCardTitle>Output</QCardTitle>
      <QCardMain>
        <div id="canvas-demo"></div>
        <div class="image-preview">
          <img :src="dataURI" alt="">
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
  QSelect
} from 'quasar'
import CanvasRenderer from '../lib/CanvasRenderer'

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
      textColor: 'ffffff',
      backgroundColor: 'cccccc',
      caption: '',
      filetype: 'svg'
    }
  },
  computed: {
    dataURI () {
      console.log('datauri computed')
      const cr = new CanvasRenderer(this.width, this.height)

      return cr.getDataURI()
    }
  },
  methods: {
    selectDataURI (event) {
      event.target.setSelectionRange(0, event.target.value.length)
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
.image-params-form {
  /*max-width: 600px;*/
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
}

.image-preview img {
  display: block;
  max-height: 100%;
  max-width: 100%;
}
</style>
