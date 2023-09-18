'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  Checkbox,
  RadioGroup,
  Spacing,
} from '@upcast/react-ui';
import Line from '@src/components/Line/Line';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import classNames from 'classnames/bind';
import style from '@src/components/UIDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const [selected, setSelected] = useState({
    checked: 0,
    multiple: 0,
    disabled: 0,
  });

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Checked</Text>
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
      <Center className={cx('view')} horizontal={false}>
        <Checkbox checked={selected.checked === 1}>
          {selected.checked === 1 ? 'Checked' : 'UnChecked'}
        </Checkbox>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Checkbox checked={${selected.checked === 1}}>${
            selected.checked === 1 ? 'Checked' : 'UnChecked'
          }</Checkbox>`,
        ]}
      ></CodeGuide>
      <Line></Line>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Is multiple</Text>
      <RadioGroup
        options={OPTIONS.TOGGLE}
        selected={selected.multiple}
        onSelect={(_, idx: number) => {
          setSelected({
            ...selected,
            multiple: idx,
          });
        }}
      />
      <Center className={cx('view')} horizontal={false}>
        <Checkbox checked multiple={selected.multiple === 1 && true}>
          {selected.multiple === 0 ? 'Single' : 'Multiple'}
        </Checkbox>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Checkbox checked multiple={${selected.multiple === 1 && true}}>${
            selected.multiple === 0 ? 'Single' : 'Multiple'
          }</Checkbox>`,
        ]}
      ></CodeGuide>
      <Line></Line>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Disabled</Text>
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
      <Center className={cx('view')} horizontal={false}>
        <Checkbox disabled={selected.disabled === 1 && true} />
        <Checkbox checked disabled={selected.disabled === 1 && true} />
        <Checkbox checked multiple disabled={selected.disabled === 1 && true} />
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Checkbox disabled={${selected.disabled === 1 && true}} />`,
          `<Checkbox checked disabled={${selected.disabled === 1 && true}} />`,
          `<Checkbox checked multiple disabled={${
            selected.disabled === 1 && true
          }} />`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
