'use client';

import { useState } from 'react';

import { Center, Flex, Text, RadioGroup, Spacing } from '@upcast/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import pgStyle from './style.module.scss';

import classNames from 'classnames/bind';
import style from '@src/components/UIDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const [selected, setSelected] = useState({
    vertical: 0,
    horizontal: 0,
  });

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Center Controller</Text>
      <Flex className={pgStyle['select-group']}>
        <Text>Vertical</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.vertical}
          onSelect={(idx: number) => {
            setSelected({
              ...selected,
              vertical: idx,
            });
          }}
        />
        <Text>Horizontal</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.horizontal}
          onSelect={(idx: number) => {
            setSelected({
              ...selected,
              horizontal: idx,
            });
          }}
        />
      </Flex>
      <Flex
        className={cx('view')}
        style={{
          height: '100px',
        }}
      >
        <Center
          vertical={selected.vertical === 0}
          horizontal={selected.horizontal === 0}
        >
          This is Center
        </Center>
      </Flex>
      <CodeGuide
        header='javascript'
        code={[
          `<Center vertical={${selected.vertical === 0}} horizontal={${
            selected.horizontal === 0
          }}>`,
          `    This is Center`,
          `</Center>`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
