<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          <a href="https://placeholderimage.dev" class="home">
            <q-icon
              name="photo"
              style="font-size: 2rem; margin-right: 5px;"
            /><span>Placeholder image generator</span>
          </a>
        </q-toolbar-title>
      </q-toolbar>
      <a href="https://github.com/bendera/placeholder" class="gh-url">
        <q-icon name="ion-logo-github" />
      </a>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data() {
    return {};
  },
};
</script>

<style scoped>
.home {
  align-items: center;
  color: #fff;
  display: flex;
}

.gh-url {
  color: #fff;
}
</style>
