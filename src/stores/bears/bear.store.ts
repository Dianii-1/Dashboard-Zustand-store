import { create } from "zustand";

interface Bear {
  id: number;
  name: string;
}
interface BearStore {
  blackBears: number;
  polarBears: number;
  pandaBears: number;

  bears: Bear[];

  increaseBlackBears: (by: number) => void;
  increasePolarBears: (by: number) => void;
  increasePandaBears: (by: number) => void;
}
export const useBearStore = create<BearStore>()((set) => ({
  blackBears: 10,
  pandaBears: 10,
  polarBears: 10,

  bears: [{ id: 1, name: "Oso #1" }],

  increaseBlackBears: (by: number) =>
    set((state) => ({ blackBears: state.blackBears + by })),
  increasePolarBears: (by: number) =>
    set((state) => ({ polarBears: state.polarBears + by })),
  increasePandaBears: (by: number) =>
    set((state) => ({ pandaBears: state.pandaBears + by })),
}));
