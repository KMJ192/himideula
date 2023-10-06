'use client';

import DocsContents from '@src/components/UIDocsContents/DocsContents';

import Playground from './Playground/Playground';
import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';
import { dataType } from './dataType/dataType';

function SelectDocs() {
  return (
    <DocsContents
      title='Select'
      description='Select 컴포넌트 가이드'
      documents={documents}
      apis={apis}
      cssVar={cssVar}
      dataType={dataType}
      playground={{
        component: <Playground />,
      }}
    />
  );
}

export default SelectDocs;
