import { Spacing, Flex } from '@ssamssam/react-ui';

import style from './style.module.scss';

function Horizontal() {
  return (
    <Flex className={style.horizontal}>
      <div>first</div>
      <Spacing direction='horizontal' spacing={16} />
      <div>second</div>
    </Flex>
  );
}

export default Horizontal;
