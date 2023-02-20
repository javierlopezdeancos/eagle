<script setup lang="ts">
import { ref } from "vue";
import UserActionsListComponent from "@/users/components/UserActionsListComponent.vue";
import IssuesActionsListComponent from "@/issues/components/IssuesActionsListComponent.vue";

const drawer = ref(true);
const rail = ref(true);
</script>

<template>
  <v-navigation-drawer
    class="bg-primary"
    tag="aside"
    v-model="drawer"
    :rail="rail"
    permanent
    @click="rail = false"
  >
    <section class="d-flex flex-column align-start justify-start h-100">
      <header>
        <v-btn
          v-if="rail"
          variant="text"
          icon="mdi-chevron-left"
          @click.stop="rail = !rail"
        ></v-btn>
        <v-btn
          v-else
          variant="text"
          icon="mdi-chevron-right"
          @click.stop="rail = !rail"
        ></v-btn>
      </header>
      <v-divider />
      <section
        class="d-flex flex-column align-start justify-space-between w-100 h-100"
      >
        <IssuesActionsListComponent />
        <UserActionsListComponent />
      </section>
    </section>
  </v-navigation-drawer>
</template>
