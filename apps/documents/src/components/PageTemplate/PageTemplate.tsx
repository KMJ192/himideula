'use client';

import React, { useEffect } from 'react';
import { useTheme } from '@src/store/theme/themeState';

import { Flex, Header, Spacing, Float, Button } from '@ssamssam/react-ui';

import GNB from './GNB/GNB';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

function PageTemplate({ children }: Props) {
  const { theme, switchTheme } = useTheme();

  const onClickTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    switchTheme({
      theme: currentTheme,
    });
    window.localStorage.setItem('theme', currentTheme);
  };

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    if (!theme) {
      window.localStorage.setItem('theme', 'light');
      switchTheme({
        theme: 'light',
      });
    } else {
      switchTheme({
        theme,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex as='main' className={cx('page-template', theme)}>
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
      <Spacing direction='horizontal' className={cx('space')} />
      <div className={cx('space')}></div>
      <div className={cx('contents')}>
        <Header className={cx('header')}></Header>
        <Spacing direction='vertical' spacing={72} />
        <section className={cx('page', theme)}>{children}</section>
      </div>
    </Flex>
  );
}

export default PageTemplate;
