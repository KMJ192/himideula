import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Input',
    defaultTag: 'input',
    props: [
      {
        name: 'error',
        type: 'boolean',
        defaultValue: 'false',
        description: 'error 여부',
        essential: false,
      },
    ],
  },
];

export { apis };
