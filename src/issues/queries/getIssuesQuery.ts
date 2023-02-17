import type Issue from "@/issues/types/IssueType";

export const getIssuesQuery = async (range?: number): Promise<Issue[]> => {
  const issuesFetchResponse = await fetch("/data/issues.json");
  const issues = await issuesFetchResponse.json();

  return new Promise<Issue[]>((resolve, reject) => {
    if (issues) {
      if (range) {
        resolve(issues.slice(0, range));
      }

      resolve(issues);
    }

    reject();
  });
};
