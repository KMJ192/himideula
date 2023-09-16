'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  RadioGroup,
  ProgressBar,
  Input,
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
    pending: 0,
  });
  const [percent, setPercent] = useState(50);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!Number.isNaN(value)) {
      if (value <= 100 && value >= 0) {
        setPercent(value);
      }
    }
  };

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Progress Controller</Text>
      <Flex className={pgStyle['select-group']}>
        <Text>pending</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.pending}
          onSelect={(idx: number) => {
            setSelected({
              ...selected,
              pending: idx,
            });
          }}
        />
      </Flex>
      <Flex className={pgStyle['select-group']}>
        <Text>percent (0 ~ 100 사이로 입력해주세요.)</Text>
        <Input value={percent} onChange={onChange} />
      </Flex>
      <Center className={cx('view')} horizontal={false}>
        <ProgressBar pending={selected.pending === 0} percent={percent} />
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<ProgressBar pending={${
            selected.pending === 0
          }} percent={${percent}} />`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
