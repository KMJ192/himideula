import React, { useState } from 'react';
import { Flex, Input, Row, Spacing, Text } from '@upcast/react-ui';
import { type TrieData, useTrie } from '@upcast/react-modules';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

const dictionary: Array<TrieData> = [
  {
    key: 0,
    content: 'a',
    index: 0,
  },
  {
    key: 1,
    content: 'apple',
    index: 1,
  },
  {
    key: 2,
    content: 'append',
    index: 2,
  },
  {
    key: 3,
    content: 'app',
    index: 3,
  },
  {
    key: 4,
    content: '한글',
    index: 4,
  },
  {
    key: 5,
    content: '한자',
    index: 5,
  },
];

function Playground() {
  const { trie } = useTrie({
    dictionary,
  });
  const [list, setList] = useState(dictionary);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const containList = trie.containList(value);
    if (value.length === 0) {
      setList(dictionary);
      return;
    }
    setList(containList);
  };

  return (
    <Flex className={cx('container')}>
      <Text>Input박스에 입력되는 문자열에 따라 자동필터링이 됩니다.</Text>
      <Spacing spacing={32} />
      <Input placeholder='문자열을 입력해주세요.' onChange={onChange} />
      <Spacing spacing={16} />
      <Flex as='ul' className={cx('list')}>
        {list.map(({ key, content }) => {
          return <Row key={key}>{content}</Row>;
        })}
      </Flex>
    </Flex>
  );
}

export default Playground;
