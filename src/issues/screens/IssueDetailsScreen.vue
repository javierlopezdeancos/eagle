<script setup lang="ts">
import { useRoute } from "vue-router";
import LayoutComponent from "@/components/LayoutComponent.vue";
import { useIssueComposable } from "@/issues/composables/useIssueComposable";

const route = useRoute();
const { issue, loading, error } = useIssueComposable(Number(route.params.id));
</script>

<template>
  <LayoutComponent>
    <p v-if="issue && !loading && !error">My issue {{ issue?.id }}</p>
  </LayoutComponent>
</template>
