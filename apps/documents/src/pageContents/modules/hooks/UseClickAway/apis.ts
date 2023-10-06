import { APIs } from '@src/store/pageContents/modulesDocs/state';

const apis: Array<APIs> = [
  {
    title: 'Params',
    description: 'useClickAway의 Parameter입니다.',
    props: [
      {
        name: 'onClickAway',
        type: '() => void',
        defaultValue: '() => {}',
        description: '영역의 밖을 클릭하면 실행되는 함수입니다.',
        essential: false,
      },
      {
        name: 'elementRefs',
        type: 'Array<RefObject<HTMLElement>>',
        defaultValue: '[]',
        description: '영역을 설정할 Element 변수를 가집니다. (다수 설정 가능)',
        essential: false,
      },
    ],
  },
];

export { apis };
