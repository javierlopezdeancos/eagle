<script setup lang="ts">
import { computed, onMounted } from "vue";
import LayoutComponent from "@/components/LayoutComponent.vue";
import { useIssuesStore } from "@/issues/stores/useIssuesStore";
import { getIssuesQuery } from "@/issues/queries/getIssuesQuery";
import TopIssuesListComponent from "@/issues/components/IssuesListComponent.vue";

const issuesStore = useIssuesStore();
const topIssues = computed(() => issuesStore.topIssues(10));

onMounted(async () => {
  const issues = await getIssuesQuery();
  issuesStore.setIssues(issues);
});
</script>

<template>
  <LayoutComponent>
    <TopIssuesListComponent title="Mas votadas" :issues="topIssues" />
  </LayoutComponent>
</template>
