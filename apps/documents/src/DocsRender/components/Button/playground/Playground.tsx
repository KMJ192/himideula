'use client';

import {
  Flex,
  Text,
  Button,
  RadioGroup,
  type RadioGroupOption,
} from '@ssamssam/react-ui';

import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from '@src/components/DocsContents/Playground/frame.module.scss';
import { useState } from 'react';
import Line from '@src/components/Line/Line';
const cx = classNames.bind(style);

const options: Array<RadioGroupOption> = [
  {
    key: 0,
    children: 'false',
  },
  {
    key: 1,
    children: 'true',
  },
];

function ButtonLoading() {
  const [loadingSelected, setLoadingSelected] = useState(0);
  const { theme } = useTheme();

  return (
    <Flex className={cx('contents')}>
      <Text typo='t1'>Loading</Text>
      <RadioGroup
        options={options}
        selected={loadingSelected}
        onSelect={(idx: number) => {
          setLoadingSelected(idx);
        }}
      />
      <div className={cx('view')}>
        <Button loading={loadingSelected === 1}>Loading</Button>
      </div>
      <pre className={cx('code-guide', theme)}>
        {`<Button loading={${loadingSelected === 1}}>Loading</Button>`}
      </pre>
      <Line></Line>
    </Flex>
  );
}

export default ButtonLoading;
