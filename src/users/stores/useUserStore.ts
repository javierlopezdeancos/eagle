import { defineStore } from "pinia";
import type User from "@/users/types/UserType";

export const useUserStore = defineStore("user", {
  state: () => ({ user: {} as User }),
  actions: {
    addUser(user: User) {
      this.user = user;
    },
  },
});
