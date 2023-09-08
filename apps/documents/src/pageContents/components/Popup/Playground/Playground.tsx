'use client';

import { useState } from 'react';

import {
  Center,
  Flex,
  Text,
  Popup,
  RadioGroup,
  Spacing,
} from '@ssamssam/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { OPTIONS } from './options';

import pgStyle from './style.module.scss';

import classNames from 'classnames/bind';
import style from '@src/components/ComponentsDocsContents/Playground/frame.module.scss';
const cx = classNames.bind(style);

function ButtonLoading() {
  const [selected, setSelected] = useState({
    animation: 0,
    visible: 0,
  });

  return (
    <Flex className={cx('contents')}>
      <Spacing direction='vertical' spacing={8} />
      <Text typo='t1'>Popup Controller</Text>
      <Flex className={pgStyle['select-group']}>
        <Text>visible</Text>
        <RadioGroup
          options={OPTIONS.TOGGLE}
          selected={selected.visible}
          onSelect={(idx: number) => {
            setSelected({
              ...selected,
              visible: idx,
            });
          }}
        />
      </Flex>
      <Flex className={pgStyle['select-group']}>
        <Text>animation</Text>
        <RadioGroup
          options={OPTIONS.ANIMATION}
          selected={selected.animation}
          onSelect={(idx: number) => {
            setSelected({
              ...selected,
              animation: idx,
            });
          }}
        />
      </Flex>
      <Center className={cx('view')} horizontal={false}>
        <Popup
          visible={selected.visible === 1}
          animation={selected.animation === 0 ? 'none' : 'fade'}
          className={pgStyle.popup}
        >
          Popup 컴포넌트
        </Popup>
      </Center>
      <CodeGuide
        header='javascript'
        code={[
          `<Popup visible={${selected.visible === 1}} animation={${
            selected.animation === 0 ? 'none' : 'fade'
          }}>Popup 컴포넌트</Popup>`,
        ]}
      ></CodeGuide>
    </Flex>
  );
}

export default ButtonLoading;
