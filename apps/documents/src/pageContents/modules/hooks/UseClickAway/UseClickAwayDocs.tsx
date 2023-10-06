'use client';

import DocsContents from '@src/components/ModuleDocsContents/DocsContents';

import { apis } from './apis';
import { usage } from './usage';
import Playground from './Playground/Playground';

function UseClickAwayDocs() {
  return (
    <DocsContents
      title='useClickAway'
      description='특정 영역 이외의 마우스 클릭을 감지하는 hook 입니다.'
      usage={usage}
      apis={apis}
      playground={{
        component: <Playground />,
      }}
    />
  );
}

export default UseClickAwayDocs;
