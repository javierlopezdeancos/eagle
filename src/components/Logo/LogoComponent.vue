<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>

<template>
  <a class="egl-logo" href="./">
    <img src="../../assets/eagle.svg" alt="Logo de eagle" />
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

.egl-logo:hover {
  filter: drop-shadow(0 0 0.3em #6a005148);
}
</style>
