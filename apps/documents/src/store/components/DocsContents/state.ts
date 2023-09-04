import type { ReactNode } from 'react';
import { create } from 'zustand';

type Documents = {
  title: string;
  description: string;
  view: ReactNode;
  componentString: string;
};

type APIs = {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
};
type CSSVar = {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
};
type Playground = {
  // ...
};

type State = {
  title: string;
  documents: Array<Documents>;
  apis: Array<APIs>;
  cssVar: Array<CSSVar>;
  playground: Array<Playground>;
};

type Action = {
  viewComponent: (state: State) => void;
};

const useDocsContentsState = create<State & Action>((set) => ({
  title: '',
  documents: [],
  apis: [],
  cssVar: [],
  playground: [],
  viewComponent: (newState: State) => set(newState),
}));

export type { Documents, APIs, CSSVar, Playground };
export { useDocsContentsState };
