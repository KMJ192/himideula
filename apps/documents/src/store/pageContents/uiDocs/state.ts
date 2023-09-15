import type { ReactNode } from 'react';
import { create } from 'zustand';

type Documents = {
  title: string;
  description: string;
  view: ReactNode;
  componentString: Array<string>;
};

type APIs = {
  title: string;
  defaultTag: string;
  props: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
  }>;
};
type CSSVar = {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
};
type Playground = {
  component: ReactNode;
};

type State = {
  title: string;
  documents: Array<Documents>;
  apis: Array<APIs>;
  cssVar: Array<CSSVar>;
  playground?: Playground;
};

type Action = {
  setInfo: (state: State) => void;
};

const useUIDocsState = create<State & Action>((set) => ({
  title: '',
  defaultTag: '',
  documents: [],
  apis: [],
  cssVar: [],
  setInfo: (newState: State) => set(newState),
}));

export type { Documents, APIs, CSSVar, Playground };
export { useUIDocsState };
