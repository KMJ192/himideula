'use client';

import DocsContents from '@src/components/ComponentsDocsContents/DocsContents';

import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';

function TableDocs() {
  return (
    <DocsContents
      title='DataTable'
      description='DataTable 컴포넌트 가이드'
      documents={documents}
      apis={apis}
      cssVar={cssVar}
    />
  );
}

export default TableDocs;
