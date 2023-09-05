import { Flex, Text } from '@ssamssam/react-ui';
import { useDocsContentsState } from '@src/store/components/DocsContents/state';

import Line from '@src/components/Line/Line';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Playground() {
  const { title, playground } = useDocsContentsState();

  return (
    <Flex className={cx('playground')}>
      <Text typo='h3'>{title} 컴포넌트 UI</Text>
      <Line></Line>
      {playground?.component}
    </Flex>
  );
}

export default Playground;
