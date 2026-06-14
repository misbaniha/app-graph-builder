import { create } from "zustand";

type InspectorTab =
  | "config"
  | "runtime";

interface UIState {
  selectedAppId: string;

  selectedNodeId: string | null;

  isMobilePanelOpen: boolean;

  activeInspectorTab: InspectorTab;

  fitViewTrigger: number;

  triggerFitView: () => void;

  setSelectedApp: (
    id: string
  ) => void;

  setSelectedNode: (
    id: string | null
  ) => void;

  setMobilePanelOpen: (
    open: boolean
  ) => void;

  setActiveInspectorTab: (
    tab: InspectorTab
  ) => void;
}

export const useUIStore =
  create<UIState>((set) => ({
    selectedAppId: "app-1",

    selectedNodeId: null,

    isMobilePanelOpen: false,

    activeInspectorTab: "config",

    fitViewTrigger: 0,

    triggerFitView: () =>
      set((state) => ({
        fitViewTrigger:
          state.fitViewTrigger + 1,
      })),

    setSelectedApp: (id) =>
      set({
        selectedAppId: id,
      }),

    setSelectedNode: (id) =>
      set({
        selectedNodeId: id,
      }),

    setMobilePanelOpen: (open) =>
      set({
        isMobilePanelOpen: open,
      }),

    setActiveInspectorTab: (
      tab
    ) =>
      set({
        activeInspectorTab: tab,
      }),
  }));