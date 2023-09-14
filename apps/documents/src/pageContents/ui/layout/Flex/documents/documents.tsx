import { Flex } from '@ssamssam/react-ui';

import type { Documents } from '@src/store/components/DocsContents/state';

const documents: Array<Documents> = [
  {
    title: 'Flex',
    description: '',
    view: <Flex>This is Flex</Flex>,
    componentString: [`<Flex>This is Flex</Flex>`],
  },
];

export { documents };
