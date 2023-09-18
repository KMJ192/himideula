import type { APIs } from '@src/store/pageContents/uiDocs/state';

const apis: Array<APIs> = [
  {
    title: 'RadioGroup',
    defaultTag: 'div',
    props: [
      {
        name: 'options',
        type: `Array<RadioGroupOption>`,
        defaultValue: '[]',
        description: '라디오 그룹 데이터',
        essential: false,
      },
      {
        name: 'direction',
        type: '"horizontal" | "vertical"',
        defaultValue: 'horizontal',
        description: '출력 방향',
        essential: false,
      },
      {
        name: 'selected',
        type: 'number',
        defaultValue: '-1',
        description: '선택된 값',
        essential: false,
      },
      {
        name: 'onSelect',
        type: '(idx: number) => void',
        defaultValue: '() => {}',
        description: '라디오 버튼 클릭 수신기',
        essential: false,
      },
    ],
  },
];

export { apis };
