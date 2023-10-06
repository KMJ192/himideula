import type { ReactNode, CSSProperties } from 'react';
import { create } from 'zustand';

type Documents = {
  title: string;
  description: string;
  view: ReactNode;
  componentString: Array<string>;
  viewStyle?: CSSProperties;
};

type APIs = {
  title: string;
  defaultTag: string;
  props: Array<{
    name: string;
    type: string;
    defaultValue: string;
    description: string;
    essential: boolean;
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

type DataType = {
  name: string;
  description: string;
  code: Array<string>;
};

type State = {
  title: string;
  documents: Array<Documents>;
  apis: Array<APIs>;
  cssVar: Array<CSSVar>;
  dataType: Array<DataType>;
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
  dataType: [],
  setInfo: (newState: State) => set(newState),
}));

export type { Documents, APIs, CSSVar, Playground, DataType };
export { useUIDocsState };
