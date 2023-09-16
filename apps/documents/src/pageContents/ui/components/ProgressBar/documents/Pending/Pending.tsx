import { Flex, ProgressBar } from '@upcast/react-ui';

import style from '../style.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(style);

function Pending() {
  return (
    <Flex className={cx('pending')}>
      <ProgressBar percent={70} pending />
      <ProgressBar percent={70} />
    </Flex>
  );
}

export default Pending;
