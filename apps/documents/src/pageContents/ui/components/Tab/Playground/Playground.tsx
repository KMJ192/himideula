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
} from '@upcast/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import classNames from 'classnames/bind';
import style from '@src/components/UIDocsContents/Playground/frame.module.scss';
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

function Playground() {
  const [selected, setSelected] = useState<TabOptionKey>(0);
  const [direction, setDirection] = useState(0);

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Switch Controller</Text>
      <RadioGroup
        options={OPTIONS.DIRECTION}
        selected={direction}
        onSelect={(_, idx: number) => {
          setDirection(idx);
        }}
      />
      <Center className={cx('view')} horizontal={false}>
        <Tab
          selected={Number(selected)}
          options={options}
          direction={direction === 0 ? 'horizontal' : 'vertical'}
          onSelect={(idx) => {
            setSelected(idx);
          }}
        />
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Tab selected={${selected}} direction="${
            direction === 0 ? 'horizontal' : 'vertical'
          }" />`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
