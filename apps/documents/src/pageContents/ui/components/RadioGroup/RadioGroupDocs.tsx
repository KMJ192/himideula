import DocsContents from '@src/components/UIDocsContents/DocsContents';

import Playground from './Playground/Playground';
import { documents } from './documents/documents';
import { apis } from './apis/apis';
import { cssVar } from './cssVar/cssVar';
import { dataType } from './dataType/dataType';

function RadioGroupDocs() {
  return (
    <DocsContents
      title='RadioGroup'
      description='RadioGroup 컴포넌트 가이드'
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

export default RadioGroupDocs;
