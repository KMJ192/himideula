'use client';

import React, { useEffect } from 'react';
import useTrie from './useTrie/useTrie';
import DocsContents from '@src/components/HooksDocsContents/DocsContents';

const test = [
  {
    key: 0,
    label: 'a',
  },
  {
    key: 1,
    label: 'apple',
  },
  {
    key: 2,
    label: 'application',
  },
  {
    key: 3,
    label: 'app',
  },
];

function TrieHook() {
  const trie = useTrie<{ [key: string]: string }>({
    dictionary: test,
  });

  console.log(trie);

  return <DocsContents />;
}

export default TrieHook;
