import DocsContents from '@src/components/HooksDocsContents/DocsContents';

import { apis } from './apis';
import { usage } from './usage';
import { dataType } from './dataType';

function TrieHook() {
  return (
    <DocsContents
      title='useTrie'
      description='trie DS를 사용할 수 있는 hooks 입니다.'
      usage={usage}
      dataType={dataType}
      apis={apis}
    />
  );
}

export default TrieHook;
