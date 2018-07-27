<template>
<div>
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
</div>
</template>

<script>
import {
  QBtn,
  QInput
} from 'quasar'
import randomColor from 'randomcolor'
import Color from 'color'

export default {
  components: {
    QBtn,
    QInput
  },
  data () {
    return {
      backgroundColor: '#cccccc',
      textColor: '#ffffff'
    }
  },
  methods: {
    randomColors () {
      this.backgroundColor = randomColor()

      if (Color(this.backgroundColor).light()) {
        this.textColor = '#000000'
      }
      else {
        this.textColor = '#ffffff'
      }
    }
  },
  watch: {
    backgroundColor () {
      this.$emit('change', { ...this.$data })
    },
    textColor () {
      this.$emit('change', { ...this.$data })
    }
  }
}
</script>

