import { Text } from '@ssamssam/react-ui';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  title: string;
};

function DocsContents({ title }: Props) {
  return (
    <section className={cx('container')}>
      <Text typo='h2'>{title}</Text>
      {/* <Tab /> */}
    </section>
  );
}

export default DocsContents;
