'use client';

import DocsContents from '@src/components/ModuleDocsContents/DocsContents';
import { apis } from './apis';
import { usage } from './usage';
import Playground from './Playground/Playground';

function InfiniteScrollDocs() {
  return (
    <DocsContents
      title='InfiniteScroll'
      description='InfiniteScroll 컴포넌트 문서 페이지'
      usage={usage}
      apis={apis}
      playground={{
        component: <Playground />,
      }}
    />
  );
}

export default InfiniteScrollDocs;
