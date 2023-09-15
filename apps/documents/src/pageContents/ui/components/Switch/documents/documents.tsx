import type { Documents } from '@src/store/pageContents/uiDocs/state';

import SwitchView from './SwitchView/SwitchView';

const documents: Array<Documents> = [
  {
    title: 'Type',
    description: 'Type별 Spinner',
    view: <SwitchView />,
    componentString: [
      `<Switch checked={false}>Unchecked</Switch>`,
      `<Switch checked={false} disabled>Unchecked + Disabled</Switch>`,
      `<Switch checked>Checked</Switch>`,
      `<Switch checked disabled>Checked + Disabled</Switch>`,
    ],
  },
];

export { documents };
