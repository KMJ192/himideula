import React from 'react';
import { Button, Center } from '@ssamssam/react-ui';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function Shape() {
  return (
    <Center horizontal={false} className={cx('shape')}>
      <Button shape='rect' className={cx('rect')}>
        rect
      </Button>
      <Button shape='square'>square</Button>
      <Button shape='circle'>circle</Button>
    </Center>
  );
}

export default Shape;
