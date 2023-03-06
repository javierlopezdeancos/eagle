<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import LayoutComponent from "@/components/LayoutComponent.vue";
import { useIssuesStore } from "@/issues/stores/issuesStore";
import { getIssuesQuery } from "@/issues/queries/getIssuesQuery";
import getCreationDateFormattedHelper from "@/issues/helpers/getCreationDateFormattedHelper";

const route = useRoute();
const issuesStore = useIssuesStore();
const issue = ref();
const creationDate = computed(() => {
  if (!issue?.value?.creation_date) {
    return undefined;
  }

  return getCreationDateFormattedHelper(issue?.value?.creation_date);
});

onMounted(async () => {
  if (issuesStore.issues && issuesStore.issues.length > 0) {
    return;
  }

  const issues = await getIssuesQuery();

  issuesStore.setIssues(issues);
  issue.value = issuesStore.getIssueById(Number(route.params.id));
});
</script>

<template>
  <LayoutComponent>
    <section>
      <header class="mb-6">
        <h1 v-if="issue?.title" class="text-h5 text-color-primary mb-4">
          Incidencia {{ issue.id }}
        </h1>
        <p class="text-caption font-weight-light">
          Creada el <span class="font-weight-medium">{{ creationDate }}</span>
        </p>
        <h2 v-if="issue?.title" class="text-h6 mt-3">
          {{ issue.title }}
        </h2>
      </header>
      <section>
        <figure v-if="issue?.image">
          <img :src="issue.image" alt="HTML Reference logo" />
        </figure>
        <p v-if="issue?.description" class="text-body mt-6">
          {{ issue.description }}
        </p>
        <div class="d-flex align-center justify-start mt-5">
          <v-btn
            class="mr-4"
            variant="outlined"
            color="secondary"
            rounded="0"
            size="small"
            icon
          >
            <v-icon icon="mdi-thumb-up-outline"></v-icon>
          </v-btn>
          <v-btn
            class="mr-4"
            variant="outlined"
            color="secondary"
            rounded="0"
            size="small"
            icon
          >
            <v-icon icon="mdi-bell-outline"></v-icon>
          </v-btn>

          <v-btn
            class="mr-4"
            variant="outlined"
            color="secondary"
            rounded="0"
            size="small"
            icon
          >
            <v-badge content="2" color="primary">
              <v-icon icon="mdi-comment-outline"></v-icon>
            </v-badge>
          </v-btn>
        </div>
      </section>
    </section>
  </LayoutComponent>
</template>
