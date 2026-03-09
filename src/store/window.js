import { create } from "zustand";
import { immer } from "immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "#constants";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = true;
        win.ZIndex = state.ZIndex;
        win.data = data ?? win.data;
        state.ZIndex++;
      }),
    closeWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.isOpen = false;
        win.ZIndex = INITIAL_Z_INDEX;
        win.data = data ?? win.data;
        state.ZIndex++;
      }),
    focusWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.ZIndex = state.ZIndex++;
      }),
  })),
);
