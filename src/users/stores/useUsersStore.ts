import { defineStore } from "pinia";
import type User from "@/users/types/UserType";

export const useUsersStore = defineStore("users", {
  state: () => ({ users: [] as User[] }),
  getters: {
    getUserById: (state) => {
      return (id?: number) => {
        if (!id) {
          return undefined;
        }

        return state.users.find((u) => u.id === id);
      };
    },
  },
  actions: {
    setUsers(users: User[]) {
      this.users = users;
    },
  },
});
