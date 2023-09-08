import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { usePathname } from 'next/navigation';

import cloneDeep from 'lodash/cloneDeep';

import { SideNav } from '@ssamssam/react-ui';

import { URL } from '@src/utils/url';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

const urlDictionary = new Set([
  URL.components,
  URL.badge,
  URL.button,
  URL.checkbox,
  URL.input,
  URL.popup,
  URL.progressBar,
  URL.radio,
  URL.radioGroup,
  URL.spinner,
  URL.switch,
  URL.tab,
  URL.hooks,
  URL.useTrie,
]);

const initSelectedList: { [key: string]: boolean } = {
  [URL.components]: false,
  [URL.badge]: false,
  [URL.button]: false,
  [URL.checkbox]: false,
  [URL.input]: false,
  [URL.popup]: false,
  [URL.progressBar]: false,
  [URL.radio]: false,
  [URL.spinner]: false,
  [URL.switch]: false,
  [URL.tab]: false,
  [URL.hooks]: false,
  [URL.useTrie]: false,
};

type NavGroup = {
  url: string;
  contents: string;
};

const componentGroup: Array<NavGroup> = [
  {
    url: URL.button,
    contents: 'Button',
  },
  {
    url: URL.badge,
    contents: 'Badge',
  },
  {
    url: URL.checkbox,
    contents: 'Checkbox',
  },
  {
    url: URL.input,
    contents: 'Input',
  },
  {
    url: URL.popup,
    contents: 'Popup',
  },
  {
    url: URL.progressBar,
    contents: 'ProgressBar',
  },
  {
    url: URL.radio,
    contents: 'Radio',
  },
  {
    url: URL.radioGroup,
    contents: 'RadioGroup',
  },
  {
    url: URL.spinner,
    contents: 'Spinner',
  },
  {
    url: URL.switch,
    contents: 'Switch',
  },
  {
    url: URL.tab,
    contents: 'Tab',
  },
];

// const hooksGroup: Array<NavGroup> = [
//   {
//     url: URL.useTrie,
//     contents: 'useTrie',
//   },
// ];

const validNavGroup = (dataKey: string): string | null => {
  if (dataKey === URL.components || dataKey === URL.hooks) {
    return dataKey;
  }
  return null;
};

const isURL = (url: string) => {
  return urlDictionary.has(url);
};

function GNB() {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState(cloneDeep(initSelectedList));
  const [show, setShow] = useState<{ [key: string]: boolean }>({
    [URL.components]: false,
    [URL.hooks]: false,
  });

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    const dataKey = element.dataset.key;
    if (dataKey && isURL(dataKey)) {
      router.push(dataKey);
      setSelected({
        ...initSelectedList,
        [dataKey]: true,
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
      if (urlDictionary.has(pathname)) {
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
        data-key={URL.components}
        selected={selected[URL.components]}
      >
        Components
      </SideNav.Menu>
      <SideNav.MenuGroup show={show[URL.components]} depth={1}>
        {componentGroup.map(({ url, contents }) => {
          return (
            <SideNav.Menu key={url} data-key={url} selected={selected[url]}>
              {contents}
            </SideNav.Menu>
          );
        })}
      </SideNav.MenuGroup>
      {/* <SideNav.Menu data-key={URL.hooks} selected={selected[URL.hooks]}>
        Hooks
      </SideNav.Menu>
      <SideNav.MenuGroup show={show[URL.hooks]} depth={1}>
        {hooksGroup.map(({ url, contents }) => {
          return (
            <SideNav.Menu key={url} data-key={url} selected={selected[url]}>
              {contents}
            </SideNav.Menu>
          );
        })}
      </SideNav.MenuGroup> */}
    </SideNav>
  );
}

export default GNB;
