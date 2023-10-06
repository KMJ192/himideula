import { DataType } from '@src/store/pageContents/modulesDocs/state';

const dataType: Array<DataType> = [
  {
    name: 'SelectOptionKey',
    description: 'controller 훅을 사용할 경우 리스트 옵션의 키값(Unique)',
    code: ['type SelectOptionKey = number | string;'],
  },
  {
    name: 'SelectOption',
    description:
      'controller 훅을 사용할 경우 리스트 옵션의 요소(useSelectController)',
    code: [
      `type SelectOption = {`,
      `    key: SelectOptionKey;`,
      `    content: React.ReactNode;`,
      `    disabled?: boolean;`,
      `}`,
    ],
  },
  {
    name: 'InputSelectOption',
    description:
      'controller 훅을 사용할 경우 리스트 옵션의 요소(useInputSelectController)',
    code: [
      `type InputSelectOption = {`,
      `    key: SelectOptionKey;`,
      `    index: number;`,
      `    content: React.ReactNode;`,
      `    disabled?: boolean;`,
      `}`,
    ],
  },
];

export { dataType };
