import { Flex, Checkbox } from '@ssamssam/react-ui';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function Multiple() {
  return (
    <Flex className={cx('multiple')}>
      <Checkbox multiple={false} checked>
        Single
      </Checkbox>
      <Checkbox multiple checked>
        Multi
      </Checkbox>
    </Flex>
  );
}

export default Multiple;
