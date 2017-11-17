<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <QLayout>
      <QToolbar slot="header">
        Placeholder image generator
      </QToolbar>
      <ImageParamsForm />
    </QLayout>
  </div>
</template>

<script>
import {
  QField,
  QInput,
  QLayout,
  QToolbar,
  QToolbarTitle
} from 'quasar'
import ImageParamsForm from './components/ImageParamsForm'

export default {
  components: {
    QField,
    QInput,
    QLayout,
    QToolbar,
    QToolbarTitle,
    ImageParamsForm
  }
}
</script>
