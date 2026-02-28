import { create } from "zustand";
import { createPersonSlice, PersonSlice } from "./person.slice";
import { devtools } from "zustand/middleware";
import { createGuestSlice, GuestSlice } from "./guest.slice";

type BoundState = PersonSlice & GuestSlice;

export const useWeddingBoundStore = create<BoundState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
  }))
);
