import { Row } from '@ssamssam/react-ui';

import type { Documents } from '@src/store/components/DocsContents/state';

const documents: Array<Documents> = [
  {
    title: 'Row',
    description: '',
    view: <Row>This is Row</Row>,
    componentString: [`<Row>This is Row</Row>`],
  },
];

export { documents };
