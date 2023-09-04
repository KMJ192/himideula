'use client';

import React, { useState } from 'react';
import { useTheme } from '@src/store/theme/themeState';

import {
  Flex,
  Header,
  HamburgerMenu,
  Spacing,
  Float,
  Button,
} from '@ssamssam/react-ui';

import GNB from './GNB/GNB';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

function PageTemplate({ children }: Props) {
  const { theme, switchTheme } = useTheme();
  const [active, setActive] = useState(false);

  const onClickActive = () => {
    setActive(!active);
  };

  const onClickTheme = () => {
    switchTheme({
      theme: theme === 'light' ? 'dark' : 'light',
    });
  };

  return (
    <Flex as='main' className={cx('page-template', active && 'hide', theme)}>
      <Float className={cx('theme')} startDirection='rb'>
        <Button
          shape='circle'
          className={cx('theme-btn')}
          onClick={onClickTheme}
        >
          {theme}
        </Button>
      </Float>
      <GNB />
      <div className={cx('contents')}>
        <Header className={cx('header')}>
          <HamburgerMenu onClick={onClickActive} />
        </Header>
        <Spacing direction='vertical' spacing={72} />
        <section className={cx('page', theme)}>{children}</section>
      </div>
    </Flex>
  );
}

export default PageTemplate;
