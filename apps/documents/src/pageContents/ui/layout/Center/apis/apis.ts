import type { APIs } from '@src/store/components/DocsContents/state';

const apis: Array<APIs> = [
  {
    title: 'Center',
    defaultTag: 'div',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
      },
      {
        name: 'vertical',
        type: 'boolean',
        defaultValue: 'true',
        description: '중앙 정렬 여부 - 수직',
      },
      {
        name: 'horizontal',
        type: 'boolean',
        defaultValue: 'true',
        description: '중앙 정렬 여부 - 수평',
      },
    ],
  },
];

export { apis };
