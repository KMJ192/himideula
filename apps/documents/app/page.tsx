import Link from 'next/link';
import { Button, Center, Spacing, Text, Flex } from '@upcast/react-ui';

import Line from '@src/components/Line/Line';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { URL } from '@src/utils/url';

import classNames from 'classnames/bind';
import style from './style.module.scss';
import { version } from '@src/utils/utils';
const cx = classNames.bind(style);

function Home() {
  return (
    <Center className={cx('container')}>
      <Spacing direction='vertical' spacing={32} />
      <h1 className={cx('header')}>UPCast</h1>
      <Spacing direction='vertical' spacing={56} />
      <Text className={cx('description')} as='p' typo='t1'>
        UPCast은 React 애플리케이션에 필요한 디자인 요소 및 기능을 제공하는
        간단한 모듈식 구성요소 라이브러리 입니다.
      </Text>
      <Spacing direction='vertical' spacing={24} />
      <Line />
      <Spacing direction='vertical' spacing={56} />
      <Text typo='h3'>시작하기</Text>
      <Spacing direction='vertical' spacing={24} />
      <Flex className={cx('start-group')}>
        <Flex className={cx('ui')}>
          <CodeGuide header='use npm' code={['npm install @upcast/react-ui']} />
          <Spacing direction='vertical' spacing={24} />
          <CodeGuide header='use yarn' code={['yarn add @upcast/react-ui']} />
          <Spacing direction='vertical' spacing={36} />
          <Link href={URL.ui}>
            <Button className={cx('goto-button')}>
              <Text typo='t2'>UI 보러 가기 ({version})</Text>
            </Button>
          </Link>
        </Flex>
        <Flex className={cx('modules')}>
          <CodeGuide
            header='use npm'
            code={['npm install @upcast/react-modules']}
          />
          <Spacing direction='vertical' spacing={24} />
          <CodeGuide
            header='use yarn'
            code={['yarn add @upcast/react-modules']}
          />
          <Spacing direction='vertical' spacing={36} />
          <Link href={URL.modules}>
            <Button className={cx('goto-button')}>
              <Text typo='t2'>Module 보러 가기 ({version})</Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Center>
  );
}

export default Home;
