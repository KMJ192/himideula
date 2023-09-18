import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Radio',
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
        name: 'checked',
        type: 'boolean',
        defaultValue: 'false',
        description: '선택 여부',
        essential: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
        description: '비활성화 여부',
        essential: false,
      },
    ],
  },
];

export { apis };
