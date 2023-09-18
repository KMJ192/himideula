import { APIs } from '@src/store/pageContents/modulesDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Props',
    description: 'InfiniteScroll의 Props 입니다.',
    props: [
      {
        name: 'children',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: 'Children 컴포넌트',
        essential: false,
      },
      {
        name: 'isExecute',
        type: 'boolean',
        defaultValue: 'true',
        description: '다음 리스트 실행 여부',
        essential: false,
      },
      {
        name: 'isLoading',
        type: 'boolean',
        defaultValue: '',
        description: '로딩 여부 - 주기에 맞추어 적절한 값을 설정해야 합니다.',
        essential: true,
      },
      {
        name: 'loadingElement',
        type: 'React.ReactNode',
        defaultValue: 'undefined',
        description: '로딩 여부 출력 컴포넌트',
        essential: false,
      },
      {
        name: 'onLoad',
        type: '() => void',
        defaultValue: '',
        description: '다음 주기에 실행되는 함수',
        essential: true,
      },
    ],
  },
];

export { apis };
