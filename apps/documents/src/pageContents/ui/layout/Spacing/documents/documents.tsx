import type { Documents } from '@src/store/pageContents/uiDocs/state';
import Horizontal from './Direction/Horizontal';
import Vertical from './Direction/Vertical';

const documents: Array<Documents> = [
  {
    title: 'Direction - horizontal',
    description: '수평 방향 간격',
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
    description: '수직 방향 간격',
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
