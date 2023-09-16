'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  Badge,
  RadioGroup,
  Spacing,
  type RadioGroupOption,
} from '@upcast/react-ui';
import Line from '@src/components/Line/Line';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import classNames from 'classnames/bind';
import style from '@src/components/UIDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

const COLOR_SCHEME: Array<RadioGroupOption> = [
  {
    key: 0,
    children: 'primary',
  },
  {
    key: 1,
    children: 'success',
  },
  {
    key: 2,
    children: 'info',
  },
  {
    key: 3,
    children: 'warning',
  },
  {
    key: 4,
    children: 'danger',
  },
];

const OPTIONS = { COLOR_SCHEME };

function Playground() {
  const [selected, setSelected] = useState(0);

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Color Scheme</Text>
      <RadioGroup
        options={OPTIONS.COLOR_SCHEME}
        selected={selected}
        onSelect={(idx: number) => {
          setSelected(idx);
        }}
      />
      <Center className={cx('view')} horizontal={false}>
        <Badge colorSchema={OPTIONS.COLOR_SCHEME[selected].children as any}>
          {OPTIONS.COLOR_SCHEME[selected].children}
        </Badge>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Badge colorSchema={${
            OPTIONS.COLOR_SCHEME[selected].children as any
          }}>${OPTIONS.COLOR_SCHEME[selected].children}</Badge>`,
        ]}
      ></CodeGuide>
      <Line></Line>
    </Flex>
  );
}

export default Playground;
