'use client';

import React, { useEffect } from 'react';
import { useTrie } from './useTrie';
import { ITrie } from './useTrie/types';

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

  useEffect(() => {
    console.log(trie.containList('pp'));
  }, [trie]);

  return <div>Render Docs</div>;
}

export default TrieHook;
