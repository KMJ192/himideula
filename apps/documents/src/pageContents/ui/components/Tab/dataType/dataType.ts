import { DataType } from '@src/store/pageContents/modulesDocs/state';

const dataType: Array<DataType> = [
  {
    name: 'TabOptionKey',
    description: 'Tab 컴포넌트 개별 옵션의 키값(Unique)',
    code: ['type TabOptionKey = number | string;'],
  },
  {
    name: 'TabOption',
    description: 'Tab 컴포넌트의 개별 옵션 정보',
    code: [
      `type TabOption = {`,
      `    key: OptionKey;`,
      `    contents?: React.ReactNode;`,
      `    disabled?: boolean;`,
      `}`,
    ],
  },
  {
    name: 'TabDirection',
    description: 'Tab 컴포넌트의 출력 방향',
    code: [`type TabDirection = 'vertical' | 'horizontal';`],
  },
];

export { dataType };
