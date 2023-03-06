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
      return (range?: number): Issue[] => {
        const sortIssues = [...state.issues].sort(sortByVotes);

        if (range) {
          return sortIssues.slice(0, range);
        }

        return [...state.issues];
      };
    },
    getIssueById(state) {
      return (id: number): Issue | undefined =>
        [...state.issues].find((i) => i.id === id);
    },
  },
  actions: {
    setIssues(issues: Issue[]) {
      this.issues = issues;
    },
  },
});
