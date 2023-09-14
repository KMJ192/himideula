import { CSS_VAR_TYPE } from '@src/components/ComponentsDocsContents/CSSVariable/types';
import type { CSSVar } from '@src/store/components/DocsContents/state';

const cssVar: Array<CSSVar> = [
  {
    name: '--ss-layout-spacing-gap',
    type: CSS_VAR_TYPE.LAYOUT,
    defaultValue: '0px',
    description: '사이 공간 지정',
  },
];
export { cssVar };
