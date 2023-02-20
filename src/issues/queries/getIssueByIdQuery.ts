import type Issue from "@/issues/types/IssueType";

export const getIssueByIdQuery = async (id: number): Promise<Issue | null> => {
  const issuesFetchResponse = await fetch("/data/issues.json");
  const issues = await issuesFetchResponse.json();

  const issue = issues.find((issue: Issue): boolean => issue.id === id);

  if (!issue) {
    return null;
  }

  return issue;
};
