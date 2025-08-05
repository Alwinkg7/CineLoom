// src/store/authStore.js
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isPremium: false,

  login: (userData) =>
    set({
      user: userData,
      isAuthenticated: true,
      isPremium: userData?.isPremium || false,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
      isPremium: false,
    }),
}));

export default useAuthStore;
