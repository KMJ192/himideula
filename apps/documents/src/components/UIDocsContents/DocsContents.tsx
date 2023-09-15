'use client';

import { useEffect, useRef, useState } from 'react';

import {
  Text,
  Tab,
  Spacing,
  type TabOption,
  type TabOptionKey,
} from '@ssamssam/react-ui';
import Line from '../Line/Line';

import Documents from './Documents/Documents';
import APIs from './APIs/APIs';
import CSSVariable from './CSSVariable/CSSVariable';
import Playground from './Playground/Playground';

import {
  type Documents as DocType,
  type APIs as APIsType,
  type CSSVar,
  type Playground as Pg,
  useDocsContentsState,
} from '@src/store/pageContents/uiDocs/state';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  title: string;
  description: string;
  documents?: Array<DocType>;
  apis?: Array<APIsType>;
  cssVar?: Array<CSSVar>;
  playground?: Pg;
};

const components = [<Documents />, <APIs />, <CSSVariable />, <Playground />];

function DocsContents({
  title,
  description,
  documents,
  apis,
  cssVar,
  playground,
}: Props) {
  const [selected, setSelected] = useState(0);
  const options = useRef<Array<TabOption>>([
    {
      key: 0,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          Documents
        </Text>
      ),
      disabled: !documents,
    },
    {
      key: 1,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          APIs
        </Text>
      ),
      disabled: !apis,
    },
    {
      key: 2,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          CSS Variable
        </Text>
      ),
      disabled: !cssVar,
    },
    {
      key: 3,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          Playground
        </Text>
      ),
      disabled: !playground,
    },
  ]);
  const { viewComponent } = useDocsContentsState();

  const onSelect = (_: TabOptionKey, idx: number) => {
    if (selected !== idx) {
      setSelected(idx);
      // scroll 이벤트
    }
  };

  useEffect(() => {
    viewComponent({
      title,
      documents: documents ?? [],
      apis: apis ?? [],
      cssVar: cssVar ?? [],
      playground: playground ?? { component: null },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documents, apis, cssVar, playground, title]);

  return (
    <div className={cx('container')}>
      <Text typo='h2'>{title}</Text>
      <Spacing direction='vertical' spacing={8} />
      <Text>{description}</Text>
      <Spacing direction='vertical' spacing={16} />
      <Line />
      <Spacing direction='vertical' spacing={24} />
      <Tab options={options.current} selected={selected} onSelect={onSelect} />
      <Spacing direction='vertical' spacing={56} />
      <div>{components[selected]}</div>
    </div>
  );
}

export default DocsContents;
