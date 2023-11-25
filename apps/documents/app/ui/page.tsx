import { Button, Center, Spacing, Text, Flex } from '@upcast/react-ui';

import Link from 'next/link';
import { URL } from '@src/utils/url';

import Line from '@src/components/Line/Line';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import { version } from '@src/utils/utils';
const cx = classNames.bind(style);

function UIKit() {
  return (
    <Center className={cx('container')}>
      <Spacing direction='vertical' spacing={32} />
      <h1 className={cx('header')}>CDKit React UI</h1>
      <Spacing direction='vertical' spacing={56} />
      <Text className={cx('description')} as='p' typo='t1'>
        CDKit UI는 React 애플리케이션에 필요한 디자인 요소를 제공하는 간단한
        모듈식 구성요소 라이브러리 입니다.
      </Text>
      <Spacing direction='vertical' spacing={24} />
      <Line />
      <Spacing direction='vertical' spacing={56} />
      <Text typo='t1'>시작하기</Text>
      <Spacing direction='vertical' spacing={24} />
      <Flex className={cx('use-guide')}>
        <CodeGuide header='use npm' code={['npm install @cdkit/react-ui']} />
        <Spacing direction='vertical' spacing={24} />
        <CodeGuide header='use yarn' code={['yarn add @cdkit/react-ui']} />
      </Flex>
      <Spacing direction='vertical' spacing={36} />
      <Link href={URL.button}>
        <Button className={cx('goto')}>
          <Text typo='t2'>문서 보러 가기 ({version})</Text>
        </Button>
      </Link>
    </Center>
  );
}

export default UIKit;
