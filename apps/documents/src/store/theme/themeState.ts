import { create } from 'zustand';

type State = {
  theme: string;
};

type Action = {
  switchTheme: (theme: State) => void;
};

const useTheme = create<State & Action>((set) => ({
  theme: 'light',
  switchTheme: (newTheme: State) => set(newTheme),
}));

export { useTheme };
