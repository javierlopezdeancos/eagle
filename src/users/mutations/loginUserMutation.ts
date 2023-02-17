import { getUserByIdQuery } from "@/users/queries/getUserQuery";
import type User from "@/users/types/UserType";

export const loginUserMutation = async (
  username: string,
  password: string
): Promise<User | void> => {
  const user = await getUserByIdQuery(1);

  if (!user) {
    return;
  }

  return user;
};
