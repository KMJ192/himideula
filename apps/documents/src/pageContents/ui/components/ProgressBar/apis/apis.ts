import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'ProgressBar',
    defaultTag: 'div',
    props: [
      {
        name: 'percent',
        type: 'number',
        defaultValue: '0',
        description: 'Percent',
        essential: false,
      },
      {
        name: 'pending',
        type: 'boolean',
        defaultValue: 'false',
        description: '진행 여부',
        essential: false,
      },
    ],
  },
];

export { apis };
