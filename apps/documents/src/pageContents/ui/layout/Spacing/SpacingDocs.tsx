import DocsContents from '@src/components/ComponentsDocsContents/DocsContents';
import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';

function SpacingDocs() {
  return (
    <DocsContents
      title='Spacing'
      description='사이 공간'
      documents={documents}
      apis={apis}
      cssVar={cssVar}
    />
  );
}

export default SpacingDocs;
