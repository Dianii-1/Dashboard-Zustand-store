import { StateCreator } from "zustand";

export interface DateSlice {
  eventDate: Date;
  eventYYYYMMDD: () => string;
  eventHHMM: () => string;

  setEvenDate: (partialDate: string) => void;
}

export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
  eventDate: new Date(),
  eventYYYYMMDD: () => {
    return get().eventDate.toISOString().split("T")[0];
  },
  eventHHMM: () => {
    // el padStart lo que garantiza es que siempre tenga 2 letras al inicio y si no hay se agregue un 0
    const hours = get().eventDate.getHours().toString().padStart(2, "0");
    const minuts = get().eventDate.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minuts}`;
  },

  setEvenDate: (partialDate: string) =>
    set((state) => {
      const date = new Date(partialDate);

      const year = date.getFullYear();
      const month = date.getMonth();
      const day = date.getDate() + 1;

      const newDate = new Date(state.eventDate);

      newDate.setFullYear(year, month, day);

      return { eventDate: newDate };
    }),
});
