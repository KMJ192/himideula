import React from 'react';
import Image from 'next/image';

import { Button, Center } from '@upcast/react-ui';

import icon from '@static/icons/download_icon.svg';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function Icon() {
  return (
    <Center horizontal={false} className={cx('icon')}>
      <Button
        leftIcon={
          <Image className={cx('left-icon')} src={icon} alt='left-icon' />
        }
      >
        LeftIcon
      </Button>
      <Button
        rightIcon={
          <Image className={cx('left-icon')} src={icon} alt='right-icon' />
        }
      >
        RightIcon
      </Button>
    </Center>
  );
}

export default Icon;
