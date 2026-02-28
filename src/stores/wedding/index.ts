import { create } from "zustand";
import { createPersonSlice, PersonSlice } from "./person.slice";

type BoundState = PersonSlice;

export const useWeddingBoundStore = create<BoundState>()((...a) => ({
  ...createPersonSlice(...a),
}));
