import { useRef, useState } from 'react';
import { useClickAway } from '@upcast/react-modules';
import { Flex, Popup, Text } from '@upcast/react-ui';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const ref = useRef(null);
  const [isClickAway, setIsClickAway] = useState('');

  const onClickAway = () => {
    setIsClickAway('영역 이외 공간 클릭');
  };

  useClickAway({
    onClickAway,
    elementRefs: [ref],
  });

  return (
    <Flex className={cx('container')}>
      <Popup
        visible
        className={cx('area')}
        ref={ref}
        onClick={() => {
          setIsClickAway('영역 클릭');
        }}
      >
        <Flex className={cx('contents')}>
          <Text>클릭!</Text>
          <Text>{isClickAway}</Text>
        </Flex>
      </Popup>
    </Flex>
  );
}

export default Playground;
