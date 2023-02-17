import type User from "@/users/types/UserType";

export const getUserByIdQuery = async (id: number): Promise<User> => {
  const usersFetchResponse = await fetch("/data/users.json");
  const users = await usersFetchResponse.json();

  return new Promise<User>((resolve, reject) => {
    const user = users.find((user: User): boolean => user.id === id);

    if (user) {
      resolve(user);
    }

    reject();
  });
};
