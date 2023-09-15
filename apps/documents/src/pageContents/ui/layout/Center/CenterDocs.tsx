import DocsContents from '@src/components/UIDocsContents/DocsContents';

import { documents } from './documents/documents';
import { apis } from './apis/apis';
import Playground from './Playground/Playground';

function CenterDocs() {
  return (
    <DocsContents
      title='Center'
      description='중앙을 지정하는 레이아웃'
      documents={documents}
      apis={apis}
      playground={{
        component: <Playground />,
      }}
    />
  );
}

export default CenterDocs;
