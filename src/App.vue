<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <QLayout>
      <QToolbar slot="header">
        <q-toolbar-title>Placeholder image generator</q-toolbar-title>
        <a href="https://github.com/bendera/holderimage" class="gh-url">
          <q-icon name="ion-social-github" />
        </a>
      </QToolbar>
      <ImageParamsForm />
    </QLayout>
  </div>
</template>

<script>
import {
  QIcon,
  QField,
  QInput,
  QLayout,
  QToolbar,
  QToolbarTitle
} from 'quasar'
import ImageParamsForm from './components/ImageParamsForm'

export default {
  components: {
    QIcon,
    QField,
    QInput,
    QLayout,
    QToolbar,
    QToolbarTitle,
    ImageParamsForm
  }
}
</script>

<style scoped>
.gh-url {
  color: #fff;
}
</style>
