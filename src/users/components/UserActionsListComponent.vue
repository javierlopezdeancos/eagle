<script setup lang="ts">
import UserListItemComponent from "./UserListItemComponent.vue";

const actions = [
  {
    title: "Notificaciones",
    icon: "mdi-bell-outline",
    value: "4",
  },
  {
    title: "Logros",
    icon: "mdi-trophy-outline",
    value: "1",
  },
];
</script>

<template>
  <v-list density="compact" nav>
    <v-list-item
      v-for="action in actions"
      :key="action.title"
      :prepend-icon="action.icon"
      :title="action.title"
      :value="action.value"
    ></v-list-item>
    <UserListItemComponent />
  </v-list>
</template>
