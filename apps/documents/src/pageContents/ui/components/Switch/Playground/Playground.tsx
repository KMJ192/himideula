'use client';

import { useState } from 'react';

import {
  Center,
  Switch,
  Flex,
  Text,
  RadioGroup,
  Spacing,
} from '@ssamssam/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import pgStyle from './style.module.scss';

import classNames from 'classnames/bind';
import style from '@src/components/ComponentsDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const [selected, setSelected] = useState({
    checked: 0,
    disabled: 0,
  });

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Switch Controller</Text>
      <Flex className={pgStyle['select-group']}>
        <Text>Checked</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.checked}
          onSelect={(idx: number) => {
            setSelected({
              ...selected,
              checked: idx,
            });
          }}
        />
        <Text>Disabled</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.disabled}
          onSelect={(idx: number) => {
            setSelected({
              ...selected,
              disabled: idx,
            });
          }}
        />
      </Flex>
      <Center className={cx('view')} horizontal={false}>
        <Switch
          checked={selected.checked === 1}
          disabled={selected.disabled === 1}
        >
          Switch
        </Switch>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Switch checked={${selected.checked === 1}} disabled={${
            selected.disabled === 1
          }}>Switch</Switch>`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
