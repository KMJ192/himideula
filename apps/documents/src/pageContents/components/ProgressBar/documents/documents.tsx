import Pending from './Pending/Pending';

import type { Documents } from '@src/store/components/DocsContents/state';

const documents: Array<Documents> = [
  {
    title: 'ProgressBar',
    description: '진행 중, 진행 종료 (70%)',
    view: <Pending />,
    componentString: [
      `<ProgressBar percent={70} pending />`,
      `<ProgressBar percent={70} />`,
    ],
  },
];

export { documents };
