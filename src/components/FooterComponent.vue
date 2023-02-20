<script setup lang="ts">
import { computed } from "vue";

const date = computed(() => new Date().getFullYear());
</script>

<template>
  <v-footer class="d-flex align-center justify-center">
    <span class="text-caption">Eagle, {{ date }}</span>
  </v-footer>
</template>
