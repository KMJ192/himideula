import type { Documents } from '@src/store/components/DocsContents/state';

import Variant from './Variant/Variant';
import Shape from './Shape/Shape';
import Icon from './Icon/Icon';

const documents: Array<Documents> = [
  {
    title: 'Variant',
    description: '버튼 변형',
    view: <Variant />,
    componentString: `
      <Button variant='primary'>default</Button>

      <Button variant='outlined'>outlined</Button>
      
      <Button variant='clear'>clear</Button>
    `,
  },
  {
    title: 'Shape',
    description: '버튼 모양',
    view: <Shape />,
    componentString: `
      <Button shape='rect'>rect</Button>

      <Button shape='square'>square</Button>
      
      <Button shape='circle'>circle</Button>
    `,
  },
  {
    title: 'Icon',
    description: '아이콘 주입',
    view: <Icon />,
    componentString: `
      <Button leftIcon={<LeftIcon />}>LeftIcon</Button>

      <Button rightIcon={<RightIcon />}>RightIcon</Button>
    `,
  },
];

export { documents };
