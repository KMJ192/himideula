import { Fragment } from 'react';
import { Spacing, Flex, Text } from '@ssamssam/react-ui';

import { useDocsContentsState } from '@src/store/components/DocsContents/state';
import { useTheme } from '@src/store/theme/themeState';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

function Documents() {
  const { documents } = useDocsContentsState();
  const { theme } = useTheme();

  return documents.map(
    ({ title, description, view, componentString }, index: number) => {
      return (
        <Fragment key={index}>
          <Flex className={cx('container')}>
            <Text typo='h3'>{title}</Text>
            <Text typo='title2'>{description}</Text>
            <div className={cx('view')}>{view}</div>
            <pre className={cx('code-guide', theme)}>{componentString}</pre>
          </Flex>
          <Spacing direction='vertical' spacing={48} />
        </Fragment>
      );
    },
  );
}

export default Documents;
