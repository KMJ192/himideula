import Pending from './Pending/Pending';

import type { Documents } from '@src/store/components/DocsContents/state';

const documents: Array<Documents> = [
  {
    title: 'ProgressBar',
    description: 'ProgressBar 컴포넌트',
    view: <Pending />,
    componentString: [
      `<ProgressBar percent={70} pending />`,
      `<ProgressBar percent={70} />`,
    ],
  },
];

export { documents };
