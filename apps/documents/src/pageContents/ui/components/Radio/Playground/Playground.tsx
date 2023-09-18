'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  Radio,
  RadioGroup,
  Spacing,
} from '@upcast/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import pgStyle from './style.module.scss';

import classNames from 'classnames/bind';
import style from '@src/components/UIDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const [selected, setSelected] = useState({
    disabled: 0,
    checked: 0,
  });

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Radio Controller</Text>
      <Flex className={pgStyle['select-group']}>
        <Text>Disabled</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.disabled}
          onSelect={(_, idx: number) => {
            setSelected({
              ...selected,
              disabled: idx,
            });
          }}
        />
        <Text>Checked</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.checked}
          onSelect={(_, idx: number) => {
            setSelected({
              ...selected,
              checked: idx,
            });
          }}
        />
      </Flex>
      <Center className={cx('view')} horizontal={false}>
        <Radio
          disabled={selected.disabled === 1}
          checked={selected.checked === 1}
        >
          Radio
        </Radio>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Radio disabled={${selected.disabled === 1}} checked={${
            selected.checked === 1
          }}>Radio</Radio>`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
