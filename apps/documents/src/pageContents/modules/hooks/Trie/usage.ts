import { Usage } from '@src/store/pageContents/modulesDocs/state';
import { TrieData } from '@upcast/react-modules';

const dictionary: Array<TrieData> = [
  {
    key: 0,
    content: 'a',
    index: 0,
  },
  {
    key: 1,
    content: 'apple',
    index: 0,
  },
  {
    key: 2,
    content: 'append',
    index: 0,
  },
  {
    key: 3,
    content: 'app',
    index: 0,
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
      `    const [value, setValue] = useState<string>("");`,
      `    const { trie } = useTrie({`,
      `        dictionary: ${JSON.stringify(dictionary)},`,
      `        isBuild: true,`,
      `        caseSensitive: false,`,
      `    });`,
      ``,
      `    return trie.containList(value).map(({ key, content }) => {`,
      `        return <div key={key}>{content}</div>`,
      `    })`,
      `}`,
    ],
  },
];

export { usage };
