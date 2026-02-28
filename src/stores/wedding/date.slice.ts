import { StateCreator } from "zustand";

export interface DateSlice {
  eventDate: Date;
  eventYYYYMMDD: () => string;
  eventHHMM: () => string;
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
});
