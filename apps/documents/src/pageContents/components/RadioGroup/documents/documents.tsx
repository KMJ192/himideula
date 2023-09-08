import type { Documents } from '@src/store/components/DocsContents/state';
import RadioView from './RadioView/RadioView';

const documents: Array<Documents> = [
  {
    title: 'RadioGroup',
    description: 'RadioGroup 컴포넌트',
    view: <RadioView />,
    componentString: [
      '<RadioGroup selected={0} direction="horizontal" options={[{ key: 0, children: "first", disabled: false }, { key: 1, children: "second", disabled: false }, { key: 2, children: "third", disabled: false } ]} />',
      '<RadioGroup selected={0} direction="vertical" options={[{ key: 0, children: "first", disabled: false }, { key: 1, children: "second", disabled: false }, { key: 2, children: "third", disabled: false } ]} />',
    ],
  },
];

export { documents };
