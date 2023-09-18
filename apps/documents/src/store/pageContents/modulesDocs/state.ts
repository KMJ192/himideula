import type { ReactNode } from 'react';
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
    essential: boolean;
  }>;
};

type DataType = {
  name: string;
  description: string;
  code: Array<string>;
};

type Playground = {
  component: ReactNode;
};

type State = {
  title: string;
  usage: Array<Usage>;
  apis: Array<APIs>;
  dataType: Array<DataType>;
  Playground?: Playground;
};

type Action = {
  setInfo: (state: State) => void;
};

const useModulesDocsState = create<State & Action>((set) => ({
  title: '',
  usage: [],
  apis: [],
  dataType: [],
  setInfo: (newState: State) => set(newState),
}));

export type { Usage, APIs, DataType, Playground };
export { useModulesDocsState };
