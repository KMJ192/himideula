'use client';

import { Flex, Text } from '@ssamssam/react-ui';
import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  code?: string;
  header?: string;
};

function CodeGuide({ header = '', code = '' }: Props) {
  const { theme } = useTheme();

  const onClickCopy = () => {
    if (code.length > 0) {
      navigator.clipboard
        .writeText(code)
        .then(() => {})
        .catch(() => {});
    }
  };

  return (
    <Flex className={cx('container')}>
      <Flex className={cx('header', theme)}>
        <Text typo='c1'>{header}</Text>
        <Text typo='c1' className={cx('copy')} onClick={onClickCopy}>
          copy
        </Text>
      </Flex>
      <pre className={cx('code-view', theme)}>{code}</pre>
    </Flex>
  );
}

export default CodeGuide;
