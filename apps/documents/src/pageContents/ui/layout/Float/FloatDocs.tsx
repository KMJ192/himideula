import DocsContents from '@src/components/UIDocsContents/DocsContents';
import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';

function FloatDocs() {
  return (
    <DocsContents
      title='Float'
      description='부유 속성'
      documents={documents}
      apis={apis}
      cssVar={cssVar}
    />
  );
}

export default FloatDocs;
