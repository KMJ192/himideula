import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Tab',
    defaultTag: 'div',
    props: [
      {
        name: 'options',
        type: `Array<TabOption>`,
        defaultValue: '[]',
        description: '선택 옵션',
        essential: false,
      },
      {
        name: 'direction',
        type: '"vertical" | "horizontal"',
        defaultValue: 'false',
        description: '출력 방향',
        essential: false,
      },
      {
        name: 'selected',
        type: 'number',
        defaultValue: '0',
        description: '선택된 값',
        essential: false,
      },
    ],
  },
];

export { apis };
