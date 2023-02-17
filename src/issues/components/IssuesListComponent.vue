<script setup lang="ts">
import { defineProps } from "vue";
import type Issue from "@/issues/types/IssueType";
import IssueItemComponent from "@/issues/components/IssueItemComponent.vue";

const props = defineProps<{
  issues?: Issue[];
  title?: string;
}>();
</script>

<template>
  <h1 v-if="props?.title" class="text-h4 text-primary">{{ props.title }}</h1>
  <IssueItemComponent
    v-for="issue in props?.issues"
    :key="issue.id"
    :issue="issue"
  />
</template>
