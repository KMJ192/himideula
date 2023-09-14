import DocsContents from '@src/components/ComponentsDocsContents/DocsContents';

import { documents } from './documents/documents';
import { apis } from './apis/apis';

function GridDocs() {
  return (
    <DocsContents
      title='Grid'
      description='"display: Grid;"가 지정된 컴포넌트'
      documents={documents}
      apis={apis}
    />
  );
}

export default GridDocs;
