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

type DataType = {
  name: string;
  description: string;
  code: Array<string>;
};

type State = {
  title: string;
  usage: Array<Usage>;
  apis: Array<APIs>;
  dataType: Array<DataType>;
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

export type { Usage, APIs, DataType };
export { useModulesDocsState };
