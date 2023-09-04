import DocsContents from '@src/components/DocsContents/DocsContents';

import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';
import { playground } from './playground/playground';

function ButtonDocs() {
  return (
    <DocsContents
      title='Button'
      description='Button 컴포넌트'
      documents={documents}
      apis={apis}
      cssVar={cssVar}
      playground={playground}
    />
  );
}

export default ButtonDocs;
