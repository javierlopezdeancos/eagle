<script setup lang="ts">
import { computed, onMounted } from "vue";
import LayoutComponent from "@/components/LayoutComponent.vue";
import { useIssuesStore } from "@/issues/stores/issuesStore";
import { useUsersStore } from "@/users/stores/useUsersStore";
import { getIssuesQuery } from "@/issues/queries/getIssuesQuery";
import { getUsersQuery } from "@/users/queries/getUsersQuery";
import TopIssuesListComponent from "@/issues/components/IssuesListComponent.vue";

const issuesStore = useIssuesStore();
const usersStore = useUsersStore();
const topIssues = computed(() => issuesStore.topIssues(10));

onMounted(async () => {
  const issues = await getIssuesQuery();
  const users = await getUsersQuery();

  issuesStore.setIssues(issues);
  usersStore.setUsers(users);
});
</script>

<template>
  <LayoutComponent>
    <TopIssuesListComponent
      title="Incidencias mas votadas"
      :issues="topIssues"
    />
  </LayoutComponent>
</template>
