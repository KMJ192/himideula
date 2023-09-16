type TrieData<T> = {
  key: string | number;
  label: string;
  options?: T;
};

type ITrie<T> = {
  insert: (inputStr: string, word: TrieData<T>) => void;
  initialize: () => void;
  startPrefixList: (prefix: string) => Array<TrieData<T>>;
  containList: (input: string) => Array<TrieData<T>>;
  isDiff: (newData: Array<TrieData<T>>) => boolean;
};

export type { ITrie, TrieData };
