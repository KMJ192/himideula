import type { APIs } from '@src/store/components/DocsContents/state';

const apis: Array<APIs> = [
  {
    title: 'TableContainer',
    defaultTag: 'div',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
      },
    ],
  },
  {
    title: 'Table',
    defaultTag: 'table',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
      },
    ],
  },
  {
    title: 'Table.Cation',
    defaultTag: 'caption',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
      },
    ],
  },
];

export { apis };
