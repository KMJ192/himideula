import { Button, Center, Spacing, Text, Flex } from '@ssamssam/react-ui';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import Link from 'next/link';
import { URL } from '@src/utils/url';
const cx = classNames.bind(style);

function Components() {
  return (
    <Center className={cx('container')}>
      <Spacing direction='vertical' spacing={106} />
      <h1 className={cx('header')}>SSamSSam React UI</h1>
      <Spacing direction='vertical' spacing={56} />
      <Text className={cx('description')} as='p' typo='t1'>
        SSamSSam UI는 React 애플리케이션에 필요한 디자인 요소를 제공하는 간단한
        모듈식 구성요소 라이브러리 입니다.
      </Text>
      <Spacing direction='vertical' spacing={80} />
      <Link href={URL.button}>
        <Button className={cx('goto')}>
          <Text typo='t2'>Getting Start</Text>
        </Button>
      </Link>
    </Center>
  );
}

export default Components;
