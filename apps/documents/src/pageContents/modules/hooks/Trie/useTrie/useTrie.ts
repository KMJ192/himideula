import { useMemo, useEffect, useState } from 'react';

import Trie from './Trie/Trie';
import Hangul from './Trie/Hangul';

import type { TrieData } from './Trie/types';

type Props<T> = {
  dictionary?: Array<TrieData<T>>;
  isBuildTrie?: boolean;
};

/**
 * trie 생성
 * @param dictionary trie 생성 데이터
 * @param isBuildTrie trie 생성 여부
 * @returns
 */
function useTrie<T = any>({ dictionary = [], isBuildTrie = true }: Props<T>) {
  const trie = useMemo(() => new Trie<T>(), []);
  const [t, setT] = useState(new Trie<T>());

  useEffect(() => {
    if (isBuildTrie && trie.isDiff(dictionary)) {
      trie.initialize();
      dictionary.forEach((val: TrieData<T>) => {
        const extract = Hangul.make(val.label);
        trie.insert(extract, val);
      });
    }
  }, [dictionary, isBuildTrie, trie]);

  useEffect(() => {
    setT(trie);
  }, [trie]);

  return t;
}

export default useTrie;
