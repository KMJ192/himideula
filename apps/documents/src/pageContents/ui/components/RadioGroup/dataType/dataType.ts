import { DataType } from '@src/store/pageContents/modulesDocs/state';

const dataType: Array<DataType> = [
  {
    name: 'RadioGroupOptionKey',
    description: 'Radio 컴포넌트의 개별 옵션의 키값(Unique)',
    code: ['type RadioGroupOptionKey = string | number;'],
  },
  {
    name: 'RadioGroupOption',
    description: 'Radio 컴포넌트의 개별 옵션 정보',
    code: [
      'type RadioGroupOption = {',
      '    key: RadioGroupOptionKey;',
      '    children: React.ReactNode;',
      '    disabled: boolean;',
      '}',
    ],
  },
];

export { dataType };
