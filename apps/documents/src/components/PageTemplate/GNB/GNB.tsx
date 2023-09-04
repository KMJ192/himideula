import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cloneDeep from 'lodash/cloneDeep';

import { SideNav } from '@ssamssam/react-ui';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

const urls = {
  components: '/components',
  button: '/components/button',
  hooks: '/hooks',
  useTrie: '/hooks/use-trie',
};

const pathDictionary = new Set([
  urls.components,
  urls.button,
  urls.hooks,
  urls.useTrie,
]);

const initSelectedList: { [key: string]: boolean } = {
  [urls.components]: false,
  [urls.button]: false,
  [urls.hooks]: false,
  [urls.useTrie]: false,
};

type NavGroup = {
  url: string;
  contents: string;
};

const componentGroup: Array<NavGroup> = [
  {
    url: urls.button,
    contents: 'button',
  },
];

const hooksGroup: Array<NavGroup> = [
  {
    url: urls.useTrie,
    contents: 'useTrie',
  },
];

const validNavGroup = (dataKey: string): string | null => {
  if (dataKey === urls.components || dataKey === urls.hooks) {
    return dataKey;
  }
  return null;
};

function GNB() {
  const pathname = usePathname();
  const [selected, setSelected] = useState(cloneDeep(initSelectedList));
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    [urls.components]: false,
    [urls.hooks]: false,
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
      (group[1] === 'components' || group[1] === 'hooks')
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
      <SideNav.Menu
        data-key={urls.components}
        selected={selected[urls.components]}
      >
        Components
      </SideNav.Menu>
      <SideNav.MenuGroup show={show[urls.components]} depth={1}>
        {componentGroup.map(({ url, contents }) => {
          return (
            <Link href={url} key={url}>
              <SideNav.Menu data-key={url} selected={selected[url]}>
                {contents}
              </SideNav.Menu>
            </Link>
          );
        })}
      </SideNav.MenuGroup>
      <SideNav.Menu data-key={urls.hooks} selected={selected[urls.hooks]}>
        Hooks
      </SideNav.Menu>
      <SideNav.MenuGroup show={show[urls.hooks]} depth={1}>
        {hooksGroup.map(({ url, contents }) => {
          return (
            <Link href={url} key={url}>
              <SideNav.Menu data-key={url} selected={selected[url]}>
                {contents}
              </SideNav.Menu>
            </Link>
          );
        })}
      </SideNav.MenuGroup>
    </SideNav>
  );
}

export default GNB;
