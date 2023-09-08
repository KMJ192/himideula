import { Button, Center, Spacing, Text, Flex } from '@ssamssam/react-ui';

import Link from 'next/link';
import { URL } from '@src/utils/url';

import Line from '@src/components/Line/Line';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import classNames from 'classnames/bind';
import style from './style.module.scss';
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
      <Spacing direction='vertical' spacing={24} />
      <Line />
      <Spacing direction='vertical' spacing={56} />
      <Text typo='t1'>시작하기</Text>
      <Spacing direction='vertical' spacing={24} />
      <Flex className={cx('use-guide')}>
        <CodeGuide header='use npm' code={['npm install @ssamssam/react-ui']} />
        <Spacing direction='vertical' spacing={24} />
        <CodeGuide header='use yarn' code={['yarn add @ssamssam/react-ui']} />
      </Flex>
      <Spacing direction='vertical' spacing={36} />
      <Link href={URL.button}>
        <Button className={cx('goto')}>
          <Text typo='t2'>문서 보러 가기 (0.0.1v)</Text>
        </Button>
      </Link>
    </Center>
  );
}

export default Components;
