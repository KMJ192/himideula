import { Fragment } from 'react';
import { Spacing, Flex, Text } from '@upcast/react-ui';
import CodeGuide from '@src/components/CodeGuide/CodeGuide';

import { useUIDocsState } from '@src/store/pageContents/uiDocs/state';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Documents() {
  const { documents } = useUIDocsState();

  return documents.map(
    (
      { title, description, view, viewStyle, componentString },
      index: number,
    ) => {
      return (
        <Fragment key={index}>
          <Flex className={cx('container')}>
            <Text typo='h3'>{title}</Text>
            <Text typo='title2'>{description}</Text>
            <div className={cx('view')} style={viewStyle}>
              {view}
            </div>
            <CodeGuide header='javascript' code={componentString}></CodeGuide>
          </Flex>
          <Spacing direction='vertical' spacing={48} />
        </Fragment>
      );
    },
  );
}

export default Documents;
