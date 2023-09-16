import DocsContents from '@src/components/UIDocsContents/DocsContents';

import Playground from './Playground/Playground';
import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';
import { dataType } from './dataType/dataType';

function TabDocs() {
  return (
    <DocsContents
      title='Tab'
      description='Tab 컴포넌트 가이드'
      documents={documents}
      apis={apis}
      cssVar={cssVar}
      playground={{
        component: <Playground />,
      }}
      dataType={dataType}
    />
  );
}

export default TabDocs;
