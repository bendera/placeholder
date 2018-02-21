<template>
  <div
    class="slider-field"
  >
    <span class="slider-field__label" v-if="label">{{ label }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: false
    }
  }
}
</script>

<style>
.slider-field {
  margin-bottom: 8px;
  margin-top: 16px;
}

.slider-field__label {
  color: rgba(0, 0, 0, 0.46);
  font-size: 12px;
}

.slider-field:focus .slider-field__label {
  color: red;
}
</style>
