import type { APIs } from '@src/store/pageContents/uiDocs/state';

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
        essential: false,
      },
      {
        name: 'vertical',
        type: 'boolean',
        defaultValue: 'true',
        description: '중앙 정렬 여부 - 수직',
        essential: false,
      },
      {
        name: 'horizontal',
        type: 'boolean',
        defaultValue: 'true',
        description: '중앙 정렬 여부 - 수평',
        essential: false,
      },
    ],
  },
];

export { apis };
