'use client';

import { useEffect, useRef, useState } from 'react';

import {
  Flex,
  Text,
  Spacing,
  Tab,
  type TabOption,
  type TabOptionKey,
} from '@upcast/react-ui';

import Line from '../Line/Line';

import Usage from './Usage/Usage';
import APIs from './APIs/APIs';
import DataType from './DataType/DataType';
import {
  useModulesDocsState,
  type Usage as Usg,
  type APIs as As,
  type DataType as Dt,
  Playground as Pg,
} from '@src/store/pageContents/modulesDocs/state';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import Playground from './Playground/Playground';
const cx = classNames.bind(style);

type Props = {
  title: string;
  description: string;
  usage?: Array<Usg>;
  apis?: Array<As>;
  dataType?: Array<Dt>;
  playground?: Pg;
};

const components = [<Usage />, <DataType />, <APIs />, <Playground />];

function DocsContents({
  title,
  description,
  usage,
  apis,
  dataType,
  playground,
}: Props) {
  const [selected, setSelected] = useState(0);
  const options = useRef<Array<TabOption>>([
    {
      key: 0,
      contents: <Text typo='s1'>사용</Text>,
      disabled: !usage,
    },
    {
      key: 1,
      contents: <Text typo='s1'>데이터 타입</Text>,
      disabled: !dataType,
    },
    {
      key: 2,
      contents: <Text typo='s1'>API</Text>,
      disabled: !apis,
    },
    {
      key: 3,
      contents: <Text typo='s1'>플레이그라운드</Text>,
      disabled: !playground,
    },
  ]);

  const { setInfo } = useModulesDocsState();

  const onSelect = (_: TabOptionKey, idx: number) => {
    if (selected !== idx) {
      setSelected(idx);
    }
  };

  useEffect(() => {
    setInfo({
      title,
      usage: usage ?? [],
      apis: apis ?? [],
      dataType: dataType ?? [],
      playground,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usage, apis, title]);

  return (
    <Flex className={cx('container')}>
      <Text typo='h2'>{title}</Text>
      <Spacing spacing={24} />
      <Text>{description}</Text>
      <Spacing spacing={16} />
      <Line />
      <Spacing spacing={24} />
      <Tab options={options.current} selected={selected} onSelect={onSelect} />
      <Spacing direction='vertical' spacing={56} />
      {components[selected]}
    </Flex>
  );
}

export default DocsContents;
