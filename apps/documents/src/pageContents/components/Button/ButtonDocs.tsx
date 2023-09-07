import DocsContents from '@src/components/ComponentsDocsContents/DocsContents';

import Playground from './Playground/Playground';
import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';

function ButtonDocs() {
  return (
    <DocsContents
      title='Button'
      defaultTag='button'
      description='Button 컴포넌트 가이드'
      documents={documents}
      apis={apis}
      cssVar={cssVar}
      playground={{
        component: <Playground />,
      }}
    />
  );
}

export default ButtonDocs;
