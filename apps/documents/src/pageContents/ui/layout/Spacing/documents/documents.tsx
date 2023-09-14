import type { Documents } from '@src/store/components/DocsContents/state';
import Horizontal from './Direction/Horizontal';
import Vertical from './Direction/Vertical';

const documents: Array<Documents> = [
  {
    title: 'Direction - horizontal',
    description: '',
    view: <Horizontal />,
    componentString: [
      `<Flex>`,
      `    <div>first</div>`,
      `    <Spacing direction='horizontal' spacing={16} />`,
      `    <div>second</div>`,
      `</Flex>`,
    ],
  },
  {
    title: 'Direction - vertical',
    description: '',
    view: <Vertical />,
    componentString: [
      `<Flex>`,
      `    <div>first</div>`,
      `    <Spacing direction='vertical' spacing={16} />`,
      `    <div>second</div>`,
      `</Flex>`,
    ],
  },
];

export { documents };
