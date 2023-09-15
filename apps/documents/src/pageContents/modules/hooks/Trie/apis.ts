const apis = [
  {
    title: 'Props',
    description: 'useTrie의 Parameter입니다.',
    props: [
      {
        name: 'dictionary',
        type: 'Array<TrieData<T>>',
        defaultValue: '[]',
        description: 'Trie를 생성하는 데이터',
      },
      {
        name: 'isBuild',
        type: 'boolean',
        defaultValue: 'true',
        description: 'Trie 생성 여부',
      },
    ],
  },
];

export { apis };
