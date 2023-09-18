import { useState } from 'react';
import { Flex, Row, Spinner, Text } from '@upcast/react-ui';
import { InfiniteScroll, sleep } from '@upcast/react-modules';
import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const { theme } = useTheme();
  const [list, setList] = useState(Array.from({ length: 20 }, () => 0));
  const [isLoading, setIsLoading] = useState(false);

  const onLoad = async () => {
    setIsLoading(true);
    await sleep(1000);
    setList((list) => {
      return [...list, ...Array.from({ length: 20 }, () => 0)];
    });
    setIsLoading(false);
  };

  return (
    <Flex className={style.container}>
      <Text>InfiniteScroll의 작동 예시 입니다.</Text>
      <InfiniteScroll
        as='ul'
        className={cx('infinite', theme)}
        isLoading={isLoading}
        loadingElement={
          <div className={style.spinner}>
            <Spinner />
          </div>
        }
        onLoad={onLoad}
      >
        {list.map((_, idx) => {
          return (
            <Row as='li' key={idx}>
              Row : {idx + 1}
            </Row>
          );
        })}
      </InfiniteScroll>
    </Flex>
  );
}

export default Playground;
