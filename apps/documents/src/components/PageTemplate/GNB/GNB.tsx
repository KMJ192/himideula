import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { usePathname } from 'next/navigation';

import cloneDeep from 'lodash/cloneDeep';

import { SideNav, Spacing, Text } from '@upcast/react-ui';
import Line from '@src/components/Line/Line';

import { URL } from '@src/utils/url';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

type NavGroup = {
  url: string;
  contents: string;
};

const urlDictionary = new Set([
  URL.layout,
  URL.center,
  URL.flex,
  URL.grid,
  URL.float,
  URL.row,
  URL.spacing,
  URL.stack,
  URL.uiComponents,
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
  URL.dataTable,
  URL.hooks,
  URL.useTrie,
  URL.moduleComponents,
  URL.infiniteScroll,
]);

const initSelectedList: { [key: string]: boolean } = {
  [URL.layout]: false,
  [URL.center]: false,
  [URL.flex]: false,
  [URL.grid]: false,
  [URL.float]: false,
  [URL.spacing]: false,
  [URL.stack]: false,
  [URL.uiComponents]: false,
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
  [URL.dataTable]: false,
  [URL.hooks]: false,
  [URL.useTrie]: false,
  [URL.moduleComponents]: false,
  [URL.infiniteScroll]: false,
};

const layoutGroup: Array<NavGroup> = [
  {
    url: URL.center,
    contents: 'Center',
  },
  {
    url: URL.flex,
    contents: 'Flex',
  },
  {
    url: URL.grid,
    contents: 'Grid',
  },
  {
    url: URL.float,
    contents: 'Float',
  },
  {
    url: URL.row,
    contents: 'Row',
  },
  {
    url: URL.spacing,
    contents: 'Spacing',
  },
  {
    url: URL.stack,
    contents: 'Stack',
  },
];

const uiComponentGroup: Array<NavGroup> = [
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
  {
    url: URL.dataTable,
    contents: 'DataTable',
  },
];

const hooksGroup: Array<NavGroup> = [
  {
    url: URL.useTrie,
    contents: 'useTrie',
  },
];

const moduleComponentGroup: Array<NavGroup> = [
  {
    url: URL.infiniteScroll,
    contents: 'InfiniteScroll',
  },
];

const category = {
  layout: 'layout',
  uiComponents: 'components',
  hooks: 'hooks',
  moduleComponents: 'components',
};

const validNavGroup = (dataKey: string): string | null => {
  if (
    dataKey === URL.layout ||
    dataKey === URL.uiComponents ||
    dataKey === URL.hooks ||
    dataKey === URL.moduleComponents
  ) {
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
    [URL.layout]: false,
    [URL.uiComponents]: false,
    [URL.hooks]: false,
  });

  const onClickUI = () => {
    router.push(URL.ui);
    setSelected({ ...initSelectedList });
    setShow({
      ...show,
      [URL.hooks]: false,
    });
  };

  const onClickModules = () => {
    router.push(URL.modules);
    setSelected({ ...initSelectedList });
    setShow({
      ...show,
      [URL.layout]: false,
      [URL.uiComponents]: false,
    });
  };

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const element = e.target as HTMLElement;
    const dataKey = element.dataset.key;

    if (dataKey && isURL(dataKey)) {
      if (
        dataKey !== URL.uiComponents &&
        dataKey !== URL.layout &&
        dataKey !== URL.hooks &&
        dataKey !== URL.moduleComponents
      ) {
        router.push(dataKey);
      }
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

    if (group.length === 4) {
      const c = group[2];
      if (c === category.layout) {
        setShow({
          ...show,
          [URL.layout]: true,
        });
      } else if (c === category.uiComponents && group[1] === 'ui') {
        setShow({
          ...show,
          [URL.uiComponents]: true,
        });
      } else if (c === category.moduleComponents && group[1] === 'modules') {
        setShow({
          ...show,
          [URL.moduleComponents]: true,
        });
      } else if (c === category.hooks) {
        setShow({
          ...show,
          [URL.hooks]: true,
        });
      }

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
    <SideNav className={cx('gnb')} onClick={onClick} depthGap={0}>
      <SideNav.Menu onClick={onClickUI}>
        <Text typo='h3'>UI</Text>
      </SideNav.Menu>
      <SideNav.MenuGroup show>
        <SideNav.Menu data-key={URL.layout} selected={selected[URL.layout]}>
          <Text typo='t2' data-key={URL.layout} className={cx('category')}>
            Layout
          </Text>
        </SideNav.Menu>
        <SideNav.MenuGroup show={show[URL.layout]} className={cx('linker')}>
          {layoutGroup.map(({ url, contents }) => {
            return (
              <SideNav.Menu key={url} data-key={url} selected={selected[url]}>
                <Text typo='b2' data-key={url}>
                  {contents}
                </Text>
              </SideNav.Menu>
            );
          })}
        </SideNav.MenuGroup>
        <SideNav.Menu
          data-key={URL.uiComponents}
          selected={selected[URL.uiComponents]}
        >
          <Text
            typo='t2'
            data-key={URL.uiComponents}
            className={cx('category')}
          >
            Components
          </Text>
        </SideNav.Menu>
        <SideNav.MenuGroup
          show={show[URL.uiComponents]}
          className={cx('linker')}
        >
          {uiComponentGroup.map(({ url, contents }) => {
            return (
              <SideNav.Menu key={url} data-key={url} selected={selected[url]}>
                <Text typo='b2' data-key={url}>
                  {contents}
                </Text>
              </SideNav.Menu>
            );
          })}
        </SideNav.MenuGroup>
      </SideNav.MenuGroup>
      <Line />
      <SideNav.Menu onClick={onClickModules}>
        <Text typo='h3'>Module</Text>
      </SideNav.Menu>
      <SideNav.MenuGroup show>
        <SideNav.Menu data-key={URL.hooks}>
          <Text typo='t2' data-key={URL.hooks} className={cx('category')}>
            Hooks
          </Text>
        </SideNav.Menu>
        <SideNav.MenuGroup show={show[URL.hooks]} className={cx('linker')}>
          {hooksGroup.map(({ url, contents }) => {
            return (
              <SideNav.Menu key={url} data-key={url} selected={selected[url]}>
                <Text typo='b2' data-key={url}>
                  {contents}
                </Text>
              </SideNav.Menu>
            );
          })}
        </SideNav.MenuGroup>
        <SideNav.Menu data-key={URL.moduleComponents}>
          <Text
            typo='t2'
            data-key={URL.moduleComponents}
            className={cx('category')}
          >
            Components
          </Text>
        </SideNav.Menu>
        <SideNav.MenuGroup
          show={show[URL.moduleComponents]}
          className={cx('linker')}
        >
          {moduleComponentGroup.map(({ url, contents }) => {
            return (
              <SideNav.Menu key={url} data-key={url} selected={selected[url]}>
                <Text typo='b2' data-key={url}>
                  {contents}
                </Text>
              </SideNav.Menu>
            );
          })}
        </SideNav.MenuGroup>
      </SideNav.MenuGroup>
      <Spacing direction='vertical' spacing={16} />
    </SideNav>
  );
}

export default GNB;
