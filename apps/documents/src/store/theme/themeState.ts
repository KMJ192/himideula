import { create } from 'zustand';

type Theme = 'light' | 'dark';

type State = {
  theme: Theme;
};

type Action = {
  switchTheme: (theme: State) => void;
};

const useTheme = create<State & Action>((set) => ({
  theme: 'light',
  switchTheme: (newTheme: State) => set(newTheme),
}));

export type { Theme };
export { useTheme };
