<script setup lang="ts">
const actions = [
  {
    title: "Incidencias",
    icon: "mdi-alert-box-outline",
    value: "Incidencias",
  },
  {
    title: "Informes",
    icon: "mdi-chart-timeline-variant",
    value: "Informes",
  },
  {
    title: "Buscar",
    icon: "mdi-magnify",
    value: "Buscar",
  },
];
</script>

<template>
  <v-list class="w-100" density="compact" nav>
    <v-list-item
      v-for="action in actions"
      :key="action.title"
      :prepend-icon="action.icon"
      :title="action.title"
      :value="action.value"
    ></v-list-item>
  </v-list>
</template>
