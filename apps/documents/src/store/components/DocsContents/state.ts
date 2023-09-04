import type { ReactNode } from 'react';
import { create } from 'zustand';

import type { RadioProps } from '@ssamssam/react-ui';

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
  subject: string;
  options: Array<
    Pick<RadioProps, 'children' | 'disabled' | 'size' | 'pupilSize'>
  >;
  componentString: ReactNode;
  description: string;
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

type PlaygroundState = {
  // ...
};

const usePlaygroundState = create((set) => ({}));

export type { Documents, APIs, CSSVar, Playground };
export { useDocsContentsState };
