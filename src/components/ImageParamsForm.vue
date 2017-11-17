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
      </QCardMain>
    </QCard>
    <QCard>
      <QCardTitle>Output</QCardTitle>
      <QCardMain>
        <div class="image-preview">
          <img src="http://dummyimage.com/600x400" alt="">
        </div>
        <QInput
          stack-label="Data URI"
          v-model="dataURI"
          readonly
        />
      </QCardMain>
    </QCard>
  </div>
</template>

<script>
import {
  QCard,
  QCardMain,
  QCardTitle,
  QField,
  QInput,
  QOptionGroup,
  QSelect
} from 'quasar'

export default {
  components: {
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
      filetype: 'svg',
      dataURI: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22276%22%20height%3D%22124%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20276%20124%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15fc9f4665e%20text%20%7B%20fill%3A%2375ab8e%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15fc9f4665e%22%3E%3Crect%20width%3D%22276%22%20height%3D%22124%22%20fill%3D%22%2393d6b2%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22100.875%22%20y%3D%2268.3%22%3E276x124%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    }
  }
}
</script>

<style scoped>
.image-params-form {
  /*max-width: 600px;*/
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
