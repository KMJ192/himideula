import type { Documents } from '@src/store/components/DocsContents/state';
import RadioView from './RadioView/RadioView';

const documents: Array<Documents> = [
  {
    title: 'ProgressBar',
    description: 'ProgressBar 컴포넌트',
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
