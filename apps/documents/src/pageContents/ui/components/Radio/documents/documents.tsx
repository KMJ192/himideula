import type { Documents } from '@src/store/components/DocsContents/state';
import RadioView from './RadioView/RadioView';

const documents: Array<Documents> = [
  {
    title: 'Radio',
    description: '선택 유형 별 출력 타입',
    view: <RadioView />,
    componentString: [
      '<Radio>None</Radio>',
      '<Radio checked>Checked</Radio>',
      '<Radio disabled>Checked</Radio>',
      '<Radio checked disabled>Checked + Disabled</Radio>',
    ],
  },
];

export { documents };
