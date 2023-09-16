import type { Documents } from '@src/store/pageContents/uiDocs/state';
import Type from './Type/Type';

const documents: Array<Documents> = [
  {
    title: 'Type',
    description: 'Type별 Spinner',
    view: <Type />,
    componentString: [`<Spinner type="type-1" />`, `<Spinner type="type-2" />`],
  },
];

export { documents };
