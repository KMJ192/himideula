import { Usage } from '@src/store/pageContents/modulesDocs/state';

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

const usage: Array<Usage> = [
  {
    title: '선언',
    description: '',
    code: [
      `import { useTrie } from '@upcast/react-modules';`,
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
