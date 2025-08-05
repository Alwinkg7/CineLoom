// src/store/useHeaderStore.ts
import { create } from 'zustand';

interface HeaderState {
  language: string;
  setLanguage: (lang: string) => void;
}

export const useHeaderStore = create<HeaderState>((set) => ({
  language: 'English',
  setLanguage: (lang) => set({ language: lang }),
}));
