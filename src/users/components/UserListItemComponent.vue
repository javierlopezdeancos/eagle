<script setup lang="ts">
import { computed } from "vue";
import { useUserStore } from "../stores/useUserStore";

const user = useUserStore().user;
const completeName = computed(() => `${user.first_name} ${user.last_name}`);
</script>

<template>
  <v-list-item
    v-if="user.username"
    :prepend-avatar="user.avatar"
    :title="completeName"
    subtitle="Logged in"
    nav
  >
    <template v-slot:append>
      <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
    </template>
  </v-list-item>
</template>
