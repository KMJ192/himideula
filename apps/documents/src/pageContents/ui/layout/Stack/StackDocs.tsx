import DocsContents from '@src/components/UIDocsContents/DocsContents';
import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';

function StackDocs() {
  return (
    <DocsContents
      title='Stack'
      description=''
      documents={documents}
      apis={apis}
      cssVar={cssVar}
    />
  );
}

export default StackDocs;
