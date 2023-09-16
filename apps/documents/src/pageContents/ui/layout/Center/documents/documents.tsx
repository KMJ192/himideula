import type { Documents } from '@src/store/pageContents/uiDocs/state';
import { Center } from '@upcast/react-ui';

const documents: Array<Documents> = [
  {
    title: 'Center',
    description: '',
    view: <Center>This is Center</Center>,
    componentString: [`<Center>This is Center</Center>`],
  },
];

export { documents };
