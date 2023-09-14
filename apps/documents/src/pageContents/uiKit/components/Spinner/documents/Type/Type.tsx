import { Spinner, Flex } from '@ssamssam/react-ui';

import style from '../style.module.scss';

function Type() {
  return (
    <Flex className={style['spinner-type']}>
      <Spinner type='type-1' />
      <Spinner type='type-2' />
    </Flex>
  );
}

export default Type;
