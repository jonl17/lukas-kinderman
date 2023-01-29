import { create } from "zustand"

export const useMobileFooterInfo = create(set => ({
  content: "",
  setContent: content => set(() => ({ content })),
}))
