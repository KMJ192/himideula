import React from 'react';
import { Button, Flex } from '@ssamssam/react-ui';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function Variant() {
  return (
    <Flex className={cx('variant')}>
      <Button variant='primary'>primary</Button>
      <Button variant='outlined'>outlined</Button>
      <Button variant='clear'>clear</Button>
    </Flex>
  );
}

export default Variant;
