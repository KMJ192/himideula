import { Textarea } from '@upcast/react-ui';

import type { Documents } from '@src/store/pageContents/uiDocs/state';

const documents: Array<Documents> = [
  {
    title: 'Textarea',
    description: '',
    view: <Textarea placeholder='textarea' />,
    componentString: [`<Input placeholder='textarea' />`],
  },
];

export { documents };
