'use client';

import DocsContents from '@src/components/ModuleDocsContents/DocsContents';
import { apis } from './apis';
import { usage } from './usage';

function UseComponentDidMountDocs() {
  return (
    <DocsContents
      title='useComponentDidMount'
      description='컴포넌트 마운트시, 단 한번 실행됩니다.'
      usage={usage}
      apis={apis}
    />
  );
}

export default UseComponentDidMountDocs;
