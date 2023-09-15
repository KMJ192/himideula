import DocsContents from '@src/components/HooksDocsContents/DocsContents';

const test = [
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
    label: 'application',
  },
  {
    key: 3,
    label: 'app',
  },
];

function TrieHook() {
  return (
    <DocsContents
      title='useTrie'
      description='trie DS를 사용할 수 있는 hooks 입니다.'
      usage={[
        {
          title: '선언',
          description: '',
          code: [
            `import { useTrie } from '@ssamssam/react-modules'`,
            ``,
            `function Component() {`,
            `    const trie = useTrie({`,
            `        dictionary: ${JSON.stringify(test)},`,
            `        isBuild: true`,
            `    });`,
            ``,
            `    return <div></div>`,
            `}`,
          ],
        },
      ]}
      apis={[
        {
          title: 'title',
          description: 'description',
          props: [
            {
              name: 'name',
              type: 'type',
              defaultValue: 'defaultValue',
              description: 'description',
            },
          ],
        },
      ]}
    />
  );
}

export default TrieHook;
