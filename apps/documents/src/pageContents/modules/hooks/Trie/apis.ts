import { APIs } from '@src/store/pageContents/modulesDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Params',
    description: 'useTrie의 Parameter입니다.',
    props: [
      {
        name: 'dictionary',
        type: 'Array<TrieData<T>>',
        defaultValue: '[]',
        description: 'Trie를 생성하는 데이터',
        essential: false,
      },
      {
        name: 'isBuild',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Trie 생성 여부',
        essential: false,
      },
      {
        name: 'caseSensitive',
        type: 'boolean',
        defaultValue: 'false',
        description: '영문 대소문자 구분 여부',
        essential: false,
      },
    ],
  },
];

export { apis };
