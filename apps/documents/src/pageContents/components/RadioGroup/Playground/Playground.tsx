'use client';

import { useState } from 'react';

import { Center, Flex, Text, RadioGroup, Spacing } from '@ssamssam/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import classNames from 'classnames/bind';
import style from '@src/components/ComponentsDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

const options = [
  {
    key: 0,
    children: 'first',
    disabled: false,
  },
  {
    key: 1,
    children: 'second',
    disabled: false,
  },
  {
    key: 2,
    children: 'third',
    disabled: false,
  },
];

function ButtonLoading() {
  const [selected, setSelected] = useState(0);
  const [direction, setDirection] = useState(0);

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>RadioGroup Controller</Text>
      <RadioGroup
        options={OPTIONS.DIRECTION}
        selected={direction}
        onSelect={(idx: number) => {
          setDirection(idx);
        }}
      />
      <Center className={cx('view')} horizontal={false}>
        <RadioGroup
          selected={selected}
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
          `<RadioGroup selected={${selected}} direction="${
            direction === 0 ? 'horizontal' : 'vertical'
          }" onSelect={(idx: number) => { setSelected(${selected}); }} />`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default ButtonLoading;
