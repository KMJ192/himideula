import { DataType } from '@src/store/pageContents/modulesDocs/state';

const dataType: Array<DataType> = [
  {
    name: 'TrieData',
    description: 'Trie의 요소 (노드)',
    code: [
      `type TrieData<T> = {`,
      `    key: string | number;`,
      `    content: string;`,
      `    index: number;`,
      `} & T`,
    ],
  },
];

export { dataType };
