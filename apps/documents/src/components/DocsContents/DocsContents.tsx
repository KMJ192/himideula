'use client';

import { useEffect, useState } from 'react';

import {
  Text,
  Tab,
  Spacing,
  type TabOption,
  type TabOptionKey,
} from '@ssamssam/react-ui';
import Line from '../Line/Line';

import Documents from './Documents/Documents';
import APIs from './APIs/APIs';
import CSSVariables from './CSSVariables/CSSVariables';
import Playground from './Playground/Playground';

import {
  type Documents as DocType,
  type APIs as APIsType,
  useDocsContentsState,
} from '@src/store/components/DocsContents/state';

import classNames from 'classnames/bind';
import style from './style.module.scss';
const cx = classNames.bind(style);

type Props = {
  title: string;
  description: string;
  documents: Array<DocType>;
  apis: Array<APIsType>;
};

const options: Array<TabOption> = [
  {
    key: 0,
    contents: (
      <Text typo='s1' className={cx('option-text')}>
        Documents
      </Text>
    ),
  },
  {
    key: 1,
    contents: (
      <Text typo='s1' className={cx('option-text')}>
        APIs
      </Text>
    ),
  },
  {
    key: 2,
    contents: (
      <Text typo='s1' className={cx('option-text')}>
        CSS Variable
      </Text>
    ),
  },
  {
    key: 3,
    contents: (
      <Text typo='s1' className={cx('option-text')}>
        Playground
      </Text>
    ),
  },
];

const components = [<Documents />, <APIs />, <CSSVariables />, <Playground />];

function DocsContents({ title, description, documents, apis }: Props) {
  const [selected, setSelected] = useState(0);
  const { viewComponent } = useDocsContentsState();

  const onSelect = (_: TabOptionKey, idx: number) => {
    if (selected !== idx) {
      setSelected(idx);
    }
  };

  useEffect(() => {
    viewComponent({
      title,
      documents,
      apis,
      cssVars: [],
      playground: [],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, documents]);

  return (
    <section className={cx('container')}>
      <Text typo='h2'>{title}</Text>
      <Spacing direction='vertical' spacing={8} />
      <Text>{description}</Text>
      <Spacing direction='vertical' spacing={16} />
      <Line />
      <Spacing direction='vertical' spacing={24} />
      <Tab options={options} selected={selected} onSelect={onSelect} />
      <Spacing direction='vertical' spacing={56} />
      <section>{components[selected]}</section>
    </section>
  );
}

export default DocsContents;
