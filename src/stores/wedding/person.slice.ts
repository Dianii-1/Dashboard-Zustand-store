import { StateCreator } from "zustand";

export interface PersonSlice {
  firstName: string;
  lastName: string;

  setFirstname: (firstName: string) => void;
  setLastname: (lastName: string) => void;
}

export const createPersonSlice: StateCreator<PersonSlice> = (set) => ({
  firstName: "",
  lastName: "",

  setFirstname: (firstName: string) => set({ firstName }),
  setLastname: (lastName: string) => set({ lastName }),
});
