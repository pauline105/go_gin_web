import { create } from "zustand";

interface LoadingStore {
  loading: boolean;
  setLoading: (value: boolean) => void;
}

export const useStore = create<LoadingStore>((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),
}));
