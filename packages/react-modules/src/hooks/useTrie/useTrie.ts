import { useMemo, useEffect, useState } from 'react';

import { Trie, type TrieData } from './Trie';
import Hangul from './Trie/Hangul';

type Params<T> = {
  dictionary?: Array<TrieData<T>>;
  isBuild?: boolean;
};

/**
 * trie 생성
 * @param dictionary trie 생성 데이터
 * @param isBuild trie 생성 여부
 * @returns
 */
function useTrie<T = any>({ dictionary = [], isBuild = true }: Params<T>) {
  const trie = useMemo(() => new Trie<T>(), []);
  const [t, setT] = useState(new Trie<T>());

  useEffect(() => {
    if (isBuild && trie.isDiff(dictionary)) {
      trie.initialize();
      dictionary.forEach((val: TrieData<T>) => {
        const extract = Hangul.make(val.content);
        trie.insert(extract, val);
      });
    }
  }, [dictionary, isBuild, trie]);

  useEffect(() => {
    setT(trie);
  }, [trie]);

  return t;
}

export type { Params as UseTrieParams };
export default useTrie;
