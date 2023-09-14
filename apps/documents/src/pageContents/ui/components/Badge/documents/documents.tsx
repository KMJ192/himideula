import type { Documents } from '@src/store/components/DocsContents/state';
import ColorScheme from './ColorScheme/ColorScheme';

const documents: Array<Documents> = [
  {
    title: 'Color Scheme',
    description: '색상',
    view: <ColorScheme />,
    componentString: [
      `<Badge colorSchema='primary'>primary</Badge>`,
      `<Badge colorSchema='success'>success</Badge>`,
      `<Badge colorSchema='info'>info</Badge>`,
      `<Badge colorSchema='warning'>warning</Badge>`,
      `<Badge colorSchema='danger'>danger</Badge>`,
      `<Badge colorSchema='custom'>custom</Badge>`,
    ],
  },
];

export { documents };
