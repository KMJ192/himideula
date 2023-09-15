'use client';

import { useEffect, useRef, useState } from 'react';

import {
  Text,
  Tab,
  Flex,
  Spacing,
  type TabOption,
  type TabOptionKey,
} from '@ssamssam/react-ui';
import Line from '../Line/Line';

import Documents from './Documents/Documents';
import APIs from './APIs/APIs';
import CSSVariable from './CSSVariable/CSSVariable';
import Playground from './Playground/Playground';
import DataType from './DataType/DataType';

import {
  type Documents as DocType,
  type APIs as APIsType,
  type CSSVar,
  type Playground as Pg,
  useUIDocsState,
  type DataType as Dt,
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
  dataType?: Array<Dt>;
  playground?: Pg;
};

const components = [
  <Documents />,
  <DataType />,
  <APIs />,
  <CSSVariable />,
  <Playground />,
];

function DocsContents({
  title,
  description,
  documents,
  apis,
  cssVar,
  playground,
  dataType,
}: Props) {
  const [selected, setSelected] = useState(0);
  const options = useRef<Array<TabOption>>([
    {
      key: 0,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          문서
        </Text>
      ),
      disabled: !documents,
    },
    {
      key: 1,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          데이터 타입
        </Text>
      ),
      disabled: !dataType,
    },
    {
      key: 2,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          API
        </Text>
      ),
      disabled: !apis,
    },
    {
      key: 3,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          CSS 변수
        </Text>
      ),
      disabled: !cssVar,
    },
    {
      key: 4,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          테스트 페이지
        </Text>
      ),
      disabled: !playground,
    },
  ]);
  const { setInfo } = useUIDocsState();

  const onSelect = (_: TabOptionKey, idx: number) => {
    if (selected !== idx) {
      setSelected(idx);
      // scroll 이벤트
    }
  };

  useEffect(() => {
    setInfo({
      title,
      documents: documents ?? [],
      apis: apis ?? [],
      cssVar: cssVar ?? [],
      playground: playground ?? { component: null },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [documents, apis, cssVar, playground, title]);

  return (
    <Flex className={cx('container')}>
      <Text typo='h2'>{title}</Text>
      <Spacing direction='vertical' spacing={8} />
      <Text>{description}</Text>
      <Spacing direction='vertical' spacing={16} />
      <Line />
      <Spacing direction='vertical' spacing={24} />
      <Tab options={options.current} selected={selected} onSelect={onSelect} />
      <Spacing direction='vertical' spacing={56} />
      {components[selected]}
    </Flex>
  );
}

export default DocsContents;
