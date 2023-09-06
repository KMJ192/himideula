import { Badge, Flex } from '@ssamssam/react-ui';

import style from '../style.module.scss';

function ColorScheme() {
  return (
    <Flex className={style.container}>
      <Badge colorSchema='primary'>primary</Badge>
      <Badge colorSchema='success'>success</Badge>
      <Badge colorSchema='info'>info</Badge>
      <Badge colorSchema='warning'>warning</Badge>
      <Badge colorSchema='danger'>danger</Badge>
      <Badge colorSchema='custom'>custom</Badge>
    </Flex>
  );
}

export default ColorScheme;
