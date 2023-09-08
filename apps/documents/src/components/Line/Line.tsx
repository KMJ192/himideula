'use client';

import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Line() {
  const { theme } = useTheme();

  return <div className={cx('line', theme)}></div>;
}

export default Line;
