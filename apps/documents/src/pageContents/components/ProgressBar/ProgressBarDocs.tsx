import DocsContents from '@src/components/ComponentsDocsContents/DocsContents';

import Playground from './Playground/Playground';
import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';

function ProgressBarDocs() {
  return (
    <DocsContents
      title='ProgressBar'
      description='ProgressBar 컴포넌트 가이드'
      documents={documents}
      apis={apis}
      cssVar={cssVar}
      playground={{
        component: <Playground />,
      }}
    />
  );
}

export default ProgressBarDocs;
