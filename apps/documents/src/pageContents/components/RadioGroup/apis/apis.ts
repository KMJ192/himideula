import type { APIs } from '@src/store/components/DocsContents/state';

const apis: Array<APIs> = [
  {
    name: 'options',
    type: `Array<{ 
      key: string | number;
      children: React.ReactNode;
      disabled: boolean;
    }>`,
    defaultValue: '[]',
    description: '라디오 그룹 데이터',
  },
  {
    name: 'direction',
    type: '"horizontal" | "vertical"',
    defaultValue: 'horizontal',
    description: '출력 방향',
  },
  {
    name: 'selected',
    type: 'number',
    defaultValue: '-1',
    description: '선택된 값',
  },
  {
    name: 'onSelect',
    type: '(idx: number) => void',
    defaultValue: '() => {}',
    description: '라디오 버튼 클릭 수신기',
  },
];

export { apis };
