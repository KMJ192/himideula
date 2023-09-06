import type { Documents } from '@src/store/components/DocsContents/state';
import ColorScheme from './ColorScheme/ColorScheme';

const documents: Array<Documents> = [
  {
    title: 'Color Scheme',
    description: '색상',
    view: <ColorScheme />,
    componentString: ``,
  },
];

export { documents };
