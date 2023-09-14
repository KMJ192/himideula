import type { Documents } from '@src/store/components/DocsContents/state';
import RadioView from './RadioView/RadioView';

const documents: Array<Documents> = [
  {
    title: 'RadioGroup',
    description: 'RadioGroup 컴포넌트',
    view: <RadioView />,
    componentString: [
      '<RadioGroup selected={0} direction="horizontal" options={options} />',
      '<RadioGroup selected={0} direction="vertical" options={options} />',
    ],
  },
];

export { documents };
