import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Button',
    defaultTag: 'button',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'variant',
        type: `"primary" | "outlined" | "clear"`,
        defaultValue: `primary`,
        description: 'Button 컴포넌트 변환 타입',
        essential: false,
      },
      {
        name: 'shape',
        type: `"rect" | "circle" | "square"`,
        defaultValue: 'rect',
        description: 'Button 컴포넌트 모양',
        essential: false,
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
        description: '비활성화 여부',
        essential: false,
      },
      {
        name: 'loading',
        type: 'boolean',
        defaultValue: 'false',
        description: '로딩 버튼 여부',
        essential: false,
      },
      {
        name: 'loadingElement',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: '로딩 컴포넌트 주입',
        essential: false,
      },
      {
        name: 'leftIcon',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: '좌측 아이콘',
        essential: false,
      },
      {
        name: 'rightIcon',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: '우측 아이콘',
        essential: false,
      },
    ],
  },
];

export { apis };
