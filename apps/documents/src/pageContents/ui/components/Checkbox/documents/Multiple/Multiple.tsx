import { Flex, Checkbox } from '@upcast/react-ui';

import classNames from 'classnames/bind';
import style from '../style.module.scss';
const cx = classNames.bind(style);

function Multiple() {
  return (
    <Flex className={cx('multiple')}>
      <Checkbox>UnChecked</Checkbox>
      <Checkbox multiple={false} checked>
        Single
      </Checkbox>
      <Checkbox multiple={false} checked disabled>
        Single + Disabled
      </Checkbox>
      <Checkbox multiple checked>
        Multi
      </Checkbox>
      <Checkbox multiple checked disabled>
        Multi + Disabled
      </Checkbox>
    </Flex>
  );
}

export default Multiple;
