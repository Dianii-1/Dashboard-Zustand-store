import { create } from "zustand";
import { createPersonSlice, PersonSlice } from "./person.slice";
import { devtools } from "zustand/middleware";

type BoundState = PersonSlice;

export const useWeddingBoundStore = create<BoundState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
  }))
);
