import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Popup',
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
        name: 'visible',
        type: 'boolean',
        defaultValue: 'false',
        description: '출력 여부',
        essential: false,
      },
      {
        name: 'animation',
        type: `"fade" | "none"`,
        defaultValue: 'fade',
        description: '출력 애니메이션',
        essential: false,
      },
    ],
  },
];

export { apis };
