'use client';

import React, { useRef, useState } from 'react';
import useCustomRouter from '@src/hooks/useCustomRouter';
import { useTheme } from '@src/store/theme/themeState';

import {
  Flex,
  SideNavTemplate,
  Header,
  HamburgerMenu,
  type SideNavItem,
  Spacing,
  Float,
  Button,
} from '@ssamssam/react-ui';

import classNames from 'classnames/bind';
import style from './style.module.scss';

const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

function PageTemplate({ children }: Props) {
  const { router } = useCustomRouter();
  const { theme, switchTheme } = useTheme();
  const [active, setActive] = useState(false);

  const navItem = useRef<Array<SideNavItem>>([
    {
      key: 'components',
      contents: 'Components',
      children: [
        {
          key: 'components/button',
          contents: 'Button',
        },
      ],
    },
    {
      key: 'modules',
      contents: 'Modules',
      children: [
        {
          key: 'modules/custom-hooks',
          contents: 'CustomHooks',
          children: [
            {
              key: 'modules/custom-hooks/use-trie',
              contents: 'useTrie',
            },
          ],
        },
        {
          key: 'modules/scroll',
          contents: 'Scroll',
          children: [
            {
              key: 'modules/scroll/infinite-scroll',
              contents: 'InfiniteScroll',
            },
            {
              key: 'modules/scroll/virtual-list',
              contents: 'VirtualList',
            },
          ],
        },
      ],
    },
  ]);

  const onClickItem = (key: string | number) => {
    const path = String(key);
    const url = window.location.origin;
    const pass = [
      'components',
      'modules',
      'modules/custom-hooks',
      'modules/scroll',
    ];
    for (let i = 0; i < pass.length; i++) {
      if (path === pass[i]) {
        return;
      }
    }
    router.push(`${url}/${path}`);
  };

  const onClickActive = () => {
    setActive(!active);
  };

  const onClickTheme = () => {
    switchTheme({
      theme: theme === 'light' ? 'dark' : 'light',
    });
  };

  return (
    <Flex className={cx('page-template', active && 'hide')}>
      <Float className={cx('theme')} startDirection='rb'>
        <Button
          shape='circle'
          className={cx('theme-btn')}
          onClick={onClickTheme}
        >
          {theme}
        </Button>
      </Float>
      <SideNavTemplate
        className={cx('gnb')}
        navItem={navItem.current}
        depthGap={8}
        onClickItem={onClickItem}
      />
      <div className={cx('contents')}>
        <Header className={cx('header')}>
          <HamburgerMenu onClick={onClickActive} />
        </Header>
        <Spacing direction='vertical' spacing={72} />
        <main className={cx('page')}>{children}</main>
      </div>
    </Flex>
  );
}

export default PageTemplate;
