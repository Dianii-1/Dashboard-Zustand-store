import { createJSONStorage, StateStorage } from "zustand/middleware";

const apiSessionStorage: StateStorage = {
  getItem: function (name: string): string | null | Promise<string | null> {
    const dataSession = sessionStorage.getItem(name);
    return dataSession;
  },
  setItem: function (name: string, value: string): void {
    sessionStorage.setItem(name, value);
  },
  removeItem: function (name: string): void {
    console.log("removeItem", name);
  },
};

export const customSessionStorage = createJSONStorage(() => apiSessionStorage);
