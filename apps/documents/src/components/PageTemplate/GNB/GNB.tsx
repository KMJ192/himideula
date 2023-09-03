import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cloneDeep from 'lodash/cloneDeep';

import { SideNav } from '@ssamssam/react-ui';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

const pathDictionary = new Set([
  '/components',
  '/components/button',
  '/modules',
  '/modules/use-trie',
]);

const initSelectedList = {
  '/components': false,
  '/components/button': false,
  '/modules': false,
  '/modules/use-trie': false,
};

const validNavGroup = (dataKey: string): '/components' | '/modules' | null => {
  if (dataKey === '/components' || dataKey === '/modules') {
    return dataKey;
  }
  return null;
};

function GNB() {
  const pathname = usePathname();
  const [selected, setSelected] = useState(cloneDeep(initSelectedList));
  const [show, setShow] = useState({
    '/components': false,
    '/modules': false,
  });

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    const dataKey = element.dataset.key;
    if (dataKey) {
      setSelected({
        ...initSelectedList,
        [String(dataKey)]: true,
      });

      const groupName = validNavGroup(dataKey);
      if (groupName) {
        setShow({
          ...show,
          [groupName]: !show[groupName],
        });
      }
    }
  };

  useEffect(() => {
    const group = pathname.split('/');
    if (
      group.length > 1 &&
      (group[1] === 'components' || group[1] === 'modules')
    ) {
      setShow({
        ...show,
        [`/${group[1]}`]: true,
      });
      if (pathDictionary.has(pathname)) {
        setSelected({
          ...initSelectedList,
          [pathname]: true,
        });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <SideNav depthGap={12} className={cx('gnb')} onClick={onClick}>
      <SideNav.Menu data-key='/components' selected={selected['/components']}>
        Components
      </SideNav.Menu>
      <SideNav.MenuGroup show={show['/components']} depth={1}>
        <Link href='/components/button'>
          <SideNav.Menu
            data-key='/components/button'
            selected={selected['/components/button']}
          >
            Button
          </SideNav.Menu>
        </Link>
      </SideNav.MenuGroup>
      <SideNav.Menu data-key='/modules' selected={selected['/modules']}>
        Modules
      </SideNav.Menu>
      <SideNav.MenuGroup show={show['/modules']} depth={1}>
        <SideNav.Menu
          data-key='/modules/use-trie'
          selected={selected['/modules/use-trie']}
        >
          useTrie
        </SideNav.Menu>
      </SideNav.MenuGroup>
    </SideNav>
  );
}

export default GNB;
