'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  Tab,
  RadioGroup,
  Spacing,
  type TabOptionKey,
} from '@ssamssam/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import classNames from 'classnames/bind';
import style from '@src/components/ComponentsDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

const options = [
  {
    key: 0,
    contents: 'first',
    disabled: false,
  },
  {
    key: 1,
    contents: 'second',
    disabled: false,
  },
  {
    key: 2,
    contents: 'third',
    disabled: false,
  },
];

function ButtonLoading() {
  const [selected, setSelected] = useState<TabOptionKey>(0);
  const [direction, setDirection] = useState(0);

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Table Controller</Text>
      <RadioGroup
        options={OPTIONS.DIRECTION}
        selected={direction}
        onSelect={(idx: number) => {
          setDirection(idx);
        }}
      />
      <Center className={cx('view')} horizontal={false}></Center>
      <CodeGuide header='javascript' code={[]}></CodeGuide>
    </Flex>
  );
}

export default ButtonLoading;
