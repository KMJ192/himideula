'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  RadioGroup,
  Spacing,
  Spinner,
} from '@ssamssam/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import classNames from 'classnames/bind';
import style from '@src/components/UIDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const [selected, setSelected] = useState(0);

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>RadioGroup Controller</Text>
      <RadioGroup
        options={OPTIONS.TYPE}
        selected={selected}
        onSelect={(idx: number) => {
          setSelected(idx);
        }}
      />
      <Center className={cx('view')} horizontal={false}>
        <Spinner type={selected === 0 ? 'type-1' : 'type-2'} />
      </Center>
      <CodeGuide
        header='javascript'
        code={[`<Spinner type="${selected === 0 ? 'type-1' : 'type-2'}" />`]}
      ></CodeGuide>
    </Flex>
  );
}

export default Playground;
