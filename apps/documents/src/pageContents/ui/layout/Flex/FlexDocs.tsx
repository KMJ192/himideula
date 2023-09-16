import DocsContents from '@src/components/UIDocsContents/DocsContents';

import { documents } from './documents/documents';
import { apis } from './apis/apis';

function FlexDocs() {
  return (
    <DocsContents
      title='Flex'
      description='"display: flex;"가 지정된 컴포넌트'
      documents={documents}
      apis={apis}
    />
  );
}

export default FlexDocs;
