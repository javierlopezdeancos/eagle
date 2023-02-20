// mouse.js
import { ref, onMounted } from "vue";
import { getIssueByIdQuery } from "@/issues/queries/getIssueByIdQuery";

export const useIssueComposable = (id: number) => {
  const loading = ref(false);
  const error = ref(false);
  const issue = ref();

  onMounted(async () => {
    try {
      loading.value = true;

      issue.value = await getIssueByIdQuery(id);

      if (!issue.value) {
        error.value = true;
      }

      loading.value = false;
    } catch (e) {
      loading.value = false;
      error.value = true;

      return {
        issue,
        loading,
        error,
      };
    }
  });

  return {
    issue,
    loading,
    error,
  };
};
