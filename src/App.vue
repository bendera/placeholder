<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <QLayout view="hHh Lpr lFf">
      <QToolbar slot="header">
        <QToolbarTitle>
          <QIcon
            name="photo"
            style="font-size: 2rem; margin-right: 5px;"
          />Placeholder image generator
        </QToolbarTitle>
        <a href="https://github.com/bendera/placeholder" class="gh-url">
          <QIcon name="ion-social-github" />
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
