'use client';

import { useTheme } from '@src/store/theme/themeState';
import type { ReactNode } from 'react';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: ReactNode;
};

function CodeGuide({ children }: Props) {
  const { theme } = useTheme();

  return <pre className={cx('code-view', theme)}>{children}</pre>;
}

export default CodeGuide;
