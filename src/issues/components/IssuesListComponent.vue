<script setup lang="ts">
import IssueItemComponent from "@/issues/components/IssueItemComponent.vue";
import type Issue from "@/issues/types/IssueType";

const props = defineProps<{
  issues?: Issue[];
  title?: string;
}>();
</script>

<template>
  <h1 v-if="props?.title" class="text-h5 text-color-primary mb-4">
    {{ props.title }}
  </h1>
  <IssueItemComponent v-for="issue in issues" :key="issue.id" :issue="issue" />
</template>
