import type User from "@/users/types/UserType";

export const getUsersQuery = async (): Promise<User[]> => {
  const usersFetchResponse = await fetch("/data/users.json");
  const users = await usersFetchResponse.json();

  return new Promise<User[]>((resolve, reject) => {
    if (users) {
      resolve(users);
    }

    reject();
  });
};
