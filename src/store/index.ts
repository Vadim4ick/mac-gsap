import { create } from "zustand";

type MackbookState = {
  color: string;
  setColor: (color: string) => void;
  scale: number;
  setScale: (scale: number) => void;
  reset: () => void;
};

const useMackbookState = create<MackbookState>((set) => ({
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),

  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  reset: () => set({ color: "#2e2c2e", scale: 0.08 }),
}));

export { useMackbookState };
