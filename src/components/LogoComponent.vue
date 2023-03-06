<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  height: string;
}>();

const logoStyle = computed(() =>
  props.height ? `height:${props.height};` : "unset"
);
</script>

<template>
  <a class="egl-logo" href="./">
    <img src="../assets/eagle.svg" alt="Logo de eagle" :style="logoStyle" />
  </a>
</template>

<style scoped>
.egl-logo {
  will-change: filter;
  transition: filter 300ms;
}

.egl-logo img {
  height: 3em;
}
</style>
