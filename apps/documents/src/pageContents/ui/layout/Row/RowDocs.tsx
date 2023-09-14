import DocsContents from '@src/components/ComponentsDocsContents/DocsContents';

import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';

function RowDocs() {
  return (
    <DocsContents
      title='Row'
      description='열을 생성하는 컴포넌트'
      documents={documents}
      apis={apis}
      cssVar={cssVar}
    />
  );
}

export default RowDocs;
