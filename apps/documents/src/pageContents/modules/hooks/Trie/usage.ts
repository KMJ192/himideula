const dictionary = [
  {
    key: 0,
    label: 'a',
  },
  {
    key: 1,
    label: 'apple',
  },
  {
    key: 2,
    label: 'append',
  },
  {
    key: 3,
    label: 'app',
  },
];

const usage = [
  {
    title: '선언',
    description: '',
    code: [
      `import { useTrie } from '@ssamssam/react-modules';`,
      ``,
      `function Component() {`,
      `    const trie = useTrie({`,
      `        dictionary: ${JSON.stringify(dictionary)},`,
      `        isBuild: true`,
      `    });`,
      ``,
      `    return <div></div>;`,
      `}`,
    ],
  },
];

export { usage };
