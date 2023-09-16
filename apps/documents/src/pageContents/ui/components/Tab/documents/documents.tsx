import type { Documents } from '@src/store/pageContents/uiDocs/state';

import TabView from './TabView/TabView';

const documents: Array<Documents> = [
  {
    title: 'Type',
    description: 'Type별 Spinner',
    view: <TabView />,
    componentString: [
      `<Tab selected={0} options={options} direction='horizontal' />`,
      `<Tab selected={0} options={options} direction='vertical' />`,
    ],
  },
];

export { documents };
