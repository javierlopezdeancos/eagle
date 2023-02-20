<script setup lang="ts">
import { defineProps, computed } from "vue";
import { useUsersStore } from "@/users/stores/useUsersStore";
import type Issue from "@/issues/types/IssueType";

const props = defineProps<{
  issue: Issue;
}>();

const usersStore = useUsersStore();

const authorUser = computed(() =>
  usersStore.getUserById(props?.issue?.authorId)
);
</script>

<template>
  <article class="d-flex flex-column align-start justify-start mb-5">
    <v-card class="w-100" flat>
      <v-card-title class="text-truncate pb-0 pl-0 mb-1">{{
        props.issue.title
      }}</v-card-title>
      <v-card-text class="pb-0 pl-0 mb-1">{{
        props.issue.description
      }}</v-card-text>
    </v-card>
    <aside class="d-flex align-end justify-center pl-0">
      <v-chip class="ma-0" size="x-small" variant="text">
        <v-icon start icon="mdi-thumb-up-outline"></v-icon>
        {{ props.issue.votes }}
      </v-chip>
      <v-chip
        v-if="props?.issue?.commentsNumber > 0"
        class="ma-0"
        size="x-small"
        variant="text"
      >
        <v-icon start icon="mdi-comment-outline"></v-icon>
        {{ props.issue.commentsNumber }}
      </v-chip>
      <v-chip
        v-if="authorUser?.username"
        class="ma-0"
        size="x-small"
        variant="text"
      >
        <v-icon start icon="mdi-account-outline"></v-icon>
        {{ authorUser.username }}
      </v-chip>
    </aside>
  </article>
</template>
