<script setup lang="ts">
import { computed } from "vue";

const date = computed(() => new Date().getFullYear());
</script>

<template>
  <v-footer>
    <v-row justify="center" no-gutters>
      <v-col cols="12" sm="4"> {{ date }} — Eagle </v-col>
    </v-row>
  </v-footer>
</template>
