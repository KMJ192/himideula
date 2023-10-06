import { APIs } from '@src/store/pageContents/modulesDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Params',
    description: 'useComponentDidMount의 Parameter입니다.',
    props: [
      {
        name: 'callback',
        type: '() => void | (() => void)',
        defaultValue: 'undefined',
        description: '컴포넌트 마운트시, 실행되는 callback 함수',
        essential: true,
      },
    ],
  },
];

export { apis };
