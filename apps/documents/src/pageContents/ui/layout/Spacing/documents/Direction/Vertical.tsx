import { Spacing, Flex } from '@upcast/react-ui';

import style from './style.module.scss';

function Vertical() {
  return (
    <Flex className={style.vertical}>
      <div>first</div>
      <Spacing direction='vertical' spacing={16} />
      <div>second</div>
    </Flex>
  );
}

export default Vertical;
