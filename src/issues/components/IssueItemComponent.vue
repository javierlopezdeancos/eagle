<script setup lang="ts">
import { defineProps } from "vue";
import type Issue from "@/issues/types/IssueType";

const props = defineProps<{
  issue: Issue;
}>();
</script>

<template>
  <article class="d-flex flex-column align-start justify-start">
    <v-card flat>
      <v-card-text class="pb-0 pl-0 mb-1">{{
        props.issue.description
      }}</v-card-text>
    </v-card>
    <aside class="d-flex align-end justify-center pl-0">
      <div class="d-flex align-end justify-center">
        <span class="text-caption">250</span>
        <span class="text-caption ml-1 pb-0.5">votos</span>
      </div>
    </aside>
  </article>
</template>
