import type { APIs } from '@src/store/components/DocsContents/state';

const apis: Array<APIs> = [
  {
    title: 'Tab',
    defaultTag: 'div',
    props: [
      {
        name: 'options',
        type: `Array<{
        key: number | string;
        contents: React.ReactNode;
        disabled: boolean;
      }>`,
        defaultValue: '[]',
        description: '선택 옵션',
      },
      {
        name: 'direction',
        type: '"vertical" | "horizontal"',
        defaultValue: 'false',
        description: '출력 방향',
      },
      {
        name: 'selected',
        type: 'number',
        defaultValue: '0',
        description: '선택된 값',
      },
    ],
  },
];

export { apis };
