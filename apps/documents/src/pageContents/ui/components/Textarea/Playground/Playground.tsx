'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  Textarea,
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
    disabled: 0,
    error: 0,
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
        <Textarea
          disabled={selected.disabled === 1}
          value={selected.disabled ? 'Disabled' : 'Primary'}
          readOnly
        ></Textarea>
        <Textarea
          disabled={selected.disabled === 1}
          placeholder={selected.disabled ? 'Disabled' : 'Primary'}
          readOnly
        ></Textarea>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Textarea disabled={${selected.disabled === 1}} value={${
            selected.disabled ? 'Disabled' : 'Primary'
          }} readOnly />`,
          `<Textarea disabled={${selected.disabled === 1}} placeholder={${
            selected.disabled ? 'Disabled' : 'Primary'
          }} readOnly />`,
        ]}
      ></CodeGuide>
      <Line></Line>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Error</Text>
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
      <Center className={cx('view')} horizontal={false}>
        <Textarea
          error={selected.error === 1}
          placeholder={selected.error ? 'Error' : 'Primary'}
          readOnly
        ></Textarea>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Textarea disabled={${selected.error === 1}} placeholder={${
            selected.error ? 'Error' : 'Primary'
          }} readOnly />`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
