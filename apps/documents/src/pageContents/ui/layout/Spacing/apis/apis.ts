import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Spacing',
    defaultTag: 'div',
    props: [
      {
        name: 'direction',
        type: '"horizontal" | "vertical"',
        defaultValue: 'vertical',
        description: '공간 방향',
        essential: false,
      },
      {
        name: 'spacing',
        type: 'number',
        defaultValue: 'undefined',
        description: '공간 너비',
        essential: false,
      },
    ],
  },
];

export { apis };
