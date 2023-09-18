'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  Button,
  RadioGroup,
  Spacing,
} from '@upcast/react-ui';
import type {
  Variant,
  Shape,
} from '@upcast/react-ui/build/components/Button/types';
import Line from '@src/components/Line/Line';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import classNames from 'classnames/bind';
import style from '@src/components/UIDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const [selected, setSelected] = useState({
    disabled: 0,
    loading: 0,
    variant: 0,
    shape: 0,
  });

  return (
    <Flex className={cx('contents')}>
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
        <Button disabled={selected.disabled === 1}>Disabled</Button>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Button disabled={${selected.disabled === 1}}>Disabled</Button>`,
        ]}
      ></CodeGuide>
      <Line></Line>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Loading</Text>
      <RadioGroup
        options={OPTIONS.TOGGLE}
        selected={selected.loading}
        onSelect={(_, idx: number) => {
          setSelected({
            ...selected,
            loading: idx,
          });
        }}
      />
      <Center className={cx('view')} horizontal={false}>
        <Button loading={selected.loading === 1}>Loading</Button>
      </Center>
      <CodeGuide
        header='javascript'
        code={[`<Button loading={${selected.loading === 1}}>Loading</Button>`]}
      />
      <Line></Line>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Variant</Text>
      <RadioGroup
        options={OPTIONS.VARIANT}
        selected={selected.variant}
        onSelect={(_, idx: number) => {
          setSelected({
            ...selected,
            variant: idx,
          });
        }}
      />
      <Center className={cx('view')} horizontal={false}>
        <Button variant={OPTIONS.VARIANT[selected.variant].children as Variant}>
          {OPTIONS.VARIANT[selected.variant].children}
        </Button>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Button variant={${OPTIONS.VARIANT[selected.variant].children}}>${
            OPTIONS.VARIANT[selected.variant].children
          }</Button>`,
        ]}
      ></CodeGuide>
      <Line></Line>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Shape</Text>
      <RadioGroup
        options={OPTIONS.SHAPE}
        selected={selected.shape}
        onSelect={(_, idx: number) => {
          setSelected({
            ...selected,
            shape: idx,
          });
        }}
      />
      <Center
        className={cx('view')}
        horizontal={false}
        style={{
          minHeight: '88px',
        }}
      >
        <Button shape={OPTIONS.SHAPE[selected.shape].children as Shape}>
          {OPTIONS.SHAPE[selected.shape].children}
        </Button>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Button shape={${OPTIONS.SHAPE[selected.shape].children}}>${
            OPTIONS.SHAPE[selected.shape].children
          }</Button>`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
