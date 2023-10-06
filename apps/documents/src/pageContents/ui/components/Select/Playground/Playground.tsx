'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  RadioGroup,
  Spacing,
  Select,
} from '@upcast/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import pgStyle from './style.module.scss';

import classNames from 'classnames/bind';
import style from '@src/components/UIDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const [selected, setSelected] = useState({
    open: 0,
    error: 0,
    disabled: 0,
  });

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Select</Text>
      <Flex className={pgStyle['select-group']}>
        <Text>Open</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.open}
          onSelect={(_, idx: number) => {
            setSelected({
              ...selected,
              open: idx,
            });
          }}
        />
      </Flex>
      <Flex className={pgStyle['select-group']}>
        <Text>Error</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.error}
          onSelect={(_, idx: number) => {
            setSelected({
              ...selected,
              error: idx,
            });
          }}
        />
      </Flex>
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
      </Flex>
      <Center className={cx('view')} horizontal={false}>
        <Select
          open={selected.open === 1}
          error={selected.error === 1}
          disabled={selected.disabled === 1}
        >
          <Select.Box>Option1</Select.Box>
          <Select.Dropbox>
            <Select.Option>Option1</Select.Option>
            <Select.Option>Option2</Select.Option>
            <Select.Option>Option3</Select.Option>
          </Select.Dropbox>
        </Select>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Select open={${selected.open === 1}} error={${
            selected.error === 1
          }} disabled={${selected.disabled === 1}}>`,
          `    <Select.Box>Option1</Select.Box>`,
          `    <Select.Dropbox>`,
          `        <Select.Option>Option1</Select.Option>`,
          `        <Select.Option>Option2</Select.Option>`,
          `        <Select.Option>Option3</Select.Option>`,
          `    </Select.Dropbox>`,
          `</Select>`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
