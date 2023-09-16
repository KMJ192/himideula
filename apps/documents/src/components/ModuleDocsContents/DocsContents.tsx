'use client';

import { useEffect, useRef, useState } from 'react';

import {
  Flex,
  Text,
  Spacing,
  Tab,
  type TabOption,
  type TabOptionKey,
} from '@ssamssam/react-ui';

import Line from '../Line/Line';

import Usage from './Usage/Usage';
import APIs from './APIs/APIs';
import DataType from './DataType/DataType';
import {
  useHooksDocsState,
  type Usage as Usg,
  type APIs as As,
  type DataType as Dt,
} from '@src/store/pageContents/modulesDocs/state';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  title: string;
  description: string;
  usage?: Array<Usg>;
  apis?: Array<As>;
  dataType?: Array<Dt>;
};

const components = [<Usage />, <DataType />, <APIs />];

function DocsContents({ title, description, usage, apis, dataType }: Props) {
  const [selected, setSelected] = useState(0);
  const options = useRef<Array<TabOption>>([
    {
      key: 0,
      contents: (
        <Text typo='s1' className={cx('option-text')}>
          사용
        </Text>
      ),
      disabled: !usage,
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
  ]);

  const { setInfo } = useHooksDocsState();

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
