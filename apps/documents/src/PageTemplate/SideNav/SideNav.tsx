'use client';

import { useRef } from 'react';

import { useRouter } from 'next/navigation';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

import {
  SideNavTemplate,
  type SideNavItem,
  type SideNavKey,
} from '@ssamssam/react-ui';

function SideNav() {
  const router = useRouter();

  const navItem = useRef<Array<SideNavItem>>([
    {
      key: 'components/button',
      contents: 'Components',
    },
  ]);

  const onClickItem = (key: SideNavKey) => {
    // eslint-disable-next-line no-console
    const route = String(key);
    router.push(route);
  };

  return (
    <SideNavTemplate
      navItem={navItem.current}
      onClickItem={onClickItem}
      className={cx('side-nav')}
    ></SideNavTemplate>
  );
}

export default SideNav;
