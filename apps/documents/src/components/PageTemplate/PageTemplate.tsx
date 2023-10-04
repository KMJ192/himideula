'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from '@src/store/theme/themeState';
import Link from 'next/link';

import { Flex, Spacing, Switch } from '@upcast/react-ui';
import Header from './Header/Header';

import GNB from './GNB/GNB';
import Dark from './Icons/Dark';
import Light from './Icons/Light';
import GitHubIcon from './Icons/GitHubIcon';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

function PageTemplate({ children }: Props) {
  const { theme, switchTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  const onClickTheme = () => {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    switchTheme({
      theme: currentTheme,
    });
    setChecked(!checked);
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

  useEffect(() => {
    setChecked(theme === 'dark');
  }, [theme]);

  return (
    <Flex as='main' className={cx('page-template', theme)}>
      <GNB />
      <Spacing direction='horizontal' className={cx('space', theme)} />
      <div className={cx('contents')}>
        <Header className={cx('header')}>
          <Flex className={cx('right-contents', theme)}>
            <Link
              href='https://github.com/KMJ192/upcast'
              target='_blank'
              className={cx('github', theme)}
            >
              <GitHubIcon />
            </Link>
            <Spacing direction='horizontal' spacing={24} />
            <div>
              <Light />
              <Dark />
            </div>
            <Switch onClick={onClickTheme} checked={checked} />
          </Flex>
        </Header>
        <section className={cx('page', theme)}>{children}</section>
      </div>
    </Flex>
  );
}

export default PageTemplate;
