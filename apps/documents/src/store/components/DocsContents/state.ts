import React from 'react';
import { create } from 'zustand';

type Documents = {
  title: string;
  description: string;
  view: React.ReactNode;
  componentString: string;
};

type APIs = {
  name: string;
  type: string;
  defaultValue: string;
  description: string;
};
type CSSVars = {
  // ...
};
type Playground = {
  // ...
};

type State = {
  title: string;
  documents: Array<Documents>;
  apis: Array<APIs>;
  cssVars: Array<CSSVars>;
  playground: Array<Playground>;
};

type Action = {
  viewComponent: (state: State) => void;
};

const useDocsContentsState = create<State & Action>((set) => ({
  title: '',
  documents: [],
  apis: [],
  cssVars: [],
  playground: [],
  viewComponent: (newState: State) => set(newState),
}));

export type { Documents, APIs, CSSVars, Playground };
export { useDocsContentsState };
