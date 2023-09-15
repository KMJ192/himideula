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
      },
      {
        name: 'variant',
        type: `"primary" | "outlined" | "clear"`,
        defaultValue: `primary`,
        description: 'Button 컴포넌트 변환 타입',
      },
      {
        name: 'shape',
        type: `"rect" | "circle" | "square"`,
        defaultValue: 'rect',
        description: 'Button 컴포넌트 모양',
      },
      {
        name: 'disabled',
        type: 'boolean',
        defaultValue: 'false',
        description: '비활성화 여부',
      },
      {
        name: 'loading',
        type: 'boolean',
        defaultValue: 'false',
        description: '로딩 버튼 여부',
      },
      {
        name: 'loadingElement',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: '로딩 컴포넌트 주입',
      },
      {
        name: 'leftIcon',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: '좌측 아이콘',
      },
      {
        name: 'rightIcon',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: '우측 아이콘',
      },
    ],
  },
];

export { apis };
