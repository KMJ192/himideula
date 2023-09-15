import { create } from 'zustand';

type Usage = {
  title: string;
  description: string;
  code: Array<string>;
};

type APIs = {
  title: string;
  description: string;
  props: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }>;
};

type State = {
  title: string;
  usage: Array<Usage>;
  apis: Array<APIs>;
};

type Action = {
  setInfo: (state: State) => void;
};

const useHooksDocsState = create<State & Action>((set) => ({
  title: '',
  usage: [],
  apis: [],
  setInfo: (newState: State) => set(newState),
}));

export type { Usage, APIs };
export { useHooksDocsState };
