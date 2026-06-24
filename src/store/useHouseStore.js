import { create } from "zustand"

export const useHouseStore = create((set) => ({
  width: 10,
  length: 10,
  height: 3,

  setWidth: (v) => set({ width: v }),
  setLength: (v) => set({ length: v }),
  setHeight: (v) => set({ height: v }),
}))
