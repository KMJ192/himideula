import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Stack',
    defaultTag: 'div',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'direction',
        type: '"row" | "column"',
        defaultValue: 'row',
        description: '방향',
        essential: false,
      },
    ],
  },
];

export { apis };
