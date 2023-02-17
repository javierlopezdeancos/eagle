import { defineStore } from "pinia";
import type Issue from "@/issues/types/IssueType";

const sortByVotes = (a: Issue, b: Issue): number => {
  if (a.votes < b.votes) {
    return -1;
  }
  if (a.votes > b.votes) {
    return 1;
  }

  return 0;
};

export const useIssuesStore = defineStore("issues", {
  state: () => ({ issues: [] as Issue[] }),
  getters: {
    topIssues(state) {
      return (range?: number) => {
        const issues = state.issues.sort(sortByVotes);

        if (range) {
          return issues.slice(0, range);
        }

        return issues;
      };
    },
  },
  actions: {
    setIssues(issues: Issue[]) {
      this.issues = issues;
    },
  },
});
